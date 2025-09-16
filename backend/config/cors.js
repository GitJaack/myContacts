const cors = require("cors");

const allowedOrigin = "http://localhost:3000";
const corsOptions = {
  origin: allowedOrigin,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsOptions);
