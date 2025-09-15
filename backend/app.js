const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const setupSwagger = require("./config/swagger");
const contactRoutes = require("./routes/contactRoutes");
const corsMiddleware = require("./config/cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(corsMiddleware);

// Routes
app.use("/auth", authRoutes);
app.use("/contacts", contactRoutes);

// Swagger
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
