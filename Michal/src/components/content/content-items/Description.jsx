import React from "react";

const Description = ({ children, type }) => {
  let newStyle = "";

  switch (type) {
    case "features":
      newStyle = "additional-features-description-style";
      break;
  }

  return (
    <div className={`description ${newStyle}`}>
      <p>{children}</p>
    </div>
  );
};

export default Description;
