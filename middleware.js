const passport = require("passport");
const Listing = require("./module/listing");  
const Review = require("./module/reviews"); 

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureFlash: true,
//     failureRedirect: "/login"
//   }),
//   (req, res) => {
//     req.flash("success", "Welcome back to Instafluencer!");
//     const redirectUrl = res.locals.redirectUrl || "/listings";
//     res.redirect(redirectUrl);
//   }
// );

module.exports.isLoggedIn = (req , res ,next) => {
    if (!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in first");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next)=> {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


// In middleware.js, add:

module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewId, id } = req.params;

  const review = await Review.findById(reviewId);

  if (!review) {
    req.flash("error", "Review not found");
    return res.redirect(`/listings/${id}`);
  }

  if (!review.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to do that");
        return res.redirect(`/listings/${id}`);
    }
    next();
}