import React from "react";
import Createtweet from "./Createtweet";
import Posts from "./Posts";

const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts_home">Home</div>
      <Createtweet />
      <Posts />
    </div>
  );
};

export default Twittes;
