import "./topbar.scss";
import { AiOutlineLogout } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import instance from "../../config/instance";
export default function TopBar() {
  // ============== LOGOUT ==============
  const notify = (message, path) => {
    toast.success(message, {
      onClose: () => {
        window.location.href = path;
      },
    });
  };
  const handelLogout = async () => {
    console.log("logout");
    try {
      let response = await instance.post("/auth/logout");
      console.log("response", response);
      if (response.status !== 200) {
        console.log("error");
        throw new Error(response.data); // Throw the response data directly
      }
      localStorage.removeItem("token");
      notify("Logout Successful", "/login");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="topbar bg-dark text-white">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo text-white ">AVTax</span>
        </div>
        <div className="topRight">
          <div
            className="topbarIconContainer text-white"
            role="setting"
            onClick={() => handelLogout()}
          >
            logout <AiOutlineLogout className="topIcon" />
          </div>
          <img
            src="../../../public/logo/admin/admin-avatar.png"
            alt="admin-avatar"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
