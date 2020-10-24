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
    const 
    const 
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/sidebar" onClick={Result}>
              <FaTwitter className="twitter_icon icon"/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <FaHome className="icon " /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaHashtag  className="icon" /> Explore
            </NavLink>
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
            <NavLink to="">
              <FaClipboardList  className="icon" /> Lists
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaUserAlt  className="icon"/> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaMehBlank  className="icon"/> More
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
