import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Aasif from "./Image/Aasif.jpg.jpg";
import Post from '.'

const Posts = () => {
  return (
    <div className="post">
      <div className="post_first">
        <img src={Aasif} alt="" className="createImage" />
      </div>
      <div className="Firstname">
        <strong>aaasifsheikh</strong>
        <FaRegCheckCircle className="verify" />
      </div>
      <div className="FirstUsername">
        @Aaasifsheikh820 <span>6m.ago</span>
      </div>
      <div className="post_details">
        <div className="post_details_msg">
          lReprehenderit aute officia sit sint id tempor laboris aliqua. Et
          minim reprehenderit elit ex ut adipisicing ea est dolore duis.
          Consequat mollit tempor sit exercitation est nisi. Dolor eu sit dolore
          sunt. Eiusmod ea ipsum consectetur eiusmod esse ut pariatur. Do et
          cillum voluptate mollit eu commodo et cillum exercitation Lorem sunt
          ad incididunt culpa.
        </div>
        <div className="post_details_img">

        </div>
      </div>
    </div>
  );
};

export default Posts;
