import React from "react";
import styled from "styled-components";
import AnimatedWords from "./subComponents/AnimatedWords";
import About from "./About";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact"

function Home() {
  return (
    <Div>
      <div className="hero">
        <div className="left">
          <span>
            <p>HELLO!</p>
          </span>
          <br />
          <h1>
            <p>
              I'M &nbsp;
              <span>
                kiran Gautam
                <br />
              </span>
            </p>
          </h1>
          <AnimatedWords />
          <br />
          <br />
          <p>A MERN developer</p>
          <br />
          <div className="buttons">
            <button>RESUME</button>
            <button>WORKS</button>
          </div>
          <div className="circle_border"></div>
        </div>
        <div className="right">
          <img src="/media/new.png" alt="profile" />
          <div class="graphic-circle"></div>
          <div class="graphic-dots"></div>
        </div>
      </div>
      <About />
      <Resume />
      <Work />
      <Contact/>
    </Div>
  );
}

export default Home;

const Div = styled.div`
  width: 100vw;
  height: fit-content;
  /* margin-top: 2rem; */

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    /* margin-top: 2rem; */

    .right {
      /* height: 100%; */
      img {
        width: 500px;
      }

      .graphic-circle {
        position: absolute;
        width: 400px;
        height: 400px;
        background: ${({ theme }) => theme.colors.green};
        border-radius: 50%;
        top: 20%;
        right: 10%;
        opacity: 0.5;
        z-index: -1; /* Send it behind the person */
        animation: scaleIn 2.5s 1;

        @keyframes scaleIn {
          from {
            scale: 0;
          }
          to {
            scale: 1;
          }
        }
      }

      .graphic-dots {
        position: absolute;
        width: 200px;
        height: 200px;
        background-image: radial-gradient(circle, white 10%, transparent 10%);
        background-size: 10px 10px;
        top: 40%;
        right: 5%;
        z-index: -1;
      }
    }

    .left {
      .circle_border {
        width: 600px;
        height: 600px;
        border: 70px solid #f1f1f1;
        border-radius: 50%;
        position: absolute;
        opacity: 0.1;
        top: -150px;
        left: -150px;
        z-index: -111;
      }

      h1 {
        font-size: 3rem;
        span {
          font-size: 4rem;
        }
      }
    }
  }

  span {
    color: ${({ theme }) => theme.colors.green};
  }

  button {
    border-radius: 2rem;
    padding: 1rem;
    margin: 0 1rem 0 0;
    font-weight: bold;
    cursor: pointer;
  }

  button:nth-child(1) {
    background: ${({ theme }) => theme.colors.green};
    border: none;
  }

  button:nth-child(2) {
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
  }

  p {
    font-weight: bold;
  }
`;
