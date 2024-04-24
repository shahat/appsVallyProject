import HomeHero from "../../components/homeHero/HomeHero";
import HomeInvoicing from "../../components/homeInvoicing/HomeInvoicing";
import "./home.scss";
export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="destroyX">
        <HomeInvoicing />
      </div>
    </>
  );
}
