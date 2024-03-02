import React from "react";
import "./demoForm.scss";
import { useRef } from "react";
//https://script.google.com/macros/s/AKfycbwvHly1_2rNguXG2W-fzW5vU7KrlIHNB8coM5zV8IQH0lGI-SS5c0JQTZpYvksbwm04/exec
export default function DemoForm() {
  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle); // Collect form data

    fetch(
      "https://script.google.com/macros/s/AKfycbxg_NL2wukiVT_VjFXvcbsoOEDpc-_GbDsBizoRQo6zHIlsbpPdbaqJtEQYsGZAm6WIlw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Return the response text instead of trying to parse it as JSON
        return response.text();
      })
      .then((data) => {
        console.log("Form submission successful:", data);
        // Optionally, handle success response here, such as displaying a success message
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Optionally, handle error here, such as displaying an error message to the user
      });
  }
  return (
    <form
      method="POST"
      onSubmit={(e) => Submit(e)}
      className="form w-md-100 w-lg-75  heroForm"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="Name"
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
            name="CountryCode"
            type="text"
            className="form-control"
            id="countryCode"
            placeholder="(+96)"
          />
        </div>
        <div className="col">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            name="PhoneNumber"
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Enter Your Phone Number"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="companyName" className="form-label">
          Company Name
        </label>
        <input
          name="CompanyName"
          type="text"
          className="form-control"
          id="companyName"
          placeholder="Enter Your company Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="companyEmail" className="form-label">
          Company Email
        </label>
        <input
          name="CompanyEmail"
          type="email"
          className="form-control"
          id="companyEmail"
          placeholder="example@company.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="numberOfInvoices" className="form-label">
          Number of invoices
        </label>
        <select
          name="NumberOfInvoices"
          className="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Your Option</option>
          <option value={1}>0 - 1,0000 </option>
          <option value={2}>1,000 - 10,000</option>
          <option value={3}>10,000 - 50,000</option>
          <option value={3}>50,000 - 500,000</option>
          <option value={3}> &gt; 500,000</option>
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
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
    </form>
  );
}
