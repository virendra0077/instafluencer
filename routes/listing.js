const express = require('express');
const router = express.Router({mergeParams: true});

const Listing = require('../module/listing');
const wrapAsync = require('../utils/wrap_async');
const ExpressError = require('../utils/express_error');
const { listingSchema } = require('../schema');

const { isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controller/listing.js");

// VALIDATION
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(400, msg);
    }
    next();
};

router.get('/' , wrapAsync(listingController.home));

// INDEX route - all influencers
router.get('/profile', wrapAsync(listingController.index));

// NEW route - must be before /:id routes
router.get('/new', isLoggedIn, wrapAsync(listingController.new));

// CREATE
router.post(
    '/',
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.create)
);

// SHOW - place after /new to avoid conflict
router.get("/:id", wrapAsync(listingController.show));

// EDIT
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.edit));

// UPDATE
router.put(
    '/:id',
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.update)
);

// DELETE
router.delete('/:id', isLoggedIn, isOwner, wrapAsync(listingController.delete));

module.exports = router;