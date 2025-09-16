const { registerUser, loginUser } = require("../services/authService");

async function register(req, res) {
  const { email, password } = req.body;
  try {
    await registerUser({ email, password });
    res.status(201).json({ message: "Utilisateur enregistré avec succès" });
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: err.message || "Erreur serveur" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const { token } = await loginUser({ email, password });
    res.json({ token });
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: err.message || "Erreur serveur" });
  }
}

module.exports = { register, login };
