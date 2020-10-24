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
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            <a href="">
              <FaTwitter className="twitter_icon ic"/>
            </a>
          </li>
          <li>
            <a href="">
              <FaHome className="icon" /> Home
            </a>
          </li>
          <li>
            <a href="">
              <FaHashtag  className="icon" /> Explore
            </a>
          </li>
          <li>
            <a href="">
              <FaRegBell  className="icon" /> Notifications
            </a>
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
