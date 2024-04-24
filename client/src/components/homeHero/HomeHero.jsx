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
    <div className="homeHero">
      <div className="homeHeroOverlay">
        <div
          className=" container h-100 d-flex justify-content-between align-items-center flex-wrap"
        >
          <section
            className="heroContent fs-3 flex-2 w-100 w-md-50  "
            data-aos="fade-right "
          >
            <h3 className="mb-3">
              <TypeAnimation
                className="fw-bold"
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "e-Invoicing in Saudi Arabia",
                  1500,
                  "e-Invoicing in  Emirates",
                  1500,
                  "e-Invoicing in Egypt",
                  1500,
                ]}
                speed={30}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h3>
            <h1 className="HeroTitle fw-bold  w-75 py-2">
              Seamless Generation Of ZATCA Phase || e-invoices
            </h1>
            <p className="heropara fs-6 w-75 w-md-50 ">
              our ZATCA compliant solution is developed for all phase || waves &
              integrates with any ERP - making us the most sought after cloud
              e-envoicing software in the market
            </p>
            <section className="padges"></section>
          </section>
          <section
            className="heroFormContainer   d-none  d-md-flex flex-column  align-items-end"
            data-aos="fade-left"
          >
            <DemoForm />
          </section>
        </div>
      </div>
    </div>
  );
}
