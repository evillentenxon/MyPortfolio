import React from "react";
import styled from "styled-components";
import SkillsBar from "./Skills";

function About() {
  return (
    <Div>
      <div className="left">
        <div className="up">
          <img src="/media/profile3.png" alt="my profile" />
          <div className="intro">
            <p>Name: Kiran Gautam</p>
            <p>Job Role: Website Developer</p>
            <p>Experience: 1 year</p>
            <p>Address: Sundarharaicha-03, Morang</p>
          </div>
        </div>
        <div className="down">
          <span id="skill_title">Skills</span>
          <SkillsBar />
        </div>
      </div>

      <div className="right">
        <h1>About Me</h1>
        <p>
          "Passionate about creating immersive digital experiences, I specialize
          in building dynamic and user-friendly applications..."
        </p>
        <div className="details">
          <p><span>Profile:</span> Web app developer</p>
          <p><span>Education:</span> Bachelor of Engineering</p>
          <p><span>Language:</span> Nepali, English, Hindi</p>
          <p><span>Other Skills:</span> Excel, Git, Cloud, Figma, Word</p>
          <p><span>Interest:</span> Traveling, Travel Photography, Teaching</p>
        </div>
        <p id="lastP"><span>3+</span> projects completed</p>
        <a href="https://www.linkedin.com/in/roman-gautam-19aaa8274/" target="_blank">
          <button>LinkedIn</button>
        </a>
      </div>
    </Div>
  );
}

export default About;

const Div = styled.div`
  width: 100vw;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;

  p {
    color: #6f7378;
    font-weight: normal;
  }
  span {
    color: white;
    font-weight: bold;
  }

  & > div {
    width: 50%;
  }

  .left {
    margin-top: 3rem;
    .up {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        border: 5px solid #fff;
        background-color: ${({ theme }) => theme.colors.green};
        border-radius: 50%;
        max-width: 150px;
        max-height: 150px;
      }
      .intro {
        p {
          margin: 1rem 0;
        }
      }
    }
    .down {
      padding: 4rem;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      #skill_title {
        font-weight: normal;
        font-size: 1.5rem;
      }
      span {
        color: ${({ theme }) => theme.colors.Pcolor};
      }
    }
  }

  .right {
    box-sizing: border-box;
    padding-right: 4rem;
    * {
      margin: 1rem 0;
    }
    #lastP {
      color: white;
      font-size: 1.5rem;
      margin-top: 4rem;
      span {
        color: ${({ theme }) => theme.colors.green};
      }
    }
    h1 {
      position: relative;
      font-size: 50px;
      color: white;
      margin: 2rem 0;
    }
    h1::before {
      content: "About";
      position: absolute;
      top: 0.7rem;
      left: 3px;
      opacity: 0.1;
      font-size: 5rem;
      font-weight: 700;
    }
    button {
      background: ${({ theme }) => theme.colors.green};
      border: none;
      border-radius: 2rem;
      padding: 1rem 2rem;
      font-weight: normal;
      cursor: pointer;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-size: 14px;
    }
    .details {
      * {
        margin: 0.5rem 0;
      }
    }
  }

  /* ===== Tablet (768px) ===== */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    & > div {
      width: 90%;
    }
    .left, .right {
      padding: 0 1rem;
    }
    .up {
      flex-direction: column;
      img {
        width: 120px;
        height: 120px;
      }
    }
    .down {
      padding: 2rem 0;
      align-items: center;
    }
    .right {
      padding: 0 1rem;
      h1 {
        font-size: 2.5rem;
      }
      h1::before {
        font-size: 3rem;
      }
      button {
        width: 100%;
        padding: 12px;
      }
    }
  }

  /* ===== Mobile (480px) ===== */
  @media screen and (max-width: 480px) {
    .up img {
      width: 100px;
      height: 100px;
    }
    .intro p, .details p, .right p {
      font-size: 0.9rem;
    }
    #lastP {
      font-size: 1.2rem;
    }
    .right h1 {
      font-size: 2rem;
    }
  }
`;
