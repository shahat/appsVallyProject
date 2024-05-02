import { clients } from "../../assets/clients";
import "./homeBrands.scss";
import { facts } from "../../assets/facts";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import IconRenderer from "../../assets/IconRender";
export default function HomeBrands() {
  return (
    <>
      <section className="brands" id="clients">
        <SectionHeading content="Trusted by 200+ global brands" />
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide container bg-white border-5 "
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            {clients.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={`images1-${index}`}
              >
                <div className=" carousel-item-Container d-flex justify-content-around align-items-center ">
                  {item.map((image, i) => (
                    <div
                      key={`imageContainer-${i}`}
                      className="brandItemContainer  d-flex justify-content-center align-items-center"
                      style={{ height: "180px", width: "180px" }}
                    >
                      <img
                        src={image}
                        className=" w-100 object-fit-cover"
                        alt="brands"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== Facts ====================== */}

      <section className="companyFacts w-100 mt-5 " data-aos="fade-up">
        <div className="factOverlay d-flex align-items-center ">
          <div className="row w-100 mx-auto ">
            {facts.map((item, index) => (
              <div
                key={index}
                className=" col-6 col-lg-3 text-center text-white"
              >
                <span className="fs-1">
                  <IconRenderer iconName={item[2]} />{" "}
                </span>
                <h3 className="mb-2 text-white ">{item[1]}</h3>
                <p className=" fw-medium">{item[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
