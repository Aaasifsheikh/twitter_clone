import React from "react";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink>
              <FaTwitter />
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
