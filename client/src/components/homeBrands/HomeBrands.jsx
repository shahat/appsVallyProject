import { clients } from "../../assets/clients";
import "./homeBrands.scss";
import { facts } from "../../assets/facts";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
export default function HomeBrands() {
  return (
    <>
      {/* ====================== Brands carousel  section ====================== */}

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
                <div className=" carousel-item-Container d-flex justify-content-around align-items-center">
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

      <section className="companyFacts w-100 mt-5 pt-5" data-aos="fade-up">
        <div className="factOverlay"></div>
        <div className="container-xxl  fact py-5 ">
          <div className="row g-4">
            {facts.map((item, index) => (
              <div key={index} className="col-6 col-lg-3 text-center ">
                <i className={`${item[2]} fa-2x  text-white mb-3`} />
                <h3 className="text-white mb-2">{item[1]}</h3>
                <p className="text-white mb-0">{item[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
