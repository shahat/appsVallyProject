const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: true, // Assuming company emails should be unique
  },
  numberOfInvoices: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
