const passport = require("passport");
const Listing = require("./module/listing");  
const Review = require("./module/reviews"); 

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in first");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

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
    
    try {
        const listing = await Listing.findById(id);
        
        // Check if listing exists
        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }
        
        // Check if user is logged in
        if (!req.user) {
            req.flash("error", "You must be logged in");
            return res.redirect("/login");
        }
        
        // Check if user is the owner
        if (!listing.owner.equals(req.user._id)) {
            req.flash("error", "You don't have permission to do that");
            return res.redirect(`/listings/${id}`);
        }
        
        next();
    } catch (err) {
        req.flash("error", "Something went wrong");
        return res.redirect("/listings");
    }
}