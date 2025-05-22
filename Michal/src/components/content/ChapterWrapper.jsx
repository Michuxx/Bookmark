import React from "react";
import "./chapter.scss";
import Chapter from "./Chapter";

const ChapterWrapper = ({ handleChangeChapter, activeChapter }) => {
  const chapters = [
    { key: "bookmarking", label: "Simple Bookmarking" },
    { key: "searching", label: "Speedy Searching" },
    { key: "sharing", label: "Easy Sharing" },
  ];

  return (
    <div className="chapter-wrapper">
      {chapters.map(({ key, label }) => (
        <Chapter
          key={key}
          chapterKey={key}
          activeChapter={activeChapter}
          handleChangeChapter={handleChangeChapter}
        >
          {label}
        </Chapter>
      ))}
    </div>
  );
};

export default ChapterWrapper;
