import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "./App.css";
// =========================== Pages ===========================
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Admin from "./pages/admin/Admin";
import AdminHome from "./pages/adminHome/AdminHome";
import AppLayout from "./pages/appLayout/AppLayOut";
import ProductServiceDetails from "./pages/productServiceDetails/ProductServiceDetails";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/product/:productId"
              element={<ProductServiceDetails />}
            />
            <Route
              path="/service/:productId"
              element={<ProductServiceDetails />}
            />
          </Route>

          <Route
            path="/login"
            element={token ? <Navigate replace to="/admin" /> : <Login />}
          />
          <Route
            path="/admin"
            element={!token ? <Navigate replace to="/login" /> : <Admin />}
          >
            <Route index element={<AdminHome />} />
            <Route path="customers" element={<AdminHome />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
