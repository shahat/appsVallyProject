const mongoose = require("mongoose");
// create user schema
const userSchema = new mongoose.Schema(
  {
    // define your user schema fields here
    username: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    img: {
      type: String,
      default:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
