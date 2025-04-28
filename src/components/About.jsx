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
            <p>Address: sundarharaicha-03, Morang</p>
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
          in building dynamic and user-friendly applications. With expertise in
          modern web technologies, I love turning ideas into reality through
          clean and efficient code. Always eager to learn and innovate, I strive
          to push the boundaries of what's possible in the digital world."
        </p>
        <div className="details">
          <p>
            <span>Profile:</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web app
            developer
          </p>
          <p>
            <span>Education:</span> &nbsp;&nbsp;&nbsp;&nbsp;Bachelor of
            Engineering
          </p>
          <p>
            <span>Language:</span> &nbsp;&nbsp;&nbsp;&nbsp;Nepali, English,
            Hindi
          </p>
          <p>
            <span>Other Skills:</span>&nbsp;&nbsp;&nbsp;Excel, Git, Cloud,
            Figma, Word
          </p>
          <p>
            <span>Interest:</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Traveling,
            Travel Photography, Teaching
          </p>
        </div>

        <p id="lastP">
          <span>3+</span> projects completed
        </p>

        <a
          href="https://www.linkedin.com/in/roman-gautam-19aaa8274/"
          target="_blank"
        >
          <button>LinkedIn</button>
        </a>
      </div>
    </Div>
  );
}

export default About;

const Div = styled.div`
  //height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;

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
      font-weight: normal;
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
      padding: 1rem;
      margin: 0 1rem 0 0;
      font-weight: normal;
      cursor: pointer;
      letter-spacing: 0.5cap;
      text-transform: uppercase;
      font-size: 12px;
    }

    .details {
      * {
        margin: 1rem 0;
      }
    }
  }

  /* ================extra small for mobile================= */
  @media screen and (max-width: 360px) {
    flex-direction: column;
    .left,
    .right {
      width: 100%;
      text-align: center;
    }

    .up {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .up img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .intro p {
      font-size: 0.9rem;
      margin: 4px 0;
    }

    .down {
      margin-top: 1rem;
    }

    #skill_title {
      font-size: 1.2rem;
    }

    .right h1 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .right p {
      font-size: 1rem;
      line-height: 1.4;
      padding: 0 10px;
    }

    .details p {
      font-size: 0.9rem;
      text-align: left;
      padding: 5px 15px;
    }

    #lastP {
      font-size: 1.2rem;
      margin-top: 10px;
    }

    button {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      margin-top: 10px;
    }
  }
`;
