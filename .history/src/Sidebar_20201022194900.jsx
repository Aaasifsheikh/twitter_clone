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
            <NavLink to="">
              <FaRegEnvelope  className="icon" /> Messeges
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaRegBookmark  className="icon" /> Bookmarks
            </NavLink>
          </li>
          <li>
            <N>
              <FaClipboardList  className="icon" /> Lists
            </N>
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
