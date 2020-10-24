import React from "react";
import Aasif from "./Image/Aasif.jpg.jpg";

const Posts = () => {
  return (
    <div className="posts">
      <div className="post_first">
        <img src={Aasif} alt="" className="createImage" />
      </div>
      <div className="Firstname">
        <strong>Aasif Sheikh</strong>
      </div>
      <div className="FirstUsername">@Aaasifsheikh820</div>
    </div>
  );
};

export default Posts;
