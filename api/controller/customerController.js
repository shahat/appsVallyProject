const Customer = require("../models/Customer");

// ============== create customer ==============
const createCustomer = async (req, res) => {
  const {
    name,
    countryCode,
    phoneNumber,
    companyName,
    companyEmail,
    numberOfInvoices,
  } = req.body;
  console.log("submited data", req.body);

  const customer = await Customer.findOne({ companyEmail });
  // ============== make new user ==============
  if (!customer) {
    try {
      const newCustomer = new Customer({
        name,
        countryCode,
        phoneNumber,
        companyName,
        companyEmail,
        numberOfInvoices,
      });
      const savedcustomer = await newCustomer.save();
      res.status(201).json("thanks for contacting with us");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "customer already exists" });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createCustomer, getAllCustomers };
