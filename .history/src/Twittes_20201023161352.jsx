import React from "react";
import Createtweet from "./Createtweet";
import Posts from "./Posts";


const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts_home">Home</div>
      <div className="profile">
        <Createtweet />
      </div>
    </div>
  );
};

export default Twittes;
