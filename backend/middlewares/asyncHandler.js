// Wraps an async function to handle errors automatically
const asyncHandler = (fn) => (req, res, next) => {
  // Ensures fn returns a promise and handles errors
  Promise.resolve(fn(req, res, next)).catch((error) => {
    // Respond with 500 error and error message
    res.status(500).json({ message: error.message });

    // Log the error for debugging
    console.log("[asyncHandler]: ", error.message);
  });
};

// Export the asyncHandler function
export { asyncHandler };
