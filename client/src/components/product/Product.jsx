import "./product.scss";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import { company } from "../../assets/company";
import { Link } from "react-router-dom";
export default function product() {
  return (
    <>
      <div className="container-xxl my-5 py-5">
        <div className="container  px-lg-5">
          <div>
            <p className="section-title text-secondary justify-content-center">
              <span />
              Our Products
              <span />
            </p>
            <SectionHeading content="Our Creative Products" />
          </div>
          <div className="row g-4  portfolio-container px-md-5">
            {company.products.map((item, index) => (
              <div
                key={"product" + index}
                className="productCard col-6 col-md-4 portfolio-item first "
                data-aos="fade-up"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={`../../../public/img/portfolio-${index + 1}.jpg`}
                      alt="product image"
                    />
                    <div className="portfolio-overlay">
                      <Link
                        className="btn btn-square btn-outline-light mx-1"
                        to={`/product/${item[1]}`}
                        key={"product" + index}
                        state={{
                          type: "product",
                          serviceProductDetails: item[2],
                        }}
                      >
                        <i className="fa fa-link" />
                      </Link>
                    </div>
                  </div>
                  <div className="productCardContent bg-light p-1  p-md-4">
                    <Link
                      className="text-decoration-none"
                      to={`/product/${item[1]}`}
                      key={"product" + index}
                      state={{
                        type: "product",
                        serviceProductDetails: item[2],
                      }}
                    >
                      <h5 className="mb-1 ">{item[1]}</h5>
                      <p className="productCardDesc mb-2 ">
                        {item[2][0][1].substring(0, 80) + "..."}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
