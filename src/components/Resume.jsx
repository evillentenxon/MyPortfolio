import React from "react";
import styled from "styled-components";
import Education from "../components/subComponents/Education";

function Resume() {
  return (
    <Wrapper>
      <div className="title">
        <h1>Resume</h1>
        <p>
          Aspiring web developer with a passion for creating interactive and
          user-friendly applications. I've been coding for a year, continuously
          honing my skills in modern web technologies. Currently interning at
          Lunar IT Pvt. Ltd., I'm gaining hands-on experience while exploring
          new ways to build efficient and engaging digital solutions.
        </p>
      </div>

      <section className="resume">
        <h1>Experience</h1>
        <hr />
        <div className="grid_container">
          <div className="exp">
            <h2>2023–Present</h2>
            <p className="title">MERN Intern</p>
            <p className="subtitle">Lunar IT Solution Pvt. Ltd.</p>
            <p className="description">
              <i>Currently running</i>
            </p>
          </div>

          <div className="exp">
            <h2>2020–2021</h2>
            <p className="title">Computer Repair and Maintenance</p>
            <p className="subtitle">Computer Planet</p>
            <p className="description">
              Computer Planet is one of the biggest IT shops in Biratnagar,
              providing both hardware and software services.
            </p>
            <ul>
              <li>Learned how systems work.</li>
              <li>Diagnosed and identified system problems.</li>
              <li>Installed new device components and software.</li>
            </ul>
          </div>
        </div>
      </section>

      <Education />
    </Wrapper>
  );
}

export default Resume;

const Wrapper = styled.div`
  padding: 2rem 1rem;

  @keyframes moveRight {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .title {
    text-align: center;
    margin-bottom: 4rem;

    h1 {
      position: relative;
      font-size: 3rem;
      color: white;
    }

    h1::before {
      content: "Resume";
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.08;
      font-size: 6rem;
      font-weight: 800;
      white-space: nowrap;
      pointer-events: none;
    }

    p {
      margin-top: 1.5rem;
      padding: 0 15%;
      color: ${({ theme }) => theme.colors.Pcolor};
      font-size: 1rem;
      line-height: 1.7;
    }
  }

  .resume {
    text-align: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    hr {
      border: none;
      height: 3px;
      width: 80%;
      margin: 1rem auto 2rem;
      background: linear-gradient(to right, #fff, #2bd576);
      opacity: 0.8;
    }

    .grid_container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      width: 90%;
      margin: 0 auto;
      padding: 1rem 0;

      .exp {
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        padding: 2rem;
        animation: moveRight 1s ease forwards;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;

        h2 {
          color: ${({ theme }) => theme.colors.green};
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          text-align: left;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-align: left;
        }

        .subtitle {
          font-size: 1rem;
          font-family: monospace;
          color: ${({ theme }) => theme.colors.Pcolor};
          margin-bottom: 1rem;
          text-align: left;
          text-transform: uppercase;
        }

        .description {
          color: ${({ theme }) => theme.colors.Pcolor};
          margin-bottom: 1rem;
          text-align: left;
        }

        ul {
          list-style: disc;
          margin-left: 1.5rem;
          text-align: left;
          li {
            margin-bottom: 0.5rem;
            color: ${({ theme }) => theme.colors.Pcolor};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .title p {
      padding: 0 5%;
    }

    .resume .grid_container {
      width: 95%;
    }
  }

  @media (max-width: 480px) {
    .title h1 {
      font-size: 2.5rem;
    }

    .title h1::before {
      font-size: 4rem;
    }

    .resume h1 {
      font-size: 2rem;
    }
  }
`;
