const Joi = require('joi');

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    name: Joi.string()
      .trim()
      .min(1)
      .required(),

    image: Joi.string()
      .uri()
      .allow('', null) // optional
      .optional(),

    address: Joi.string()
      .trim()
      .min(1)
      .required(),

    followers: Joi.number()
      .integer()
      .min(0)
      .default(0),

    reach: Joi.number()
      .integer()
      .min(0)
      .default(0),

    description: Joi.string()
      .trim()
      .min(5)
      .required(),

    type: Joi.string()
      .valid('family content', 'mature content')
      .required(),
  }).required()
});





module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().integer().min(1).max(5).required(),
    comment: Joi.string().trim().min(3).required()
  }).required()
});
