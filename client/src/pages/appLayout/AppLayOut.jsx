import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

export default function AppLayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
