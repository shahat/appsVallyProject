import { clients, invoicesMarket } from "../../assets/clients";
import "./homeBrands.scss";
import { facts } from "../../assets/facts";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
export default function HomeBrands() {
  return (
    <>
      {/* ====================== Brands carousel  section ====================== */}

      <section className="brands  " id="clients">
        <SectionHeading content="Trusted by 200+ global brands" />
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide container bg-white border-5 "
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <div className=" carousel-item-Container d-flex justify-content-around align-items-center">
                {clients.images1.map((image, index) => (
                  <div
                    key={`images1-${index}`}
                    className="brandItemContainer  d-flex justify-content-center align-items-center"
                    style={{ height: "90px", width: "90px" }}
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
            <div className="carousel-item">
              <div className=" carousel-item-Container d-flex    justify-content-around align-items-center">
                {clients.images2.map((image, index) => (
                  <div
                    key={`images2-${index}`}
                    className="brandItemContainer  d-flex justify-content-center align-items-center"
                    style={{ height: "90px", width: "90px" }}
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
          </div>
        </div>
      </section>

      {/* ====================== Facts ====================== */}

      <section className="companyFacts w-100 mt-5 pt-5 ">
        <div className="factOverlay"></div>
        <div className="container-xxl  fact py-5 ">
          <div className="row g-4">
            {facts.map((item, index) => (
              <div key={index} className="col-6 col-lg-3 text-center ">
                <i
                  className={`${item[2]} fa-2x  text-white mb-3`}
                  data-aos="fade-right"
                />
                <h3 className="text-white mb-2" data-aos="fade-up">
                  {item[1]}
                </h3>
                <p className="text-white mb-0" data-aos="fade-left">
                  {item[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
