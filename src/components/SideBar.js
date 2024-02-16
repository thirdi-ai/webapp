import React from "react";
import thirdiLogo from "../assets/Thirdi_logo/logo_without bg_1.png";
import { Link } from "react-router-dom";
import { ReactComponent as BellIcon } from "../assets/asset1.svg";
import { ReactComponent as HomeIcon } from "../assets/asset2.svg";
import { ReactComponent as ListIcon } from "../assets/asset3.svg";
import { ReactComponent as ProductIcon } from "../assets/asset5.svg";
import { ReactComponent as SettingsIcon } from "../assets/asset7.svg";

const SideBar = () => {
  return (
    <div className="sidebar relative bg-daisy border-r border-grey gradient-01">
      <div className="sidebar-top h-[60px] flex justify-between items-center px-6 border-b border-grey">
        <div className="logo">
          <Link to="/">
            <img src={thirdiLogo} alt="thirdi-logo" className="w-[80px]" />
          </Link>
        </div>
        <div className="notification p-2 rounded-lg border border-grey">
          <BellIcon className="h-4 w-4" />
        </div>
      </div>
      <div className="w-full py-4">
        <nav className="px-4">
          <ul>
            <li>
              <Link to="/" className="nav-links bg-gray-100">
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/recommendation" className="nav-links">
                <ListIcon className="h-4 w-4" />
                Recommendations
              </Link>
            </li>
            <li>
              <Link to="/dataupload" className="nav-links">
                <ProductIcon className="h-4 w-4" />
                Data Upload
              </Link>
            </li>
            <li>
              <Link to="/settings" className="nav-links">
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
