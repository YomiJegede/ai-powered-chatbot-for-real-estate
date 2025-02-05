

const Property = require('../models/Property');

// Fetch all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error });
  }
};

// Fetch a single property by ID
exports.getPropertyById = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property', error });
  }
};

// Create a new property
exports.createProperty = async (req, res) => {
  const { title, description, price, location, bedrooms, imageUrl } = req.body;

  try {
    const newProperty = new Property({
      title,
      description,
      price,
      location,
      bedrooms,
      imageUrl,
    });

    await newProperty.save();
    res.status(201).json({ message: 'Property created successfully', property: newProperty });
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error });
  }
};

