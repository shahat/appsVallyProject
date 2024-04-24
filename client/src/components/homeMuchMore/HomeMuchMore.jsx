import React from "react";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import Lottie from "lottie-react";
import animationData2 from "../../../public/animation/animationData2.json";
import "./homeMuchMore.scss";
export default function HomeMuchMore() {
  return (
    <div className="weOfferMuchMore container  d-flex  justify-content-center justify-content-md-between flex-wrap align-items-center  my-5 py-5 px-md-5">
      <SectionHeading content="We Offer Much More" />
      <section className="weOfferMuchMoreContent  col-12 col-md-6 order-2 order-md-1">
        <p
          className="weOfferMuchMorePara fs-5 text-center text-md-start "
          data-aos="fade-right"
        >
          We will be there to meet every ERP requirement of your business. Here
          is what else we can do for you.
        </p>
      </section>
      <section
        className="w-sm-100 col-sm-12 col-md-6 d-flex j
justify-content-center   
 justify-content-md-end order-1 order-md-2 pb-3 pb-md-0"
        data-aos="fade-left"
      >
        <Lottie
          animationData={animationData2}
          style={{ padding: "0", width: "80%", height: "100%" }}
        />
      </section>
    </div>
  );
}
