const { Customer } = require("../models");
// ============== create customer ==============
const createCustomer = async (req, res) => {
  console.log("create customer called");
  const {
    phoneNumber,
    companyName,
    companyEmail,
    requiredService,
    requiredProduct,
  } = req.body;

  try {
    const customer = await Customer.findOne({ where: { companyEmail } });
    if (!customer) {
      const newCustomer = await Customer.create({
        phoneNumber,
        companyName,
        companyEmail,
        requiredService,
        requiredProduct,
      });
      res.status(201).json("Thanks for contacting with us");
    } else {
      console.log("Customer already exists");
      res.status(409).json("Customer already exists");
    }
  } catch (err) {
    console.error("Error creating customer:", err);
    res.status(500).json("Error creating customer");
  }
};



// ============== get all customers ==============
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).json("Internal Server Error");
  }
};

// ============== delete customer ==============
const deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    await customer.destroy();
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (err) {
    console.error("Error deleting customer:", err);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { createCustomer, getAllCustomers, deleteCustomer };
