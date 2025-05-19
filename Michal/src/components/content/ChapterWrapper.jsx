import React from "react";
import "./chapter.scss";
import Chapter from "./Chapter";

const ChapterWrapper = () => {
  return (
    <div className="chapter-wrapper">
      <div className="static-line"></div>
      <Chapter>Simple Bookmarking</Chapter>
      <Chapter>Speedy Searching</Chapter>
      <Chapter>Easy Sharing</Chapter>
    </div>
  );
};

export default ChapterWrapper;
