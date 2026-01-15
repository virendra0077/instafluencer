const { model } = require("mongoose");
const Listing = require("../module/listing");

module.exports.home =async (req, res) => {
    res.render("listings/home");
}
module.exports.index = async (req, res) => {   
  const allListings = await Listing.find({});
  res.render('listings/index', { allListings });
};

module.exports.new = async (req, res) => {
    
  res.render('listings/new');
}

module.exports.create = async (req, res) => {
    const listing = new Listing(req.body.listing);
    listing.owner = req.user._id; // correct variable
    await listing.save();
    req.flash("success", "New profile created");
    res.redirect('/listings');
  }

module.exports.show = async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: { path: "author" }
    })
    .populate("owner");

    // console.log("Listing reviews:", listing.reviews);

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  res.render("listings/show", { listing });
};

module.exports.edit = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {req.flash("error" , "Listing you requested does not exist!");
    return res.redirect("/listings");};
//   req.flash("success" , "Profile updated successfully")
  res.render('listings/edit', { listing });
}

module.exports.update = async (req, res) => {
    const { id } = req.params;
    
    await Listing.findByIdAndUpdate(id, req.body.listing);
    req.flash("success" , "Profile updated successfully")
    res.redirect(`/listings/${id}`);
  }


module.exports.delete = async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  
  req.flash("success" , "new Profile Deleted Successfully")
  res.redirect('/listings');
}