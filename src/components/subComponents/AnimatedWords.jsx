import React, { useState, useEffect } from "react";
import styled from "styled-components";

const words = ["Frontend Dev", "UI/Ux", "Backend Dev"];

const AnimatedWords = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150); // Adjust typing speed

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1000); // Delay before switching words
    }
  }, [charIndex, wordIndex]);

  return (
    <Div>
      <div className="word-container">
        <span className="animated-word">{displayText}</span>
      </div>
    </Div>
  );
};

export default AnimatedWords;

const Div = styled.div`
  .word-container {
    font-size: 2rem;
    font-weight: bold;
    height: 40px;
    width: 200px;
    text-align: left;
  }

  .animated-word {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid white; /* Cursor effect */
    animation: blinkCursor 0.8s infinite;
    color: white;
  }

  @keyframes blinkCursor {
    50% {
      border-color: transparent;
    }
  }
`;
