// This service handles all the business logic for creating and fetching properties.
  
const Property = require('../models/Property');

// Fetch all properties
exports.getAllProperties = async () => {
  return await Property.find();
};

// Fetch a specific property by ID
exports.getPropertyById = async (id) => {
  const property = await Property.findById(id);
  if (!property) {
    throw new Error('Property not found');
  }
  return property;
};

// Create a new property
exports.createProperty = async (propertyData) => {
  const { title, description, price, location, bedrooms, imageUrl } = propertyData;

  const newProperty = new Property({
    title,
    description,
    price,
    location,
    bedrooms,
    imageUrl,
  });

  await newProperty.save();
  return newProperty;
};


