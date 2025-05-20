import React from "react";
import { QUESTIONS } from "../../assets/DUMMY_FAQ";
import FaqInfo from "./FaqInfo";
import "./faq.scss";
import Button from "./content-items/Button";

const FaqWrapper = () => {
  return (
    <div className="faq-wrapper">
      {QUESTIONS.map((question) => (
        <FaqInfo faq={question} key={question.title} />
      ))}
      <Button type="blue">More Info</Button>
    </div>
  );
};

export default FaqWrapper;
