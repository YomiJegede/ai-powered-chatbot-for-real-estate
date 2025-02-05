
const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  bedrooms: { type: Number },
  imageUrl: { type: String },
}, { timestamps: true });

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;

