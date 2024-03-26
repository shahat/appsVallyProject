import React, { useState } from "react";
import { GoEyeClosed, GoEye } from "react-icons/go";
import "./login.scss"; // Assuming you have a CSS file for additional styling
import instance from "../../config/instance";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const notify = (message) => {
    toast.success(message, {
      onClose: () => {
        window.location.href = "/admin";
      },
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      console.log("this is Email and password ", email, password);
      let response = await instance.post("/auth/login", { email, password });

      if (response.status !== 200) {
        throw new Error(response.data); // Throw the response data directly
      }
      notify("Login Successful");
      localStorage.setItem("token", response.data.token);
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response.data);
      setError("Failed to login");
    }
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div className="login_page text-white   d-flex justify-content-center align-items-center ">
      <section className=" d-flex  h-100 justify-content-center align-items-center  flex-column">
        <h2 className="mb-4 fs-2 fw-bold text-center  "> AVTax </h2>
        <form className="login_form p-5 border rounded" onSubmit={handleLogin}>
          <h3 className="fs-5 fw-bold text-center text-warning mb-5">
            {" "}
            login to your account{" "}
          </h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-warning d-block w-100 mt-3">
            Login
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
