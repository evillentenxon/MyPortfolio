import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import AnimatedWords from "./subComponents/AnimatedWords";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(true); // Set true when visible, false when out
      },
      { threshold: 0.3 } // Triggers when 30% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
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
          <img
            src="/media/new.png"
            alt="profile"
            ref={ref}
            id={isVisible ? "img" : ""}
          />
          <div class="graphic-circle"></div>
          <div class="graphic-dots"></div>
        </div>
      </div>
    </Div>
  );
}

export default Hero;

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
      #img {
        width: 500px;

        animation: in 1s ease 1;

        @keyframes in {
          from {
            transform: translateY(5rem);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
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
    font-weight: normal;
    cursor: pointer;
    letter-spacing: 0.5cap;
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

  /* ================extra small for mobile================= */
  @media screen and (max-width: 360px) {
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem;
    }

    .left {
      width: 100%;
    }

    .left span p {
      font-size: 1.2rem;
    }

    .left h1 p {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .left p {
      font-size: 1rem;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .buttons button {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
    }

    .circle_border {
      width: 80px;
      height: 80px;
    }

    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }

    .right img {
      width: 80%;
      max-width: 200px;
    }

    .graphic-circle,
    .graphic-dots {
      display: none; /* Hide extra graphics on small screens */
    }
  }
`;
