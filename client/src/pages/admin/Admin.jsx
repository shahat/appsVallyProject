import TopBar from "../../components/adminTopbar/TopBar";
import SideBar from "../../components/adminSideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./admin.scss";
export default function Admin() {
  return (
    <>
      <TopBar />
      <main className="main text-secondary bg-white">
        <div className="sideBarContainer  ">
          <SideBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
}
