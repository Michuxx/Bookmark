import React from "react";

const Description = ({ children, type }) => {
  let newStyle = "";

  switch (type) {
    case "features":
      newStyle = "additional-features-description-style";
      break;
    case "managing":
      newStyle = "additional-managing-headline-style";
  }

  return (
    <div className={`description ${newStyle}`}>
      <p>{children}</p>
    </div>
  );
};

export default Description;
