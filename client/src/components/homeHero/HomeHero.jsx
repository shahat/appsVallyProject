import "./homeHero.scss";
import DemoForm from "../reuseable/DemoForm/DemoForm";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AOs from "aos";
export default function HomeHero() {
  useEffect(() => {
    AOs.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="homeHero d-flex align-items-center ">
      <div className="homeHeroOverlay"></div>
      <div className=" container  d-flex justify-content-between align-items-center ">
        <section
          className="heroContent fs-3 flex-2 w-100 w-md-50  "
          data-aos="fade-right"
        >
          <h2 className=" heroTitle mb-3  ">
            <TypeAnimation
              className="fw-bold"
              sequence={[
                // Same substring at the start will only be typed once, initially
                "e-Invoicing in Saudi Arabia",
                1000,
                "e-Invoicing in  Emirates",
                1000,
                "e-Invoicing in Egypt",
                1000,
              ]}
              speed={30}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h2>
          <h1 className="heroTitle fw-bold  w-md-75  py-2 ">
            Seamless Generation Of ZATCA Phase || e-invoices
          </h1>
          <p className="heropara mx-auto mx-md-0 fs-6  w-md-50  ">
            our ZATCA compliant solution is developed for all phase || waves &
            integrates with any ERP - making us the most sought after cloud
            e-envoicing software in the market
          </p>
          <button className=" btn rounded-pill py-2 px-4   d-md-none bg-warning ">
            <a href="#BookADemo" className="text-decoration-none text-dark ">
              {" "}
              Book a demo
            </a>
          </button>
        </section>
        <section
          className="heroFormContainer   d-none  d-md-flex flex-column  align-items-end"
          data-aos="fade-left"
        >
          <DemoForm />
        </section>
      </div>
    </div>
  );
}
