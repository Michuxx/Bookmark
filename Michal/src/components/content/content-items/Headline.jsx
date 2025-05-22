import React from "react";

const Headline = ({ children, type }) => {
  let newStyle = "";

  switch (type) {
    case "features":
      newStyle = "additional-features-headline-style";
      break;
  }

  return (
    <div className="headline">
      <h1 className={newStyle}>{children}</h1>
    </div>
  );
};

export default Headline;
