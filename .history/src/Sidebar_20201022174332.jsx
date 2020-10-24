import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaClipboardList,
  FaRegEnvolep,
  FaRegBookmark,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            <a href="">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="">
              <FaHashtag /> Explore
            </a>
          </li>
          <li>
            <a href="">
              <FaRegBell /> Notifications
            </a>
          </li>
          <li>
            <a href="">
              <FaRegEnvolep /> Messeges
            </a>
          </li>
          <li>
            <a href="">
              <FaRegBookmark /> Bookmarks
            </a>
          </li>
          <li>
            <a href="">
              <FaClipboardList /> Lists
            </a>
          </li>
          <li>
            <a>
              <FaUserAlt /> Profile
            </a>
          </li>
          <li>
            <a>
              <FaMehBlank /> More
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
