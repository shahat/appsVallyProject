import React from "react";
import { IoIosArrowUp } from "react-icons/io";
const { useState } = React;

import "./navBar.scss";
export default function NavBar() {
  const [aboutUsDropdownVisible, setAboutUsDropdownVisible] = useState(false);
  const [productsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);

  const toggleAboutUsDropdown = () => {
    setAboutUsDropdownVisible(!aboutUsDropdownVisible);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownVisible(!productsDropdownVisible);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownVisible(!servicesDropdownVisible);
  };

  const company = {
    aboutUs: ["Company", "Customer", "Press"],
    products: [
      "Excel eInvoice App",
      " Quickbooks Online eInvoice Integration App",
      " Quickbooks Desktop eInvoice Integration App",
      "Zoho",
      "Xero",
      "  QuixcelERP, POS and Mobile POS",
    ],
    services: [
      " QuixcelInvoiceSystem [ coming soon ]",
      " Dashboard to monitor invoices & generate reports [ coming soon ]",
      " Custom Integration services",
      " API services for ETA, ZATCA, and JOFOTARA",
    ],
  };

  return (
    <>
      <nav className="navbar bg-body-white sticky bg-white top-0">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            AVTax
          </a>
          <div className="navLinksContainer d-none d-lg-block">
            <ul className="navbar-menu ">
              <li
                className="nav-item active"
                onMouseEnter={() => setAboutUsDropdownVisible(true)}
                onMouseLeave={() => setAboutUsDropdownVisible(false)}
                onClick={toggleAboutUsDropdown}
              >
                <a className="nav-link" href="#">
                  About us{" "}
                  <span className="sr-only">
                    <IoIosArrowUp
                      className={aboutUsDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>

                {aboutUsDropdownVisible && (
                  <div className="dropdown-menu position-absolute">
                    {company.aboutUs.map((item, index) => (
                      <a className="dropdown-item p-1 m-0" href="#" key={index}>
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li className="nav-item active postion-relative">
                <a
                  className="nav-link"
                  href="#"
                  onClick={toggleProductsDropdown}
                >
                  Products
                  <span className="sr-only ">
                    {" "}
                    <IoIosArrowUp
                      className={productsDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>
                {productsDropdownVisible && (
                  <div className="dropdown-menu position-absolute">
                    {company.products.map((item, index) => (
                      <a className="dropdown-item p-1 m-0" key={index}>
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              {/* ========= services dropdown ========= */}
              <li className="nav-item active services-dropdown">
                <a
                  className="nav-link"
                  href="#"
                  // onMouseEnter={() => setServicesDropdownVisible(true)}
                  // onMouseLeave={() => setServicesDropdownVisible(false)}
                  onClick={toggleServicesDropdown}
                >
                  Services{" "}
                  <span className="sr-only">
                    {" "}
                    <IoIosArrowUp
                      className={servicesDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>
                {servicesDropdownVisible && (
                  <div
                    className="dropdown-menu position-absolute "
                    // onMouseEnter={() => setServicesDropdownVisible(true)}
                    // onMouseLeave={() => setServicesDropdownVisible(false)}
                  >
                    {company.services.map((item, index) => (
                      <a className="dropdown-item  p-1 m-0" key={index}>
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="#clients">
                  Clients
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="buttonContainer">
            <button className="btn btn-light d-inline-block m-2">
              {" "}
              Login / Register
            </button>
            <button className="btn btn-primary fw-bold">
              <a href="#BookADemo" className="text-decoration-none text-white">
                Book a demo
              </a>{" "}
            </button>
          </div>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* sidebar toggler content  */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                AVTax
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
