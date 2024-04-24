import "./service.scss";
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
                  <h5 className="mb-3">{item[1]}</h5>
                  <p className="m-0">
                    {item[2][0][1].substring(0, 80) + "..."}
                  </p>
                  <Link
                    className="btn btn-square"
                    to={`/service/${item[1]}`}
                    key={"service" + index}
                    state={{
                      type: "service",
                      serviceProductDetails: item[2],
                    }}
                  >
                    <i className="fa fa-arrow-right" />
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
