const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const { User, Blacklist } = require("../models");

// ============== register ==============
const register = async (req, res) => {
  const { userName, email, password, isAdmin } = req.body;
  console.log(userName, email, password, isAdmin);

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      return res
        .status(401)
        .json({ message: "User already exists", user: existingUser });
    }
    // Encrypt the password
    const encryptedPassword = cryptoJs.AES.encrypt(
      password,
      process.env.SECRET
    ).toString();
    // Create a new user object
    const newUser = {
      userName: userName,
      email: email,
      password: encryptedPassword,
      isAdmin: isAdmin || false,
    };

    // Insert the new user into the database
    const createdUser = await User.create(newUser);

    // Send the response
    res.status(201).json(createdUser);
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json("Internal Server Error");
  }
};

// ============== login ==============
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Email and password are required");
    }

    // Find the user in the database by email
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json("Wrong email or password");
    }

    // Decrypt the stored password and compare with the provided password
    const decryptedPassword = cryptoJs.AES.decrypt(
      user.password,
      process.env.SECRET
    ).toString(cryptoJs.enc.Utf8);

    if (decryptedPassword !== password) {
      return res.status(401).json("Wrong email or password");
    }

    // Generate access token using JWT
    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.SECRET,
      { expiresIn: "3d" }
    );

    // Prepare user information for response
    const userInfo = { ...user.toJSON() };
    delete userInfo.password;

    // Send response with user info and access token
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
  console.log("this is the authorization header: ", req.headers);
  try {
    // Check if the Authorization header exists
    if (!req.headers.authorization) {
      return res.status(400).json("access denied");
    }

    // Get the token from the request headers
    const token = req.headers.authorization.split(" ")[1]; // Assuming the token is passed in the "Authorization" header

    // Add the token to the blacklist (assuming you have a Blacklist model)
    await Blacklist.create({ token: token });

    // Respond with a success message
    res.status(200).json("Logout successful");
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { register, login, logout };
