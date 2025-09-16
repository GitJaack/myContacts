const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  // Récupère le token dans le header Authorization
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Aucun token fourni" });
  }

  try {
    // Vérifie le token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "dev_jwt_secret"
    );
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalid" });
  }
};

module.exports = requireAuth;
