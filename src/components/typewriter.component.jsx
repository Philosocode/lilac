import React, { useState, useEffect } from "react";

// FROM: https://stackoverflow.com/a/58053492
export const TypeWriter = ({ headingText, subheadingText }) => {
  const [currentMessageText, setCurrentMessageText] = useState("");
  const [delayPassed, setDelayPassed] = useState(false);
  const typingSpeed = 100;
  const initialDelay = 500;


  useEffect(() => {
    setTimeout(() => setDelayPassed(true), initialDelay);
  });

  useEffect(() => {
    if (!delayPassed) return;

    const timer = setTimeout(() => {
      const updatedMessageText = subheadingText.substring(0, currentMessageText.length + 1);
      setCurrentMessageText(updatedMessageText);
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [delayPassed, subheadingText, currentMessageText]);

  return (
    <>
      <h1 className="c-heading c-hero__heading">{headingText}</h1>
      <h2 className="c-heading c-hero__subheading">
        <span className="c-typewriter__text">{currentMessageText}</span>
        <span className="c-typewriter__cursor"></span>
      </h2>
    </>
  );
}