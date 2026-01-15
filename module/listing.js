const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true 
        , set: (value) => value.trim() === '' ? 'https://unsplash.com/photos/man-sitting-on-rock-surrounded-by-water--Q_t4SCN8c4' : value,
    },
    address: { type: String, required: true },
    followers: { type: Number, default: 0 },
    description: { type: String, required: true },
    reach: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    type: { type: String, enum: ['family content', 'mature content'], required: true },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref:"Review",

    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
