import "./sideBar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

// import { IoStatsChartSharp } from "react-icons/io5";

import SideBarItem from "../adminSideBarItem/SideBarItem";
import { TbReportSearch } from "react-icons/tb";

import { IoMailOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";

import { CgOrganisation } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";

export default function SideBar() {
  const sideBarItems = [
    {
      title: "Dashboard",
      subTitle: [
        {
          icon: <IoHomeOutline className="sidebarIcon" />,
          title: "Home",
          link: "/",
        },
        {
          icon: <FaRegUser className="sidebarIcon" />,
          title: "Customers",
          link: "customers",
        },
        {
          icon: <IoAnalyticsSharp className="sidebarIcon" />,
          title: "Sales",
          link: "/sales",
        },
      ],
    },
    {
      title: "Quick Menu",
      subTitle: [
        {
          icon: <RiMoneyDollarCircleFill className="sidebarIcon" />,
          title: "Analytics",
          link: "/analytics",
        },
        {
          icon: <FaRegUser className="sidebarIcon" />,
          title: "Users",
          link: "/users",
        },
        {
          icon: <FaRegPlayCircle className="sidebarIcon" />,
          title: "Movies",
          link: "/movies",
        },
        {
          icon: <FaMoneyBillTransfer className="sidebarIcon" />,
          title: "Transactions",
          link: "/transactions",
        },
        {
          icon: <TbReportSearch className="sidebarIcon" />,
          title: "Reports",
          link: "/reports",
        },
      ],
    },
    {
      title: "Notifications",
      subTitle: [
        {
          icon: <IoMailOutline className="sidebarIcon" />,
          title: "Mail",
          link: "/mail",
        },
        {
          icon: <VscFeedback className="sidebarIcon" />,
          title: "Feedback",
          link: "/feedback",
        },
        {
          icon: <BiMessageSquareDetail className="sidebarIcon" />,
          title: "Messages",
          link: "/messages",
        },
      ],
    },
    {
      title: "Stuff",
      subTitle: [
        {
          icon: <CgOrganisation className="sidebarIcon" />,
          title: "Manage",
          link: "/manage",
        },
        {
          icon: <MdOutlineAnalytics className="sidebarIcon" />,
          title: "Analytics",
          link: "/analytics",
        },
        {
          icon: <MdReportProblem className="sidebarIcon" />,
          title: "Reports",
          link: "/reports",
        },
      ],
    },
  ];

  return (
    <div className="sidebar  d-flex flex-column justify-content-center">
      <div className="sideBareWarper ">
        {sideBarItems.map((item, index) => (
          <SideBarItem key={index} sideBarItem={item} />
        ))}
      </div>
    </div>
  );
}
