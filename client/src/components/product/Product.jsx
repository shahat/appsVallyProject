import "./product.scss";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import { company } from "../../assets/company";
import { Link } from "react-router-dom";
import { productImages } from "../../../public/img/productImages/productImages";
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
          <div
            className="row g-4  portfolio-container px-md-5"
            data-aos="fade-up"
          >
            {company.products.map((item, index) => (
              <div
                key={"product" + index}
                className="productCard col-6 col-md-4 portfolio-item first "
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={productImages[index]}
                      alt="product image"
                    />
                    <div className="portfolio-overlay">
                      <Link
                        className="btn btn-square btn-outline-light mx-1"
                        to={`/product/${item.title}`}
                        key={"product" + index}
                        state={{
                          type: "product",
                          serviceProductDetails: item.desc,
                        }}
                      >
                        <i className="fa fa-link" />
                      </Link>
                    </div>
                  </div>
                  <div className="productCardContent bg-light p-1  p-md-4">
                    <Link
                      className="text-decoration-none"
                      to={`/product/${item.title}`}
                      key={"product" + index}
                      state={{
                        type: "product",
                        serviceProductDetails: item.desc,
                      }}
                    >
                      <h5 className="mb-1 ">
                        {item.title.substring(0, 13) + " ..."}
                      </h5>
                      <p className="productCardDesc mb-2 ">
                        {item.desc.detailsDesc[0].desc.substring(0, 80) + "..."}
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
