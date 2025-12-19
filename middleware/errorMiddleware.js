const errorHandler = (err, req, res, next) => {
  // If already set a status code (e.g. res.status(404)), keep it.
  // Otherwise default to 500.
  let statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  // Default message
  let message = err.message || "Server Error";

  // --- Mongoose: invalid ObjectId (CastError) ---
  // Example: /contacts/not-a-valid-id
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 400;
    message = "Invalid ID format";
  }

  // --- Mongoose: validation errors ---
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((e) => e.message).join(", ");
  }

  // --- MongoDB: duplicate key error (E11000) ---
  if (err.code === 11000) {
    statusCode = 400;
    const fields = Object.keys(err.keyValue || {});
    message = fields.length ? `${fields.join(", ")} already exists` : "Duplicate field value";
  }

  // --- JWT errors (optional but useful) ---
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Not authorized, token invalid";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Not authorized, token expired";
  }

  return res.status(statusCode).json({
    message,
    // Turn this on only during development if you want
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = { errorHandler };