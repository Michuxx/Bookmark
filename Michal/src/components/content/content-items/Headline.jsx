import React from "react";

const Headline = ({ children }) => {
  return (
    <div className="headline">
      <h1>{children}</h1>
    </div>
  );
};

export default Headline;
