import "./homeInvoicing.scss";
import { svgImgs } from "../../../public/img/svg/svgImgs";
import ServiceProductItro from "../serviceProductIntro/ServiceProductItro";
import HomeBrands from "../homeBrands/HomeBrands";
import Product from "../product/Product";
import Service from "../service/Service";
import HomeGetInTouch from "../homeGetInTouch/HomeGetInTouch";
import HomeTestimonial from "../homeTestimonial/HomeTestimonial";
// static Data
import { serviceIntorText } from "../../assets/invoceSectionText";
export default function HomeInvoicing() {
  return (
    <>
      {/* ==============  invoicing ============== */}
      <ServiceProductItro
        invoiceText={serviceIntorText}
        itemImg={svgImgs.invoice}
        title="Get Phase II Compliant e-invoicing Solution"
      />
      {/* ==============  Products  ==============  */}
      <Product />
      {/* ============== HomeBrands ==============  */}
      <HomeBrands />
      {/* ==============  Much More ==============  */}
      <ServiceProductItro
        invoiceText={serviceIntorText}
        itemImg={svgImgs.softwareIntration}
        title="We Offer Much More"
      />
      {/* ==============  services  ==============   */}
      <Service />
      {/* =============== Testimonial  ============  */}
      {/* <HomeTestimonial /> */}
      {/* =============== Git in touch ============= */}
      <HomeGetInTouch />
    </>
  );
}
