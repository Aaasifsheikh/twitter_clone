import React from "react";
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
          <faRegListAlt className="icon" />
          <faRegImage className="icon" />
          <faRegImage className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Createtweet;
