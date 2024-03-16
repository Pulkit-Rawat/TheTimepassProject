import { FaExchangeAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

const AppNavbar = () => {
  return (
    <div className="app-navbar px-3 py-2">
      <div>
        <MdMenu size={30} color="#1B91FF" />
      </div>
      <div className="brand-title">
        <p>The Timepass Project</p>
      </div>
      <div>
        <FaExchangeAlt size={25} color="#1B91FF" />
      </div>
    </div>
  );
};

export default AppNavbar;
