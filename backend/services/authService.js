const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

async function registerUser({ email, password }) {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const err = new Error("Email already in use");
    err.status = 400;
    throw err;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  return { id: user._id, email: user.email };
}

async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    const err = new Error("Invalid email or password");
    err.status = 400;
    throw err;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const err = new Error("Invalid email or password");
    err.status = 400;
    throw err;
  }
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET || "dev_jwt_secret",
    {
      expiresIn: "1h",
    }
  );
  return { token };
}

module.exports = {
  registerUser,
  loginUser,
};
