import React, { useState } from "react";
import arrow from "/icon-arrow.svg";

const FaqInfo = ({ faq }) => {
  const [isDroped, setIsDroped] = useState(false);

  const dropDown = () => {
    setIsDroped((e) => !e);
  };

  return (
    <div className="faq-container">
      <div className="question-dropdown">
        <h5>{faq.title}</h5>
        <svg
          onClick={dropDown}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          style={{
            cursor: "pointer",
            transform: isDroped ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <path
            fill="none"
            stroke={isDroped ? "#F25F3A" : "#5267DF"}
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </div>
      {isDroped && <p>{faq.description}</p>}
    </div>
  );
};

export default FaqInfo;
