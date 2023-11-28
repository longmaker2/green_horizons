import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        console.error("TokenExpiredError:", err.message);
        return res
          .status(401)
          .json({ success: false, message: "Token has expired" });
      }
      console.error("Verify Token Error:", err.message);
      return res
        .status(401)
        .json({ success: false, message: "Failed to authenticate token" });
    }

    req.user = user;
    console.log("User authenticated:", user);
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.id === req.params.id ||
      req.user.role === "user" ||
      req.user.role === "admin"
    ) {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You are not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You are not authorized!" });
    }
  });
};
