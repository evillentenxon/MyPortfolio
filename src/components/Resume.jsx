import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Education from "../components/subComponents/Education";

function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set true when visible, false when out
      },
      { threshold: 0.3 } // Triggers when 30% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Div>
      <div className="title">
        <h1>Resume</h1>
        <p>
          Aspiring web developer with a passion for creating interactive and
          user-friendly applications. I've been coding for a year, continuously
          honing my skills in modern web technologies. Currently interning at
          Lunar IT pvt. ltd. , I'm gaining hands-on experience while exploring
          new ways to build efficient and engaging digital solutions.
        </p>
        <br />
        <br />
        <br />
      </div>

      <div className="resume">
        <h1>Experience</h1>
        <hr />
        <div className="grid_container">
          <div ref={ref} className={isVisible ? "exp" : ""}>
            <h1>2023-present</h1>
            <p className="title">MERN intern</p>
            <p className="subtitle">Lunar IT solution pvt. ltd.</p>
            <p className="description">
              <i>currently running</i>
            </p>
          </div>

          <div ref={ref} className={isVisible ? "exp" : ""}>
            <h1>2020-2021</h1>
            <p className="title">Computer Repair and Maintenance</p>
            <p className="subtitle">Computer Planet</p>
            <p className="description">
              Computer Planet is one of the biggest IT shop of Biratnagar. It
              provides both hardware and software services.
            </p>
            <ul>
              <li>Learned how system works.</li>
              <li>
                Able to diagnosis the system and identify where the problem.
              </li>
              <li>
                Installed new device components and software into the system.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Education />
    </Div>
  );
}

export default Resume;

const Div = styled.div`
  .title {
    h1 {
      position: relative;
      font-size: 50px;
      color: white;
      margin: 2rem 0;
      text-align: center;
    }

    h1::before {
      content: "Resume";
      position: absolute;
      opacity: 0.1;
      font-size: 5rem;
      font-weight: 700;
      left: 50%;
      transform: translateX(-50%);
    }
    p {
      padding: 0 20%;
      text-align: center;
      color: ${({ theme }) => theme.colors.Pcolor};
    }
  }

  .resume {
    h1 {
      text-align: center;
    }
    hr {
      border: none; /* Removes the default border */
      height: 4px; /* Sets the thickness */
      background: linear-gradient(
        to right,
        #fff,
        #2bd576
      ); /* Changes the color */
      width: 80%;
      margin: 20px auto; /* Centers it */
      opacity: 0.7;
    }

    .grid_container {
      display: grid;
      grid-template-columns: auto auto;
      padding: 0 4rem;
      justify-items: center;
      width: fit-content;
      gap: 1rem;
      margin: 0 auto;

      .exp {
        box-sizing: border-box;
        border: none;
        background-color: ${({ theme }) => theme.colors.bg};
        width: 40vw;
        padding: 1.5rem;
        border-radius: 1rem;
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

  /* ================ Extra Small Screens (Mobile) < 360px ================ */
  @media screen and (max-width: 360px) {
    .title h1 {
      font-size: 35px; /* Reduce font size */
    }

    .title h1::before {
      font-size: 3rem; /* Adjust background text */
    }

    .title p {
      padding: 0 10%; /* Reduce padding */
    }

    .resume h1 {
      font-size: 28px; /* Reduce header font size */
    }

    .grid_container {
      grid-template-columns: 1fr; /* Single column layout */
      padding: 0 1rem; /* Reduce padding */
      width: 100%; /* Full width */
    }

    .exp {
      width: 90%; /* Make boxes more flexible */
      animation: none; /* Remove animation */
      opacity: 1; /* Ensure it's fully visible */
      transform: translateY(0);
    }
  }
`;
