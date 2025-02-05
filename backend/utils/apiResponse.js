// Helper for API responses

exports.success = (res, data, message = "Success") => {
  return res.status(200).json({ message, data });
};

exports.error = (res, error, message = "Error") => {
  return res.status(500).json({ message, error });
};

