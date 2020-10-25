import React, { useState } from "react";

const TrendsKeyword = () => {
  const [state, setState] = useState([
    {
      id: 1,
      country: "Trends In India",
      keyword: "#Article 370",
      totalkeywords: "3444k",
    },
    {
      id: 2,
      country: "Trends In India",
      keyword: "Know Your Nation",
      totalkeywords: "3554k",
    },
    {
      id: 3,
      country: "Trends In India",
      keyword: "Co-vacsean In India ",
      totalkeywords: "56535k",
    },
    {
      id: 4,
      country: "Trends In India",
      keyword: "Terror Attack",
      totalkeywords: "4335k",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword_heading">
          <h4>What's hapening</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword_name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword_tweets">{keyword.totalkeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;
