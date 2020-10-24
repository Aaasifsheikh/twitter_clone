import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import Aasif from "./Image/Aasif.jpg.jpg";
const Createtweet = () => {
  return (
    <div className="create">
      <div className="createFirst">
        <div className="createImage">
          <img src={Aasif} alt="profile" />
        </div>
        <div className="create_input">
          <input
            type="text"
            className="create_control"
            placeholder="What's happening..."
          />
        </div>
      </div>
      <div className="createSecond">
        <div className="post_icon">
          <faRegImage className="icon" />
          <FaRegListAlt className="icon" />
          <FaRegSmile className="icon" />
          <FaCalendarCheck className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Createtweet;
