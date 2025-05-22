import React from "react";

const Chapter = ({
  children,
  handleChangeChapter,
  activeChapter,
  chapterKey,
}) => {
  const isActive = activeChapter === chapterKey;

  return (
    <div
      className={`chapter ${isActive ? "chapter-active" : ""}`}
      onClick={() => handleChangeChapter(chapterKey)}
    >
      {children}
    </div>
  );
};

export default Chapter;
