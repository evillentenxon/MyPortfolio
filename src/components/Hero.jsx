import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import AnimatedWords from "./subComponents/AnimatedWords";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(true);
      },
      { threshold: 0.3 }
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
          <div className="graphic-circle"></div>
          <div className="graphic-dots"></div>
        </div>
      </div>
    </Div>
  );
}

export default Hero;

const Div = styled.div`
  width: 100vw;
  height: fit-content;
  overflow-x: hidden;

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    flex-wrap: wrap; /* For small screens */
    position: relative;

    .right {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      margin-top: 2rem;

      #img {
        width: 500px;
        max-width: 100%;
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
        z-index: -1;
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
      flex: 1;
      min-width: 300px;
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
    font-size: 1rem;
  }

  button:nth-child(1) {
    background: ${({ theme }) => theme.colors.green};
    border: none;
    color: white;
  }

  button:nth-child(2) {
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
  }

  p {
    font-weight: bold;
  }

  /* ------------ RESPONSIVE MEDIA QUERIES --------------- */
  @media (max-width: 1024px) {
    .hero {
      flex-direction: column-reverse;
      padding: 2rem;
      text-align: center;

      .left {
        .circle_border {
          display: none; /* Hide on smaller screens */
        }
      }

      .right {
        .graphic-circle {
          width: 300px;
          height: 300px;
          top: 10%;
          right: 0;
        }
        .graphic-dots {
          width: 150px;
          height: 150px;
          top: 30%;
          right: 0;
        }
      }
    }

    h1 {
      font-size: 2.5rem;
      span {
        font-size: 3rem;
      }
    }

    button {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 1rem;
      .right {
        #img {
          width: 300px;
        }
      }
    }

    h1 {
      font-size: 2rem;
      span {
        font-size: 2.5rem;
      }
    }

    button {
      font-size: 0.9rem;
      padding: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 1rem 0.5rem;
      .right {
        #img {
          width: 250px;
        }
      }
    }

    h1 {
      font-size: 1.8rem;
      span {
        font-size: 2.2rem;
      }
    }

    button {
      font-size: 0.8rem;
      padding: 0.6rem;
    }
  }
`;
