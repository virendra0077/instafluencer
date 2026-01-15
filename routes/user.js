const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../module/user");
const wrapAsync = require("../utils/wrap_async");
const ExpressError = require("../utils/express_error");
const {saveRedirectUrl} = require("../middleware.js")

// ======================
// SIGNUP
// ======================

// GET signup form
router.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

// POST signup
router.post(
  "/signup",
  wrapAsync(async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      const newUser = new User({ username, email });
      const registeredUser = await User.register(newUser, password);

      req.login(registeredUser, err => {
        if (err) return next(err);
        req.flash("success", "Welcome to instafluencer!");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  })
);

// ======================
// LOGIN
// ======================

// GET login form
router.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

// POST login (passport middleware should run BEFORE this)
router.post(
  "/login",

  
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login"
  }),
  (req, res) => {
    req.flash("success", "Welcome back to Instafluencer!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    delete req.session.redirectUrl; 
    res.redirect(redirectUrl);
  }
);


// ======================
// LOGOUT
// ======================

router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    req.flash("success", "Logged out successfully");
    res.redirect("/listings");
  });
});

module.exports = router;
