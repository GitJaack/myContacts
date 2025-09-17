const cors = require("cors");

// const allowedOrigin = [
//   "http://localhost:3000",
//   "https://mycontacts-9gnn.onrender.com",
// ];
const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsOptions);
