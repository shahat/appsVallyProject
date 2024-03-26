import React from "react";
import NavBar from "../../components/navBar/NavBar";
import HomeHero from "../../components/homeHero/HomeHero";
import HomeBrands from "../../components/homeBrands/HomeBrands";
import HomeInvoicing from "../../components/homeInvoicing/HomeInvoicing";
import Footer from "../../components/footer/Footer";
import "./home.scss";
export default function Home() {
  return (
    <div className="home">
      <NavBar /> <HomeHero />
      <HomeBrands />
      <div className="destroyX">
        <HomeInvoicing />
      </div>
      <Footer />
    </div>
  );
}
