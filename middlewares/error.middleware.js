const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);
    //mongoose bad objectid
    if (err.name === "CastError") {
      const message = "Resource not found";
      error = new Error(message);
      error.statusCode = 404;
    }
    //mongoose duplicate key
    if (err.code === 11000) {
      const message = "Duplicate field value entered";
      error = new Error(message);
      error.statusCode = 400;
    }
    //mongoose validTION erro
    if (err.name === "ValidationError") {
      const message = "Validation failed, entered data is invalid";
      error = new Error(message);
      error.statusCode = 400;
    }
    res.status(error.statusCode || 500).json({
      error: error.message || "Server Error",
      success: false,
    });
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware