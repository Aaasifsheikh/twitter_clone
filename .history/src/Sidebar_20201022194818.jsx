import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaClipboardList,
  FaRegEnvelope,
  FaRegBookmark,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/sidebar">
              <FaTwitter className="twitter_icon icon"/>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaHome className="icon " /> Home
            </NavLink>
          </li>
          <li>
            <NavLinv to="">
              <FaHashtag  className="icon" /> Explore
            </NavLinv>
          </li>
          <li>
            <NavLink to="">
              <FaRegBell className="icon" /> Notifications
            </NavLink>
          </li>
          <li>
            <a href="">
              <FaRegEnvelope  className="icon" /> Messeges
            </a>
          </li>
          <li>
            <a href="">
              <FaRegBookmark  className="icon" /> Bookmarks
            </a>
          </li>
          <li>
            <a href="">
              <FaClipboardList  className="icon" /> Lists
            </a>
          </li>
          <li>
            <a href="">
              <FaUserAlt  className="icon"/> Profile
            </a>
          </li>
          <li>
            <a href="">
              <FaMehBlank  className="icon"/> More
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
