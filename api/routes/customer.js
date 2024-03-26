const router = require("express").Router();
const {
  createCustomer,
  getAllCustomers,
} = require("../controller/customerController");
router.post("/", createCustomer);
router.get("/customers", getAllCustomers);
module.exports = router;
