import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import instance from "../../../config/instance";
import "./demoForm.scss";

export default function DemoForm() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "",
    phoneNumber: "",
    companyName: "",
    companyEmail: "",
    numberOfInvoices: "",
  });

  // Update form data when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await instance.post("/customer/", formData);
      console.log(response.data);
      if (response.status !== 201) {
        throw new Error(response.data); // Throw the response data directly
      }
      toast.success(response.data);
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="form w-md-100 w-lg-75  heroForm"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="name"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="countryCode" className="form-label">
            Country Code
          </label>
          <input
            required
            name="countryCode"
            type="text"
            className="form-control"
            id="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            placeholder="(+96)"
          />
        </div>
        <div className="col">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            required
            name="phoneNumber"
            type="text"
            className="form-control"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="companyName" className="form-label">
          Company Name
        </label>
        <input
          required
          name="companyName"
          type="text"
          className="form-control"
          id="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter Your company Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="companyEmail" className="form-label">
          Company Email
        </label>
        <input
          required
          name="companyEmail"
          type="email"
          className="form-control"
          id="companyEmail"
          value={formData.companyEmail}
          onChange={handleChange}
          placeholder="example@company.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="numberOfInvoices" className="form-label">
          Number of invoices
        </label>
        <select
          name="numberOfInvoices"
          className="form-select"
          value={formData.numberOfInvoices}
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option selected>Select Your Option</option>
          <option value="0 - 1,0000">0 - 1,0000</option>
          <option value="1,000 - 10,000">1,000 - 10,000</option>
          <option value="10,000 - 50,000">10,000 - 50,000</option>
          <option value="50,000 - 500,000">50,000 - 500,000</option>
          <option value="> 500,000">&gt; 500,000</option>
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          required
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label
          className="form-check-label "
          style={{ fontSize: "13.5px" }}
          htmlFor="exampleCheck1"
        >
          By submitting the form, you agree to allow representatives of ClearTax
          to contact you for providing demonstration of our products.
        </label>
      </div>
      <button type="submit" className="btn btn-primary fw-bold w-100">
        Book a demo
      </button>
      <ToastContainer
        className="toast"
        // bottom-right
        autoClose={10000}
        style={{ zIndex: 10000 }}
      />
    </form>
  );
}
