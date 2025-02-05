

const Property = require('../models/Property');

// Get all properties
exports.getAllProperties = async () => {
  return await Property.find();
};

// Create a new property
exports.createProperty = async (propertyData) => {
  const newProperty = new Property(propertyData);
  await newProperty.save();
  return newProperty;
};

