import React from "react";
import Aasif from "./Image/Aasif.jpg.jpg";
const Createtweet = () => {
  return (
    <div className="create">
      <div className="createFirst">
        <div className="createImage">
          <div className="profile">
            <img src={Aasif} alt="profile" />
          </div>
          <div className="create_input">
            <input type="text" className="create_control" p
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createtweet;
