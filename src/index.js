require("dotenv").config();
const express = require("express");

const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const reviewRoutes = require("./routes/review.routes");

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
