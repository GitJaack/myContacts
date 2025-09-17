const cors = require("cors");

const allowedOrigin = [
  "http://localhost:3000",
  "https://mycontacts-9gnn.onrender.com",
  "https://frolicking-heliotrope-126a11.netlify.app/",
];
const corsOptions = {
  origin: allowedOrigin,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsOptions);
