import React from "react";
import { FaTwitter, FaHome, FaHashtag } from "react-icons/fa";
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
          </li>
          <li>
            <a>
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a>
              <FaHashtag/> Expl
            </a>
          </li>
          <li>
            <a>
              <FaHome /> Home
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
