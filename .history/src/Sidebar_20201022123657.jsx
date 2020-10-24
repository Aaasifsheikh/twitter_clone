import React from "react";
import { FaTwitter, FaHome } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            {/* <NavLink to="/twitter"> */}
            <a></a>
              <FaTwitter />
            {/* </NavLink> */}
          </li>
          <li>
            {/* <NavLink to="/twitter"> */}
              <FaHome /> Home
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
