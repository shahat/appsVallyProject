import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { PiList } from "react-icons/pi";
import { company } from "../../assets/company";

import "./navBar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [aboutUsDropdownVisible, setAboutUsDropdownVisible] = useState(false);
  const [productsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarClose = () => {
    window.scrollTo(0, scrollPosition);
  };

  const handleDropdownToggle = (dropdown, setDropdown) => {
    setDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

  return (
    <>
      <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container p-0  d-flex align-items-center">
          <a className="text-decoration-none  " href="/">
            <h1 className="m-0 p-0 fs-3 text-white fw-bolder ">avtax</h1>
          </a>
          <div className="d-none d-lg-block">
            <ul className="navbar-menu">
              <li
                className="nav-item  about-dropdown"
                onMouseEnter={() =>
                  handleDropdownToggle(
                    aboutUsDropdownVisible,
                    setAboutUsDropdownVisible
                  )
                }
                onMouseLeave={() =>
                  handleDropdownToggle(
                    aboutUsDropdownVisible,
                    setAboutUsDropdownVisible
                  )
                }
              >
                <a className="nav-link fw-bold">
                  About us
                  <span className="sr-only">
                    <IoIosArrowUp
                      className={aboutUsDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>

                <div
                  className={`dropdown-menu ${
                    aboutUsDropdownVisible ? "show" : ""
                  }`}
                >
                  {company.aboutUs.map((item, index) => (
                    <Link
                      className="dropdown-item p-1 m-0 fw-bold"
                      to="/"
                      key={"about" + index}
                    >
                      <img
                        src={item[0]}
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                          marginRight: "7px",
                          objectFit: "contain",
                        }}
                        alt="product image"
                      />
                      {item[1]}
                    </Link>
                  ))}
                </div>
              </li>

              {/* ========= products dropdown ========= */}
              <li
                className="nav-item  product-dropdown cursor-pointer"
                onMouseEnter={() =>
                  handleDropdownToggle(
                    productsDropdownVisible,
                    setProductsDropdownVisible
                  )
                }
                onMouseLeave={() =>
                  handleDropdownToggle(
                    productsDropdownVisible,
                    setProductsDropdownVisible
                  )
                }
              >
                <a className="nav-link fw-bold">
                  Products
                  <span className="sr-only">
                    <IoIosArrowUp
                      className={productsDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>

                <div
                  className={`dropdown-menu ${
                    productsDropdownVisible ? "show" : ""
                  }`}
                >
                  {company.products.map((item, index) => (
                    <Link
                      className="dropdown-item p-1 m-0 fw-bold"
                      to={`/product/${item[1]}`}
                      key={"product" + index}
                      state={{
                        type: "product",
                        serviceProductDetails: item[2],
                      }}
                    >
                      <img
                        src={item[0]}
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                          marginRight: "7px",
                          objectFit: "contain",
                        }}
                        alt="product image"
                      />
                      {item[1]}
                    </Link>
                  ))}
                </div>
              </li>
              {/* ========= services dropdown ========= */}
              <li
                className="nav-item  services-dropdown"
                onMouseEnter={() =>
                  handleDropdownToggle(
                    servicesDropdownVisible,
                    setServicesDropdownVisible
                  )
                }
                onMouseLeave={() =>
                  handleDropdownToggle(
                    servicesDropdownVisible,
                    setServicesDropdownVisible
                  )
                }
              >
                <a className="nav-link fw-bold ">
                  Services{" "}
                  <span className="sr-only">
                    <IoIosArrowUp
                      className={servicesDropdownVisible ? "rotate" : ""}
                    />
                  </span>
                </a>
                {servicesDropdownVisible && (
                  <div className="dropdown-menu ">
                    {company.services.map((item, index) => (
                      <Link
                        className="dropdown-item p-1 m-0 fw-bold"
                        to={`/service/${item[1]}`}
                        key={"service" + index}
                        state={{
                          type: "service",
                          serviceProductDetails: item[2],
                        }}
                      >
                        <img
                          src={item[0]}
                          style={{
                            width: "20px",
                            height: "20px",
                            display: "inline-block",
                            marginRight: "7px",
                            objectFit: "contain",
                          }}
                          alt="product image"
                        />
                        {item[1]}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="nav-item active">
                <a className="nav-link fw-bold" href="#clients">
                  Clients
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link fw-bold" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="langAndDemo d-none d-lg-flex align-itmes-center">
            <button
              className=" btn btn-primary px-2 py-1 fw-medium"
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
          {/* ==================== sidebar toggler content   ==================== */}

          <button
            className="navbar-toggler  d-lg-none border-0 border-0 text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={handleSidebarClose}
          >
            <span className="navToggelIcon"></span>
            <span className="navToggelIcon"></span>
            <span className="navToggelIcon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title fw-bolder"
                id="offcanvasNavbarLabel"
              >
                avtax
              </h5>
              <button
                type="button"
                className="btn-close text-primary"
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
                      className="accordion-button "
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
                            <img
                              src={item[0]}
                              style={{
                                width: "20px",
                                height: "20px",
                                display: "inline-block",
                                marginRight: "7px",
                                objectFit: "contain",
                              }}
                              alt="product image"
                            />
                            {item[1]}
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
                          <Link
                            className="list-group-item list-group-item-action"
                            to={`/product/${item[1]}`}
                            key={"product" + index}
                            onClick={handleSidebarClose}
                            state={{
                              type: "product",
                              serviceProductDetails: item[2],
                            }}
                          >
                            <img
                              src={item[0]}
                              style={{
                                width: "20px",
                                height: "20px",
                                display: "inline-block",
                                marginRight: "7px",
                                objectFit: "contain",
                              }}
                              alt="product image"
                            />
                            {item[1]}
                          </Link>
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
                          <Link
                            className="list-group-item list-group-item-action"
                            to={`/service/${item[1]}`}
                            key={"service" + index}
                            onClick={handleSidebarClose}
                            state={{
                              type: "service",
                              serviceProductDetails: item[2],
                            }}
                          >
                            <img
                              src={item[0]}
                              style={{
                                width: "20px",
                                height: "20px",
                                display: "inline-block",
                                marginRight: "7px",
                                objectFit: "contain",
                              }}
                              alt="product image"
                            />
                            {item[1]}
                          </Link>
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
