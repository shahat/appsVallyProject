import React from "react";
import NavBar from "../../components/navBar/NavBar";
import HomeHero from "../../components/homeHero/HomeHero";
import HomeBrands from "../../components/homeBrands/HomeBrands";
import HomeInvoicing from "../../components/homeInvoicing/HomeInvoicing";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeHero />
      <HomeBrands />
      <HomeInvoicing />
      <Footer />
    </div>
  );
}
