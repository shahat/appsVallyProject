import "./homeInvoicing.scss";
import { GrStatusGood } from "react-icons/gr";
import HomeMuchMore from "../homeMuchMore/HomeMuchMore";
import envoicesvg from "../../../public/img/svg/invoice-animate.svg";
import HomeBrands from "../homeBrands/HomeBrands";
import Product from "../product/Product";
import Service from "../service/Service";
import { invoiceText } from "../../assets/invoceSectionText";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import HomeGetInTouch from "../homeGetInTouch/HomeGetInTouch";
import HomeTestimonial from "../homeTestimonial/HomeTestimonial";
export default function HomeInvoicing() {
  return (
    <>
      {/* ==============  invoicing ============== */}
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
        {/* =================== invoicing title =================== */}
        <SectionHeading content="Get Phase II compliant e-invoicing solution" />
        <section className="invoicingContent w-sm-100 col-sm-12 col-md-6 order-3 order-md-2">
          <div className="invoicingPara w-100 d-flex flex-column ">
            {invoiceText.map((item, index) => (
              <section
                key={index}
                className="invoicingParaSec d-flex  "
                data-aos="fade-right"
              >
                <div className="m-2">
                  <GrStatusGood className="text-success  fs-5 " />
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
            src={envoicesvg}
            className="w-100 h-100"
            alt="invocing service image "
          />
        </section>
      </div>
      {/* ==============  Products  ==============  */}
      <Product />
      {/* ============== HomeBrands ==============  */}
      <HomeBrands />
      {/* ==============  Much More ==============  */}
      <HomeMuchMore />
      {/* ==============  services  ==============   */}
      <Service />
      {/* =============== Testimonial  ============  */}
      <HomeTestimonial />
      {/* =============== Git in touch ============= */}
      <HomeGetInTouch />
    </>
  );
}
