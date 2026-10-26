function errorHandler(error, req, res, next) {
  console.error(error);

  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((item) => item.message);
    return res.status(400).json({ message: messages.join(", ") });
  }

  if (error.name === "CastError") {
    return res.status(400).json({ message: "Invalid data format" });
  }

  res.status(500).json({ message: "Internal server error" });
}

module.exports = errorHandler;
