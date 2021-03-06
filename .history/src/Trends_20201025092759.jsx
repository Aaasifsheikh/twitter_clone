import React from "react";
import { FaSistrix } from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends_search">
        <input
          type="text"
          className="trend_control"
          placeholder="search twitter.."
        />
        <div className="trends_icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <TrendsKeyword />
    </div>
  );
};

export default Trends;
