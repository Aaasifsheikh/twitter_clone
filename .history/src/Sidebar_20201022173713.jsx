import React from "react";
import { FaTwitter, FaHome, FaHashtag, FaHashtag, FaClipboardList } from "react-icons/fa";
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
              <FaHashtag/> Explore
            </a>
          </li>
          <li>
            <a>
              <FaRegBell /> Notificatios
            </a>
          </li>
          <li>
            <a>
              <FaRegEnvolep /> Messeges
            </a>
          </li>
          <li>
            <a>
              <FaRegBookmark /> Bookmarks
            </a>
          </li>
          <li>
            <a>
              <FaClipboardList /> Lists
            </a>
          </li>
          <li>
            <a>
              <FaCli /> Profile
            </a>
          </li>
          <li>
            <a>
              <FaClipboardList /> More
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
