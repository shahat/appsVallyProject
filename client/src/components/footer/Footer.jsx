import "./footer.scss";
function Footer() {
  const FooterContent = [
    {
      title: "AVTax",
      links: ["Mobile", "Facebook", "Twitter", "Email", "Support"],
    },

    {
      title: "COMPANY",
      links: ["About Us", "Contact us", "Media & Press", " Trust & Safety"],
    },
    {
      title: "PRODUCTS & SOLUTIONS",
      links: [
        "e-Invoicing Software",
        "API Integration",
        "Supply Chain Finance",
        "Account Payable Automation",
        "Account Receivable Automation",
      ],
    },
    {
      title: "RESOURCES",
      links: ["Webinars", "Blogs", "Case Studies", "Videos", "Podcasts"],
    },
    {
      title: "WHY CLEARTAX",
      links: ["For Businesses", "For Individuals"],
    },
  ];
  return (
    <>
      <div>
        {/* ================================== Start Footer ==================================  */}
        <footer className="nb-footer bg-light py-5">
          <div className="container">
            <div className="row d-flex justify-content-around ">
              {FooterContent.map((item, index) => (
                <div
                  key={index}
                  className="col-md-2 col-sm-6"
                  data-aos="fade-up"
                >
                  <div className="footer-info-single">
                    <h2 className="title">{item.title}</h2>
                    <ul className="list-unstyled">
                      {item.links.map((link, i) => (
                        <li key={i}>
                          <a href="#" title="" className="text-decoration-none">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
