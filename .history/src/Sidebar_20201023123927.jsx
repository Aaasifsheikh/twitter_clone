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
import { NavLink, useHistory } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();

  const Result = () => {
    history.push("/home");
  };
  return (
    <React.Fragment>
      <div className="sidebar">
        <ul>
          <li>
            {/* <NavLink to="/sidebar" onClick={Result}> */}
            <a href="">
              <FaTwitter className="twitter_icon icon" />
            </a>
            {/* </NavLink> */}
          </li>
          <li>
          <a href="">
              <FaHome className="icon " /> Home
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
            <NavLink to="">
              <FaUserAlt className="icon" /> Profile
            </NavLink>
            <a href="">
            </a>
          </li>
          <li>
            <NavLink to="">
              <FaMehBlank className="icon" /> More
            </NavLink>
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
