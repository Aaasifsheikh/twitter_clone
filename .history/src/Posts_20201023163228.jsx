import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Aasif from "./Image/Aasif.jpg.jpg";

const Posts = () => {
  return (
    <div className="post">
      <div className="post_first">
        <img src={Aasif} alt="" className="createImage" />
      </div>
      <div className="Firstname">
        <strong>aaasifheikh</strong> <FaRegCheckCircle className="verify" />
      </div>
      <div className="FirstUsername">
        @Aaasifsheikh820 <span>6m</span>
      </div>
    </div>
  );
};

export default Posts;
