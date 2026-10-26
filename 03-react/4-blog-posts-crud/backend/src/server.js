require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow the React/Vite frontend to call this backend.
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  })
);

// Parse JSON request bodies, for example POST/PATCH data.
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "Blog Posts API is running" });
});

app.use("/api/posts", postRoutes);

// Keep error handling after routes.
app.use(errorHandler);

// Export app for Vercel
module.exports = app;

// Start local development server only
if (require.main === module) {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`API running at http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Could not start server:", error.message);
      process.exit(1);
    });
}
