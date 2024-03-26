import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Admin from "./pages/admin/Admin";
import AdminHome from "./pages/adminHome/AdminHome";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  const token = localStorage.getItem("token");
  console.log(" token : ", token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
