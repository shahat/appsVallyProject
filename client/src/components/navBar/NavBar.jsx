import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./navBar.scss";

export default function NavBar() {
  const [aboutUsDropdownVisible, setAboutUsDropdownVisible] = useState(false);
  const [productsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true); // Flag for initial load

  useEffect(() => {
    // Store the current scroll position when the component mounts
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAboutUsDropdown = () => {
    setAboutUsDropdownVisible(!aboutUsDropdownVisible);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownVisible(!productsDropdownVisible);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownVisible(!servicesDropdownVisible);
  };

  const handleSidebarClose = () => {
    // Restore the scroll position when closing the sidebar
    window.scrollTo(0, scrollPosition);
  };

  useEffect(() => {
    // After the initial load, setInitialLoad to false
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const company = {
    aboutUs: ["Company", "Customer", "Press"],
    products: [
      "Excel eInvoice App",
      "Quickbooks Online eInvoice Integration App",
      "Quickbooks Desktop eInvoice Integration App",
      "Zoho",
      "Xero",
      "QuixcelERP, POS and Mobile POS",
    ],
    services: [
      "QuixcelInvoiceSystem [ coming soon ]",
      "Dashboard to monitor invoices & generate reports [ coming soon ]",
      "Custom Integration services",
      "API services for ETA, ZATCA, and JOFOTARA",
    ],
  };

  return (
    <>
      <nav className="navbar bg-body-white sticky bg-white top-0">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <a className="navbar-brand m-0 " href="/"></a>
            <a className="text-decoration-none  " href="/">
              {" "}
              <h1 className="m-0 p-0 fs-5 text-white fw-bold ">avtax</h1>
            </a>
          </div>
          <div className="navLinksContainer d-none d-lg-block">
            <ul className="navbar-menu">
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
                    <IoIosArrowUp
                      className={productsDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>
                {productsDropdownVisible && (
                  <div className="dropdown-menu position-absolute">
                    {company.products.map((item, index) => (
                      <div className="dropdown-item p-1 m-0" key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </li>
              {/* ========= services dropdown ========= */}
              <li className="nav-item active services-dropdown">
                <a
                  className="nav-link"
                  href="#"
                  onClick={toggleServicesDropdown}
                >
                  Services{" "}
                  <span className="sr-only">
                    <IoIosArrowUp
                      className={servicesDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>
                {servicesDropdownVisible && (
                  <div className="dropdown-menu position-absolute">
                    {company.services.map((item, index) => (
                      <div className="dropdown-item p-1 m-0" key={index}>
                        {item}
                      </div>
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

          <div className="buttonContainer d-none d-md-block">
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
            onClick={handleSidebarClose}
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
                onClick={handleSidebarClose}
              />
            </div>
            <div className="offcanvas-body">
              {/* ------------------------------ */}
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseAboutUs"
                      aria-expanded="false"
                      aria-controls="collapseAboutUs"
                      onClick={handleSidebarClose}
                    >
                      About us
                    </button>
                  </h2>
                  <div
                    id="collapseAboutUs"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        {company.aboutUs.map((item, index) => (
                          <a
                            className="list-group-item list-group-item-action"
                            href="#"
                            key={index}
                            onClick={handleSidebarClose}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseProducts"
                      aria-expanded="false"
                      aria-controls="collapseProducts"
                      onClick={handleSidebarClose}
                    >
                      Products
                    </button>
                  </h2>
                  <div
                    id="collapseProducts"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        {company.products.map((item, index) => (
                          <a
                            className="list-group-item list-group-item-action"
                            href="#"
                            key={index}
                            onClick={handleSidebarClose}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseServices"
                      aria-expanded="false"
                      aria-controls="collapseServices"
                      onClick={handleSidebarClose}
                    >
                      Services
                    </button>
                  </h2>
                  <div
                    id="collapseServices"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        {company.services.map((item, index) => (
                          <a
                            className="list-group-item list-group-item-action"
                            href="#"
                            key={index}
                            onClick={handleSidebarClose}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------ */}

              <button
                className=" btn btn-primary d-block  m-3 mx-auto  fw-medium"
                type="submit"
              >
                <a
                  href="#BookADemo"
                  className="text-decoration-none text-white"
                  onClick={handleSidebarClose}
                >
                  {" "}
                  Book a demo
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
