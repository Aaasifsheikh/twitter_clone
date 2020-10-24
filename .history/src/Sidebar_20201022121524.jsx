import React from "react";
import { FaTwitter } from "react-icons/fa";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
              <FaTwitter/>
              <span></span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
