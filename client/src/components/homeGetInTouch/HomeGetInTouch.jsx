import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import "./getintouch.scss";
import DemoForm from "../reuseable/DemoForm/DemoForm";
import { svgImgs } from "../../../public/img/svg/svgImgs";
export default function HomeGetInTouch() {
  return (
    <div className="gitInTouch  my-5 py-5">
      <div className="container-xl ">
        <SectionHeading content="Boock A Demo" />
        <div className="row g-2 justify-content-center justify-content-md-between ">
          <div className=" col-11 col-sm-6 col-md-4 col-md-6 ">
            <p
              className="GetInTouchContent fs-5 fs-md-4 text-center text-sm-start"
              data-aos="fade-right"
            >
              We will try and understand your system architecture & discuss
              details of what it will take for you to get 100% compliant.
            </p>
            <section
              className="gitInTouchImage d-flex justify-content-center"
              data-aos="fade-right"
            >
              <img src={svgImgs.form} alt="contact form image" loading="lazy" />
            </section>
          </div>
          <div
            id="BookADemo"
            className="heroFormContainer  d-flex col-11 col-md-5 justify-content-center justify-content-md-end "
          >
            <DemoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
