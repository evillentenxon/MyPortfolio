import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  const ref = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 400);
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Div>
      <div className="education">
        <h1>Education</h1>
        <hr />
        <div
          ref={ref}
          className={
            isVisible && !isMobile ? "wrap_container animate" : "wrap_container"
          }
        >
          <div className="edu">
            <h1>2020-present</h1>
            <p className="title">
              Bachelor in Science . Computer Science and Information
              Technology(BSc.CSIT)
            </p>
            <p className="subtitle">Godawari College</p>
            <p className="description">Private college of Itahari</p>
          </div>
          <div className="edu">
            <h1>2017-2020</h1>
            <p className="title">Higher Secondary School</p>
            <p className="subtitle">Vishwa Aadarsha College</p>
            <p className="description">Private college of Itahari</p>
          </div>
          <div className="edu">
            <h1>2017</h1>
            <p className="title">Secondary level Complete</p>
            <p className="subtitle">Balmiki Sec. Boarding School</p>
            <p className="description">Boarding school located in biratnagar</p>
          </div>
        </div>
      </div>

      <a
        href="https://drive.google.com/file/d/1_wp4b83bTmTwJlo7vZcV57bkPhumOQJF/view?usp=sharing"
        target="_blank"
        download="kiran_cv.pdf"
      >
        <button id="edu_btn">DOWNLOAD CV</button>
      </a>
    </Div>
  );
}

export default Resume;

const Div = styled.div`
  margin-top: 5rem;

  @keyframes moveRight {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .education {
    h1 {
      text-align: center;
    }
    hr {
      border: none;
      height: 4px;
      background: linear-gradient(
        to right,
        #fff,
        #2bd576
      ); /* Changes the color */
      width: 80%;
      margin: 20px auto; /* Centers it */
      opacity: 0.7;
    }

    .wrap_container {
      display: flex;
      flex-wrap: wrap;
      padding: 0 4rem;
      width: fit-content;
      gap: 1rem;
      margin: 0 auto;

      .edu {
        box-sizing: border-box;
        border: none;
        background-color: ${({ theme }) => theme.colors.bg};
        max-width: 40vw;
        padding: 1.5rem;
        border-radius: 1rem;
        animation: moveRight linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;

        h1 {
          color: ${({ theme }) => theme.colors.green};
          text-align: left;
        }
        .title {
          font-size: 1.5rem;
        }
        .subtitle {
          font-size: 1rem;
          text-transform: uppercase;
          font-family: monospace;
          color: ${({ theme }) => theme.colors.Pcolor};
          margin-bottom: 2rem;
        }
        .description {
          color: ${({ theme }) => theme.colors.Pcolor};
        }
        ul {
          padding-left: 2rem;
          li {
            color: ${({ theme }) => theme.colors.Pcolor};
          }
        }
        * {
          margin: 1rem 0;
        }
      }
    }
  }

  #edu_btn {
    border-radius: 2rem;
    border: none;
    width: 13rem;
    height: 4rem;
    font-size: 12px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.green};
    margin: 5rem auto;
    display: block;
    color: #000;
    font-weight: normal;
    letter-spacing: 0.5cap;
  }

  a {
    text-decoration: none;
  }

  /* ================extra small for mobile================= */
  @media screen and (max-width: 360px) {
    .wrap_container {
      display: flex;
      flex-direction: column; /* Ensure a vertical layout */
      align-items: center; /* Center the cards */
      width: 100%;
    }

    .wrap_container .edu {
      max-width: 90% !important; /* Force override */
      width: 90% !important; /* Make sure it takes the correct width */
      background: red;
      text-align: center; /* Optional: Centers text for a better look */
    }
  }
`;
