import "./service.scss";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import { company } from "../../assets/company";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <>
      <div className="container-xxl my-5 py-5">
        <div className="container  px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span />
              Our Services
              <span />
            </p>
            <SectionHeading content="Our Services" />
          </div>
          <div className="row g-4">
            {company.services.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 ">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0"></div>
                  <h5 className="mb-3">
                    {item.title.substring(0, 30) + " ..."}
                  </h5>
                  <p className="m-0">
                    {item.desc.detailsDesc[0].desc.substring(0, 80) + "..."}
                  </p>
                  <Link
                    className="btn btn-square"
                    to={`/service/${item.title}`}
                    key={"service" + index}
                    state={{
                      type: "service",
                      serviceProductDetails: item.desc,
                    }}
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
