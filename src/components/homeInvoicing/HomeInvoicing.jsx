import { BsRocketTakeoffFill } from "react-icons/bs";
import "./homeInvoicing.scss";
import { useState, useRef, useEffect } from "react";
import PaginationButton from "../reuseable/paginationButton/PaginationButton";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import DemoForm from "../reuseable/DemoForm/DemoForm";
import { resourcesImages } from "../../../public/resourcesImages/resourcesImages";
export default function HomeInvoicing() {
  // =========== static Data ================
  const productsData = [
    {
      img:
        "https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/5de1f99c-dc48-4fe4-b924-e0af3e1e9c6c.svg",
      title: `Offline POS <br /> Application `,
      content:
        " Generate e-invoices on POS systems which are not connected online (continuously) and do not have an inbuilt E-Invoicing solution ",
    },
    {
      img:
        "https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/c7911591-e9e6-43f1-a0cf-28dbeef54679.svg",
      title: "VAT <br/> Automation ",
      content:
        " Our cloud-based solution simplifies VAT compliance, VAT filing, and audit processes. Reconcile between your sales invoices and ZATCA e-invoices. ",
    },
    {
      img:
        "https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/81b6cd4c-7e80-4b1f-a0bf-206b0ae302a4.svg",
      title: "Accounts Payable <br />Automation ",
      content:
        "Process B2B e-invoices from phases 1 & 2 vendors digitally, enhancing warehouse efficiency and payment planning. ",
    },
    {
      img:
        "https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/5de1f99c-dc48-4fe4-b924-e0af3e1e9c6c.svg",
      title: "UI-Based <br />Invoice Creation ",
      content:
        "Say goodbye to errors! Easily generate missed invoices, make corrections, and enjoy the convenience of auto-calculations. ",
    },
    {
      img:
        "https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/c7911591-e9e6-43f1-a0cf-28dbeef54679.svg",
      title: "E-Invoice Presentment <br />& Payment Tracking ",
      content:
        "Allow your buyers to view and settle invoices seamlessly, enabling efficient tracking and management of receivables. . ",
    },
    {
      img:
        "https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/81b6cd4c-7e80-4b1f-a0bf-206b0ae302a4.svg",
      title: "Account Receivables <br />& Vendor Portal ",
      content:
        "Provide your vendors with a dedicated platform to streamline their invoicing and payment processes. ",
    },
  ];
  const reviews = [
    {
      content:
        "We really appreciate your hard work and dedication in getting e-invoice implemented on time. I know it was not simple given the complexities we have in our business models however, ClearTax team were super active in providing 100% support and ensuring timely compliance. Thank you for the effort and GREAT JOB!",
      author: "Lucio Scordio",
      position: "Admin Manager, SICIM",
    },
    {
      content:
        "We really appreciate your hard work and dedication in getting e-invoice implemented on time. I know it was not simple given the complexities we have in our business models however, ClearTax team were super active in providing 100% support and ensuring timely compliance. Thank you for the effort and GREAT JOB!",
      author: "John Doe",
      position: "CEO, XYZ Corp",
    },
    {
      content:
        "We really appreciate your hard work and dedication in getting e-invoice implemented on time. I know it was not simple given the complexities we have in our business models however, ClearTax team were super active in providing 100% support and ensuring timely compliance. Thank you for the effort and GREAT JOB!",
      author: "Jane Smith",
      position: "CTO, ABC Ltd.",
    },
  ];
  const resources = [
    {
      img: resourcesImages[0],
      title: "Case Studies",
      para: "Some stories to showcase how we've tackled business complexities",
    },
    {
      img: resourcesImages[1],
      title: "Blogs",
      para: "Read our exhaustive materials on e-invoicing in KSA",
    },
    {
      img: resourcesImages[2],
      title: "Webinar",
      para:
        "Weekly sessions to keep you posted on all the latest norms by ZATCA",
    },
    {
      img: resourcesImages[3],
      title: "Press",
      para: "ClearTax in the news and press releases",
    },
  ];
  // ============ states ================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resourcesIndex, setResourcesIndex] = useState(0);

  const scrollRef = useRef(null);
  const resourcesRef = useRef(null);

  // ================= handlers ===============

  function scrollling(id) {
    const scollTo = document.getElementById(id);
    scollTo.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }
  const handleNext = ({ type, value }) => {
    if (type === "resources") {
      setResourcesIndex((prevIndex) =>
        prevIndex === resources.length - 1 ? 0 : prevIndex + 3
      );
      // Scroll to the next resources section
      const nextResourcesIndex =
        resourcesIndex === resources.length - 1 ? 0 : resourcesIndex + 3;
      scrollling(`resource-${nextResourcesIndex}`);
    } else if (type === "reviews") {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 2
      );
      // Scroll to the next reviews section
      const nextReviewIndex =
        currentIndex === reviews.length - 1 ? 0 : currentIndex + 2;
      scrollling(`review-${nextReviewIndex}`);
    }
  };

  const handlePrevious = ({ type }) => {
    if (type === "resources") {
      setResourcesIndex((prevIndex) =>
        prevIndex === 0 ? resources.length - 1 : prevIndex - 3
      );
      // Scroll to the previous resources section
      const prevResourcesIndex =
        resourcesIndex === 0 ? resources.length - 1 : resourcesIndex - 3;
      scrollling(`resource-${prevResourcesIndex}`);
    } else if (type === "reviews") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 2
      );
      // Scroll to the previous reviews section
      const prevReviewIndex =
        currentIndex === 0 ? reviews.length - 1 : currentIndex - 2;
      scrollling(`review-${prevReviewIndex}`);
    }
  };

  return (
    <>
      <div className="homeInvoicing container d-flex  justify-content-sm-center justify-content-md-between flex-wrap align-items-start text-white my-5 py-5">
        <section className="invoicingContent w-sm-100 col-sm-12 col-md-6">
          <h3 className="invoicingTitle fs-1 fw-bolder mb-3">
            Get Phase II compliant e-invoicing solution
          </h3>
          <div className="invoicingPara d-flex flex-column">
            <section className="invoicingParaSec d-flex ">
              <div className="invoicingParaIconContainer">
                {" "}
                <BsRocketTakeoffFill className="invoicingListIcon " />{" "}
              </div>
              <p className="text-secondary fs-5">
                {" "}
                Cloud based product for facilitating generation of e-invoices as
                per ZATCA guidelines{" "}
              </p>
            </section>
            <section className="invoicingParaSec d-flex ">
              <div className="invoicingParaIconContainer">
                {" "}
                <BsRocketTakeoffFill className="invoicingListIcon  " />{" "}
              </div>
              <p className="text-secondary fs-5">
                {" "}
                Seamless government interactions with auto-retries, translation
                and other value-added features
              </p>
            </section>
            <section className="invoicingParaSec d-flex ">
              <div className="invoicingParaIconContainer">
                {" "}
                <BsRocketTakeoffFill className="invoicingListIcon  " />{" "}
              </div>
              <p className="text-secondary fs-5">
                {" "}
                e-Archival as a service for data storage and retrieval as per
                the government guidelines
              </p>
            </section>
          </div>
        </section>
        <section
          className="invoicingGIF    
      col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-center"
        >
          <video
            autoPlay
            loop
            playsInline
            style={{ padding: "0", width: "350px", height: "300px" }}
            src="https://assets1.cleartax-cdn.com/cleartax/images/1680167258_ezgif.comgiftomp41.mp4"
          >
            Your browser does not support HTML video.
          </video>
        </section>
      </div>
      {/* ==============     WE Offer much more  ============== */}
      <div className="weOfferMuchMore container d-flex  justify-content-sm-center justify-content-md-between flex-wrap align-items-center text-white my-5 py-5">
        <section className="weOfferMuchMoreContent w-sm-100 col-sm-12 col-md-6">
          <h3 className="weOfferMuchMoreTitle fs-1 fw-bolder mb-3">
            We Offer much more
          </h3>
          <p className="weOfferMuchMorePara text-secondary fs-5">
            We will be there to meet every ERP requirement of your business.
            Here is what else we can do for you.
          </p>
        </section>
        <section
          className="w-sm-100 col-sm-12 col-md-6 d-flex j
    justify-content-center    justify-content-md-end "
        >
          <div className="weOfferMuchMoreGIF w-md-50">
            <img
              className="w-100"
              src="https://assets1.cleartax-cdn.com/cleartax/images/1680182958_22e11614cb534c8e884115e0b351f7e0.webp"
              alt=""
            />
          </div>
        </section>
        <section className="offeringProducts">
          <div className="container d-flex justify-content-center">
            <div className="row w-100  justify-content-between">
              {productsData.map((product, index) => (
                <div
                  key={index}
                  className="offeringProductsCard  rounded border-secondary m-sm-2 m-md-0 
                  my-4 col-md-4 col-sm-5   over-flow-hidden"
                  style={{ height: "300px" }}
                >
                  <div className=" mb-2">
                    <img src={product.img} alt="" />{" "}
                  </div>
                  <h3
                    dangerouslySetInnerHTML={{ __html: product.title }}
                    className=" mb-2"
                  ></h3>
                  <p
                    className="fs-5   text-secondary"
                    dangerouslySetInnerHTML={{ __html: product.content }}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* ============== Clients Reviews ============== */}
      <div className="clientsReview  bg-white py-5" style={{ width: "100vw" }}>
        <div className="container">
          <h3 className="pb-5">Here is what our clients say</h3>
          <div className="row flex-nowrap overflow-hidden py-5">
            {reviews.map((review, index) => (
              <div
                key={index}
                id={`review-${index}`}
                className={`col-sm-${reviews.length === 1 ? "12" : "6"}`}
                ref={index === currentIndex ? scrollRef : null}
              >
                <div className="card ">
                  <div className="card-body">
                    <p className="card-text fs-6 text-secondary mb-3">
                      {review.content}
                    </p>
                    <p className="p-0 fs-5 fw-bold text-dark-50 m-0 ">
                      {review.author}
                    </p>
                    <p className="m-0 text-secondary fs-6">{review.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className=" mt-3 d-none  d-md-flex justify-content-center gap-4">
            <div className="">
              <PaginationButton
                action={() => handlePrevious({ type: "reviews" })}
                disabled={currentIndex === 0}
                type="left"
              />
            </div>
            <div className="">
              <PaginationButton
                action={() => handleNext({ type: "reviews" })}
                disabled={currentIndex === reviews.length - 1}
                type="right"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ==============  resources   ============== */}

      <div className="resources py-5">
        <div className="container">
          <h3 className="pb-5 text-white w-75">
            All the resources you need,right here
          </h3>
          <div className="row flex-sm-column flex-md-row  flex-md-nowrap overflow-hidden  justify-content-md-between py-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                id={`resource-${index}`}
                className="col-12 col-md-4"
                ref={index === resourcesIndex ? resourcesRef : null}
              >
                <div className="card  resourceCard p-0 border mx-4  ">
                  <img
                    className="card-img-top"
                    src={resource.img}
                    alt="Card image cap"
                  />
                  <div className="card-body border-top-0 border-bottom-rounded">
                    <h5 className="card-title">{resource.title}</h5>
                    <p className="fs-5 text-secondary pb-3">
                      {resource.para.slice(0, 50)}
                    </p>
                    <a
                      href="#"
                      className=" text-decoration-none fw-bold d-block pb-3"
                    >
                      {" "}
                      Explore More <HiOutlineArrowSmRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" mt-3 d-none  d-md-flex  justify-content-center gap-4 bg-transparent">
            <div className="">
              <PaginationButton
                action={() => handlePrevious({ type: "resources" })}
                disabled={resourcesIndex === 0}
                type="left"
              />
            </div>
            <div className="">
              <PaginationButton
                action={() => handleNext({ type: "resources" })}
                disabled={resourcesIndex === resources.length - 1}
                type="right"
              />
            </div>
          </div>
        </div>
      </div>
      {/* git in touch section */}

      <div className="gitInTouch bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <h3 className="pb-2 fw-bolder fs-1" style={{ color: "#314259" }}>
                Get in touch with us
              </h3>
              <p className="text-secondary fs-4 fw-medium">
                {" "}
                We will try and understand your system architecture & discuss
                details of what it will take for you to get 100% compliant.
              </p>
              <div className="gitInTouchImage w-100 w-md-75">
                <img
                  src="/public/resourcesImages/62630dad-5fc0-415f-8032-16f01c25a42a.png"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
              <div
                className="gitInTouchForm  d-flex justify-content-center "
                id="BookADemo"
              >
                <div className="p-md-4 p-lg-5 p-3 ">
                  <DemoForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
