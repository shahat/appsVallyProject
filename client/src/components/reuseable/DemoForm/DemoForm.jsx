import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import instance from "../../../config/instance";
import "./demoForm.scss";
import { company } from "../../../assets/company.js";

export default function DemoForm() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    phoneNumber: "",
    companyName: "",
    companyEmail: "",
    requiredService: "",
    requiredProduct: "",
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
      if (response.status !== 201) {
        throw new Error(response.data); // Throw the response data directly
      }
      toast.success(response.data);
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit} className="form   heroForm">
      <div className="mb-3">
        <label className="form-label">Company Name</label>
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
        <label className="form-label">Number</label>
        <input
          required
          type="tel"
          className="form-control"
          id="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          aria-describedby="phoneNumber"
          placeholder="(+Code)  contact number "
        />
      </div>
      <div className="mb-3">
        <label>Company Email</label>
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
        <label>Required Service</label>
        <select
          name="requiredService"
          className="form-select"
          placeholder="          Required Service
          "
          value={formData.requiredService}
          onChange={handleChange}
          aria-label="Default select example"
        >
          {company.services.map((item, index) => (
            <option key={`serv-${index}`} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Required Product</label>
        <select
          name="requiredProduct"
          className="form-select"
          value={formData.requiredProduct}
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option selected>Select You product </option>
          {company.products.map((item, index) => (
            <option key={`prod-${index}`} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input required type="checkbox" className="form-check-input" />
        <label className="form-check-label " style={{ fontSize: "13.5px" }}>
          By submitting the form, you agree to allow representatives of avtax to
          contact you for providing demonstration of our products.
        </label>
      </div>
      <button type="submit" className="btn btn-primary fw-bold w-100">
        Book a demo
      </button>
    </form>
  );
}
