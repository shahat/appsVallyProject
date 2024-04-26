import ServiceProductHero from "../../components/reuseable/serviceProductHero/ServiceProductHero";
import { useLocation } from "react-router-dom";
import "./serviceProductDetails.scss";
function ProductServiceDetails() {
  const { state } = useLocation();

  return (
    <>
      <ServiceProductHero
        item={state.serviceProductDetails[0][0]}
        type={state.type}
      />
      <div className="container">
        <h2 className="text-center w-100  my-5  ">
          {" "}
          {state.type === "service" ? "Service" : "Product"} Details
        </h2>
        {state.serviceProductDetails.map((item, index) => (
          <div
            key={"productServiceDetails" + index}
            className="row  g-4 my-3 align-items-center "
          >
            <p className="productServiceDesc col-12 col-md-6 fs-5">{item[1]}</p>

            <iframe
              style={{ maxWidth: "560px", height: "315px" }}
              src={item[2]}
              title="YouTube video player"
              className="col-12 col-md-6"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductServiceDetails;
