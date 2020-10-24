import React, { useState } from "react";

const TrendsKeyword = () => {
  const [state, setState] = useState([
    { id: 1, country: "India", keyword: "ISPR", totalkeywords: 3444 },
    
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword_heading">
          <h4>Trends for you</h4>
        </div>
        <div className="country">Trends In India</div>
        <div className="keyword_name">
          <strong>ISPR</strong>
        </div>
        <div className="keyword_tweets">2344k</div>
      </div>
    </div>
  );
};

export default TrendsKeyword;
