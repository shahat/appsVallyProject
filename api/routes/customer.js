const router = require("express").Router();
const {
  createCustomer,
  getAllCustomers,
} = require("../controller/customerController");
router.post("/", createCustomer);
router.get("/customers", getAllCustomers);
router.delete("/customers/:id", getAllCustomers);
module.exports = router;
