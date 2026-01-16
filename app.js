// Load environment variables first
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./module/listing.js');
const Review = require('./module/reviews.js');
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const wrapAsync = require('./utils/wrap_async.js')
const ExpressError = require('./utils/express_error.js')
const {listingSchema} = require("./schema.js")
const {reviewSchema} = require("./schema.js")
const session = require("express-session")
const MongoStore = require('connect-mongo');
const listings = require("./routes/listing.js")
const reviews = require("./routes/review.js")
const flash = require("connect-flash");
const User = require("./module/user.js");
const passport = require('passport');
const LocalStrategy = require("passport-local")
const userRoutes = require("./routes/user.js");

// Use MongoDB Atlas URL from environment variables
const mongoURI = process.env.ATLASDB_URL;

// Connect to MongoDB first
async function main() {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB Atlas');
}

main().then(() => {
    console.log('Mongoose connection established');
}).catch(err => {
    console.error('Mongoose connection error:', err);
});

// MongoDB session store configuration
const store = MongoStore.create({
    mongoUrl: mongoURI,
    touchAfter: 24 * 3600
});

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET_CODE,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash())


app.use(passport.initialize())
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user || null;
    next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Home route
const listingController = require("./controller/listing.js");
app.get('/', wrapAsync(listingController.home));

// Other routes
app.use("/listings", listings)
app.use("/listings/:id/reviews", reviews)
app.use("/", userRoutes);

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    // Check if response has already been sent
    if (res.headersSent) {
        return next(err);
    }
    
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { statusCode, message });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

