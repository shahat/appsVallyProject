
import { TbCertificate } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
const IconRenderer = ({ iconName }) => {
    let IconComponent;
  
    // Map the icon name to the corresponding icon component
    switch (iconName) {
      case 'TbCertificate':
        IconComponent = TbCertificate;
        break;
      case 'GrProjects':
        IconComponent = GrProjects;
        break;
      case 'FaUsers':
        IconComponent = FaUsers;
        break;
      case 'FaUsersCog':
        IconComponent = FaUsersCog;
        break;
      default:
        // If the icon name is not recognized, render null or handle error
        IconComponent = null;
    }
  
    // Render the icon component
    return IconComponent ? <IconComponent /> : null;
  };
  
  export default IconRenderer;