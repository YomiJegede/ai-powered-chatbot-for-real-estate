// This middleware checks whether the authenticated user has an admin role (you can extend the User model to have a role property).
// You can add a role field to your User model (e.g., 'user', 'admin') to support this functionality.
// Middleware to check if the user has admin rights
exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden. Admins only.' });
  }
  next();
};

