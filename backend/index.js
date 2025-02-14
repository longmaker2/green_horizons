import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: [
    "https://www.longmaker.tech",
    "https://long-green-horizons.vercel.app",
    "http://localhost:3000",
  ],
  credentials: true,
  sameSite: "None",
};

// Apply CORS middleware at the top
app.use(cors(corsOptions));

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "tour-booking",
    });

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
    console.error(err);
  }
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

// Redirects root URL to "/tours"
app.get("/", (req, res) => {
  res.redirect("/api/v1/tours");
});

app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
