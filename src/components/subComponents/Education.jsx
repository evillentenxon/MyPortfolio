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
            <img src="/media/susma_college.png" alt="godawari_college" />
            <h1>2020-present</h1>
            <p className="title">
              Bachelor in Science . Computer Science and Information Technology
              (BSc.CSIT)
            </p>
            <p className="subtitle">Godawari College</p>
            <p className="description">Private college of Itahari</p>
          </div>
          <div className="edu">
            <img src="/media/vac.png" id="vac" alt="vac" />
            <h1>2017-2020</h1>
            <p className="title">Higher Secondary School</p>
            <p className="subtitle">Vishwa Aadarsha College</p>
            <p className="description">Private college of Itahari</p>
          </div>
          <div className="edu">
            <img src="/media/balmiki1.jpg" alt="balmiki" />
            <h1>2017</h1>
            <p className="title">Secondary level Complete</p>
            <p className="subtitle">Balmiki Sec. Boarding School</p>
            <p className="description">Boarding school located in Biratnagar</p>
          </div>
        </div>
      </div>

      <a
        href="https://drive.google.com/file/d/1xYq3u2Npmo3xu8Ys8Hb9MH519ioGCXEk/view?usp=sharing"
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
      background: linear-gradient(to right, #fff, #2bd576);
      width: 80%;
      margin: 20px auto;
      opacity: 0.7;
    }

    .wrap_container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      padding: 0 2rem;
      margin: 0 auto;

      .edu {
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        padding: 2rem;
        max-width: 350px;
        flex: 1 1 300px; /* Allow flexibility */
        animation: moveRight linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;

        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin: 0 auto 1rem;
          display: block;
          border: 3px solid ${({ theme }) => theme.colors.green};
        }

        #vac {
          background-color: #fff;
        }

        h1 {
          color: ${({ theme }) => theme.colors.green};
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 1rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.Pcolor};
          font-family: monospace;
          margin-bottom: 1rem;
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
          margin: 0.5rem 0;
        }
      }
    }
  }

  #edu_btn {
    border-radius: 2rem;
    border: none;
    width: 13rem;
    height: 4rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.green};
    margin: 4rem auto 0;
    display: block;
    color: #000;
    letter-spacing: 0.05em;
    animation: fade linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  a {
    text-decoration: none;
  }

  /* ================ Responsive Design ================ */
  @media screen and (max-width: 768px) {
    .wrap_container {
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
    }

    .edu {
      max-width: 90% !important;
      width: 100%;
    }
  }
`;
