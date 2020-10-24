import React from "react";
import { FaTwitter, FaHome } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
           
            <a>
              <FaTwitter />
            </a>

            {/* </NavLink> */}
          </li>
          <li>
            <a>
              {/* <NavLink to="/twitter"> */}
              <FaHome /> Home
            </a>
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
