function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    error: err.message,
    stack: process.env.NODE_ENV == "development" ? err.stack : "🍔",
  });
}

export { notFound, errorHandler };
