import { GrStatusGood } from "react-icons/gr";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import "./serviceProductIntro.scss";
export default function ServiceProductItro({ invoiceText, itemImg, title }) {
  return (
    <>
      <div
        className="
        homeInvoicing
         container 
         d-flex  
justify-content-sm-center
justify-content-md-between 
flex-wrap align-items-center
my-5 py-5 px-5 px-md-5"
      >
        <SectionHeading content={title} />
        <section className="invoicingContent w-sm-100 col-sm-12 col-md-6 order-3 order-md-2">
          <div className="invoicingPara w-100 d-flex flex-column ">
            {invoiceText.map((item, index) => (
              <section key={index} className="invoicingParaSec d-flex  ">
                <div className="m-2">
                  <GrStatusGood className="text-success  fs-5" />
                </div>
                <p className="fs-5 fs-md-4">{item}</p>
              </section>
            ))}
          </div>
        </section>
        <section
          className="invoicingsvg   
      col-12 col-md-6 d-flex justify-content-center justify-content-md-end order-2 order-md-3 
      pb-5 pb-md-0"
          data-aos="fade-left"
        >
          <img
            src={itemImg}
            className="w-100 h-100"
            alt="invocing service or product image "
          />
        </section>
      </div>
    </>
  );
}
