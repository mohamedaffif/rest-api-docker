// Centralised error handling middleware for Express.js applications

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
    res.status(500).json({
        status:500,
         message: 'An unexpected error occurred. Please try again later.',
            error: err.message // Optionally include the error message in the response
         }); // Send a generic error response
}

export default errorHandler;