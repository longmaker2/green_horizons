import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user registration
export const register = async (req, res) => {
  try {
    console.log("Received registration request:", {
      email: req.body.email,
      username: req.body.username,
      // Omitted the password from logging for security reasons
    });

    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // creates a new instance of the User model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    // saves the new user to the database
    await newUser.save();

    console.log("User saved to the database");

    res.status(200).json({ success: true, message: "Created successfully" });
  } catch (err) {
    console.error("Registration failed:", err);

    if (err.code === 11000) {
      res
        .status(400)
        .json({ success: false, message: "Username or email already in use" });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to create. Please try again!",
      });
    }
  }
};

// user login
export const login = async (req, res) => {
  console.log("Login Request Body:", req.body);
  const identifier = req.body.identifier;

  try {
    console.log("Received login request:", {
      identifier: req.body.identifier,
      // Omitted the password from logging for security reasons
    });

    // Use a case-insensitive query for username
    const user = await User.findOne({
      $or: [
        { email: identifier },
        { username: { $regex: new RegExp(`^${identifier}$`, "i") } },
      ],
    });

    // log the user found in the database
    console.log("User found in the database:", user);

    // if user doesn't exist
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // if user exists, check the password or compare the password
    const checkCorrectPassword = await bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // log the result of comparing passwords
    console.log("Password comparison result:", checkCorrectPassword);

    // if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password or username" });
    }

    const { password, role, ...rest } = user._doc;

    // creates jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookie and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });

    // Log the sent token
    console.log("Token sent:", token);
  } catch (err) {
    console.error("Login failed:", err);

    res
      .status(500)
      .json({ success: false, message: "Failed to login. Please try again!" });
  }
};
