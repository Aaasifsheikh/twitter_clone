import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Aasif from "./Image/Aasif.jpg.jpg";
import Post from "./Image/post.jpg.jpeg";

const Posts = () => {
  return (
    <div className="post">
      <div className="post_first">
        <div className="createImage">
          <img src={Aasif} alt="" />
        </div>
        <div className="Firstname">
          <strong>aaasifsheikh</strong>
          <FaRegCheckCircle className="verify" />
        </div>
        <div className="FirstUsername">
          @Aaasifsheikh820 <span>6m.ago</span>
        </div>
      </div>
      <div className="post_details">
        <div className="post_details_msg">
          lReprehenderit aute officia sit sint id tempor laboris aliqua. Et
          minim reprehenderit elit ex ut adipisicing ea est dolore duis.
          Consequat mollit tempor sit exercitation est nisi. Dolor eu sit dolor.
        </div>
        <div className="post_details_img">
          <img src={Post} alt="post_img" />
        </div>
        <d
      </div>
    </div>
  );
};

export default Posts;
