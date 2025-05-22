import React, { useState } from "react";
import Button from "../content/content-items/Button";
import "./newslatter.scss";
import errorIcon from "/icon-error.svg";

const Newslatter = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (isError) {
      setIsError(false);
    }
  };

  const isEmailValid = (email) => {
    return email.includes("@");
  };

  const handleSubmit = () => {
    if (!isEmailValid(email)) {
      console.log("WRONG MAIL:");
      setIsError(true);
    } else {
      setIsError(false);
    }
    console.log("Submitted:", email);
  };

  return (
    <div className="newslatter-wrapper">
      <p>35.000 + ALREADY JOINED</p>
      <h1>stay up-to-date with what we're doing</h1>
      <div className="newslatter-form-wrapper">
        <div className="valid-wrapper">
          <input
            type="text"
            onChange={handleChange}
            value={email}
            style={isError ? { border: "1px solid #fb5859" } : {}}
          />
          {isError && (
            <div className="error-text">Whoops, make sure it's an email</div>
          )}
          {isError && (
            <img src={errorIcon} alt="error" className="error-icon" />
          )}
        </div>
        <Button type="red" click={handleSubmit}>
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default Newslatter;
