// You can use this middleware to validate incoming request data, particularly for properties and user registration.

const { check, validationResult } = require('express-validator');

// Middleware to validate property creation request
exports.validateProperty = [
  check('title').not().isEmpty().withMessage('Title is required'),
  check('price').isNumeric().withMessage('Price must be a number'),
  check('location').not().isEmpty().withMessage('Location is required'),
  check('bedrooms').isInt({ min: 1 }).withMessage('Bedrooms must be a positive integer'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Middleware to validate user registration
exports.validateRegistration = [
  check('username').not().isEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

