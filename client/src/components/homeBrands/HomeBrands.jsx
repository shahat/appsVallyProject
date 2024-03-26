import React from "react";
import "./homeBrands.scss";
import { clientImages } from "../../../public/clients/clientImages";
export default function HomeBrands() {
  const clients = {
    images1: [
      clientImages[0],
      clientImages[1],
      clientImages[2],
      clientImages[3],
      clientImages[4],
      clientImages[5],
    ],
    images2: [
      clientImages[6],
      clientImages[7],
      clientImages[8],
      clientImages[9],
      clientImages[10],
      clientImages[11],
    ],
  };
  const invoicesMarket = [
    {
      title: " $300B",
      content: "Worth e-invoices generated annually",
    },
    {
      title: "125M",
      content: "e-Invoices generated annually",
    },
    {
      title: "3M",
      content: "man hours saved per month",
    },
  ];
  return (
    <div className="homeBrands mt-5">
      <h2
        id="clients"
        className="pt-5 text-light text-center text-capitalize fs-1"
        style={{
          fontWeight: "700",
          lineHeight: "67px",
          letterSpacing: "2px",
        }}
      >
        Trusted by 200+ global brands
      </h2>
      {/* ====================== carousel  section ====================== */}
      <section className="brands d-flex justify-content-center m-5">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide container bg-white border-5 "
          style={{ borderRadius: "10px", height: "144px" }}
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <div className=" carousel-item-Container d-flex    justify-content-around align-items-center">
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

      {/* ====================== other section ====================== */}
      <section className="invoiceMarket mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center text-white">
            {invoicesMarket.map((item, index) => (
              <div key={index} className="col-md-4" data-aos="fade-up">
                <div className="invoiceMarketSection">
                  <h3 className="fs-1 fw-bolder">
                    {item.title} <span style={{ color: "#4adf93" }}>+</span>
                  </h3>
                  <p style={{ color: "#C7C8CC" }}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
