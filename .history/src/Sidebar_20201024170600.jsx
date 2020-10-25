/* eslint-disable jsx-a11y/anchor-is-valid */
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
import {  useHistory } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            {/* <NavLink to="/sidebar" onClick={Result}> */}
            <a href="#">
              <FaTwitter className="twitter_icon" />
            </a>
            {/* </NavLink> */}
          </li>
          <li>
            <a href="">
              <FaHome className="icon" /> Home
            </a>
            {/* <NavLink to="/home">
            </NavLink> */}
          </li>
          <li>
            {/* <NavLink to="">
            </NavLink> */}
            <a href="">
              <FaHashtag className="icon" /> Explore
            </a>
          </li>
          <li>
            {/* <NavLink to="">
            </NavLink> */}
            <a href="">
              <FaRegBell className="icon" /> Notifications
            </a>
          </li>
          <li>
            {/* <NavLink to="">
            </NavLink> */}
            <a href="">
              <FaRegEnvelope className="icon" /> Messeges
            </a>
          </li>
          <li>
            {/* <NavLink to="">
            </NavLink> */}
            <a href="">
              <FaRegBookmark className="icon" /> Bookmarks
            </a>
          </li>
          <li>
            {/* <NavLink to="">
            </NavLink> */}
            <a href="">
              <FaClipboardList className="icon" /> Lists
            </a>
          </li>
          <li>
            {/* <NavLink to="">
            </NavLink> */}
            <a href="">
              <FaUserAlt className="icon" /> Profile
            </a>
          </li>
          <li>
            {/* <NavLink to="">
            </NavLink> */}
            <a href="">
              <FaMehBlank className="icon" /> More
            </a>
          </li>
          <div className="sidebar_btn">
            <a href="#">Profile</a>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
