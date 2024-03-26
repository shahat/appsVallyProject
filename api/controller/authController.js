const User = require("../models/User");
const cryptoJs = require("crypto-js");
var jwt = require("jsonwebtoken");

// ============== register ==============
const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  // ============== make new user ==============
  if (!user) {
    try {
      const newUser = new User({
        username: req.body.username,
        email: email,
        password: cryptoJs.AES.encrypt(req.body.password, process.env.SECRET),
        isAdmin: req.body.isAdmin,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("user already exist");
  }
};

// ============== login ==============
const login = async (req, res) => {
  try {
    // ============== Check if email and password are provided ==============
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json("Email and password are required");
    }
    // ============== Find user by email ==============
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json("Wrong email or password");
    }

    // ============== Decrypt password and compare ==============
    const bytes = cryptoJs.AES.decrypt(user.password, process.env.SECRET);
    const originalPassword = bytes.toString(cryptoJs.enc.Utf8);
    if (originalPassword !== password) {
      return res.status(401).json("Wrong email or password");
    }
    // ============== generate access token ==============
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET,
      { expiresIn: "3d" }
    );
    // ============== Passwords match, prepare response ==============
    const { password: _, ...userInfo } = user._doc;
    res.status(200).json({
      user: userInfo,
      message: "Login successful",
      token: accessToken,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json("Internal Server Error");
  }
};
// ============== log out ==============
const logout = async (req, res) => {
  res.status(200).json("Logout successful");
};

module.exports = { register, login, logout };
