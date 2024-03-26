const User = require("../models/User");
const cryptoJs = require("crypto-js");


// ========= update user ==========
const updateUser = async (req, res) => {
  // only allow admin to update
  // check the update request comming from user or admin
  console.log("res.user===id: ", req.user);
  if (req.user.id === req.params.id || req.body.isAdmin) {
    // check id there if password is there we encrypt it
    if (req.body.password) {
      req.body.password = cryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    // forbidden
    res.status(403).json("You can update only your account");
  }
};
// ======== delete user ==========

const deleteUser = async (req, res) => {
  console.log("res.user===id: ", req.user);
//   protected route
  if (req.user.id === req.params.id || req.body.isAdmin) {
    try {
      const updatedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can delete only your account");
  }
};
// ========= get user ==========
const getUser = async (req, res) => {
        try {
          const user = await User.findById(req.params.id);
          const { password, ...others } = user._doc;
          res.status(200).json(others);
        } catch (error) {
          res.status(500).json(error);
        }
};
// ========= get all users ==========
const getUsers = async (req, res) => {
        const query = req.query.new;
        if (req.user.isAdmin) {
          try {
            const users = query
              ? await User.find().sort({ _id: -1 }).limit(5)
              : await User.find();
            res.status(200).json(users);
          } catch (error) {
            res.status(500).json(error);
          }
        } else {
          res.status(403).json("You are not allowed to see all users");
        }
};
// ========= user stats ==========
const userStats = async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);
  const monthArray = [
    "January",  
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ] ;  
    try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
module.exports = { updateUser, deleteUser, getUser, getUsers , userStats};
