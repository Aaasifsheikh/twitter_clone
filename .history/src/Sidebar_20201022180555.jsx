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
              <FaTwitter className="twitter_"/>
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
              <FaRegEnvelope /> Messeges
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
            <a href="">
              <FaUserAlt /> Profile
            </a>
          </li>
          <li>
            <a href="">
              <FaMehBlank /> More
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
