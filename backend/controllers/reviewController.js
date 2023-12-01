import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  req.body.userToken = req.cookies.accesToken;
  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: {
        reviews: savedReview._id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview,
    });
  } catch (err) {
    console.error("Error submitting review:", err);
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: err.message,
    });
  }
};
