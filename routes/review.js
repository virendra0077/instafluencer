const express = require("express");
const router = express.Router({ mergeParams: true });

const Listing = require("../module/listing");
const Review = require("../module/reviews");
const wrapAsync = require("../utils/wrap_async");
const ExpressError = require("../utils/express_error");
const { reviewSchema } = require("../schema");
const { isLoggedIn, isReviewAuthor } = require("../middleware");


const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, msg);
  }
  next();
};


// CREATE REVIEW


router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) throw new ExpressError(404, "Listing not found");

    const review = new Review(req.body.review);
    review.author = req.user._id;

    await review.save();

    listing.reviews.push(review);
    await listing.save();

    req.flash("success", "Review added successfully!"); // ✅ ADD THIS
    res.redirect(`/listings/${id}`);
  })
);

// DELETE REVIEW


router.delete(
  "/:reviewId",
  isLoggedIn,isReviewAuthor,
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId }
    });

    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
