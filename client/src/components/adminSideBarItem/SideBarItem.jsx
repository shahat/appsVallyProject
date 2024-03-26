import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function SideBarItem({ sideBarItem }) {
  return (
    <div className="sidebarMenu d-flex flex-column align-items-center justify-content-center">
      <h3 className="sidebarTitle d-none d-md-block">{sideBarItem.title}</h3>
      <ul className="sidebarList p-0 ">
        {sideBarItem.subTitle.map((subTitle, index) => (
          <Link to={subTitle.link} key={index} className="link d-block mt-3">
            <li className="sidebarListItem ">
              {subTitle.icon}
              <span className="sidebarListItemText d-none d-md-inline">
                {subTitle.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

SideBarItem.propTypes = {
  sideBarItem: PropTypes.object.isRequired,
};
