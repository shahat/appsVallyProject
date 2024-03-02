import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <>
      <div>
        {/* ================================== Start Footer ==================================  */}
        <footer className="nb-footer bg-light py-5">
          <div className="container">
            <div className="row d-flex justify-content-around ">
              <div className="col-md-2 col-sm-6">
                <div className="footer-info-single">
                  <h2 className="title">Clear Tax </h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" title="">
                        {" "}
                        Mobile
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        email
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-info-single">
                  <h2 className="title">COMPANY</h2>
                  <ul className="list-unstyled ">
                    <li>
                      <a href="#" title="">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Contact us{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Media & Press
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Trust & Safety
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 ">
                <div className="footer-info-single">
                  <h2 className="title">PRODUCTS & SOLUTIONS</h2>
                  <ul className="list-unstyled  w-100 ">
                    <li>
                      <a className="" href="#" title="">
                        e-Invoicing Software
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        API Integration
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        Supply Chain Finance
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Account Payable Automation
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        Account Receivable Automation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 ">
                <div className="footer-info-single">
                  <h2 className="title">RESOURCES</h2>
                  <ul className="list-unstyled  w-100 ">
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Webinars
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-info-single">
                  <h2 className="title">WHY CLEARTAX &amp; privacy</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        For Businesses
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        For Partners
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <section className="copyright py-1 mt-2">
          <div className="container">
            <div className="row">
              <div className="col-sx-12  text-center">
                <p className="p-0 m-0 text-secondary">
                  Copyright © 2024 AVTax{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
