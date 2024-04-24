import "./serviceProductHero.scss";
function ServiceProductHero({ item, type }) {
  return (
    <div className="serviceProductHero d-flex align-items-center justify-content-center">
      <div className="overLay"></div>
      <h2 className="text-center text-white fw-bolder z-3">
        {item} {type ? (type === "service" ? "Service" : "Product") : ""}
      </h2>
    </div>
  );
}
export default ServiceProductHero;
