import React from "react";
import "./homeHerp.scss";
import DemoForm from "../reuseable/DemoForm/DemoForm";
export default function HomeHero() {
  return (
    <div className="homeHero">
      <div className="overLay">
        <div className="container h-100 d-flex  justify-content-between align-items-center  flex-wrap">
          <section className="heroContent fs-3 flex-2 w-100 w-md-50 ">
            <h3 className="mb-3" style={{ color: "#C7C8CC" }}>
              e-Invoicing in Saudi Arabia{" "}
            </h3>
            <h1 className="HeroTitle fw-bold text-light w-75 py-2">
              Seamless Generation Of ZATCA Phase || e-invoices
            </h1>
            <p className="heropara fs-6 w-75 w-md-50 ">
              our ZATCA compliant solution is developed for all phase || waves &
              integrates with any ERP - making us the most sought after cloud
              e-envoicing software in the market
            </p>
            <section className="padges"></section>
          </section>
          <section className="heroFormContainer   d-none  d-md-flex flex-column  align-items-end">
            <DemoForm />
          </section>
        </div>
      </div>
    </div>
  );
}
