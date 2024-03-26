const router = require("express").Router();
// verfiy token middleware
const verify = require("../utils/verifyToken");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  userStats,
} = require("../controller/usersController");

// routes
router.put("/:id", verify, updateUser);
router.delete("/:id", verify, deleteUser);
router.get("/", verify, getUsers);
router.get("/find/:id", getUser);
router.get("/stats", userStats);

module.exports = router;
