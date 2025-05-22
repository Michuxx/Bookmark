import React, { useState } from "react";
import ArrowIcon from "../../assets/icon-arrow.svg?react";

const FaqInfo = ({ faq }) => {
  const [isDroped, setIsDroped] = useState(false);

  const dropDown = () => {
    setIsDroped((e) => !e);
  };

  return (
    <div className="faq-container">
      <div className="question-dropdown">
        <h5>{faq.title}</h5>
        <ArrowIcon
          onClick={dropDown}
          style={{
            cursor: "pointer",
            color: isDroped ? "#F25F3A" : "#5267DF",
            transform: isDroped ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </div>
      {isDroped && <p>{faq.description}</p>}
    </div>
  );
};

export default FaqInfo;
