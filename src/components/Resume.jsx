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
            <img src="./media/img-not-found.jpg" alt="intern_certificate" />
            <div className="content">
              <h2>2023–Present</h2>
              <p className="title">MERN Intern</p>
              <p className="subtitle">Lunar IT Solution Pvt. Ltd.</p>
              <p className="description">
                <i>Currently running</i>
              </p>
            </div>
          </div>

          <div className="exp">
            <img src="./media/work.jpeg" alt="intern_certificate" />
            <div className="content">
              <h2>2023–2025</h2>
              <p className="title">Computer Repair and Maintenance</p>
              <p className="subtitle">S.K Computer & Electronics</p>
              <p className="description">
                It is one of the biggest IT shops in Biratnagar, providing both
                hardware and software services.
              </p>
              <ul>
                <li>Learned how systems work.</li>
                <li>Diagnosed and identified system problems.</li>
                <li>Installed new device components and software.</li>
              </ul>
            </div>
          </div>

          <div className="exp">
            <img src="./media/training.jpeg" alt="intern_certificate" />
            <div className="content">
              <h2>2021</h2>
              <p className="title">Computer Operator and Maintainance</p>
              <p className="subtitle">Sudiksha IT Center</p>
              <p className="description">
                I have completed training in Computer Operator and Maintenance
                at one of the biggest IT shops in Biratnagar, which offers both
                hardware and software services.
              </p>
              <ul>
                <li>
                  Learned how computer systems function and operate efficiently.
                </li>
                <li>
                  Diagnosed and resolved common hardware and software issues.
                </li>
                <li>
                  Installed, configured, and maintained device components and
                  software.
                </li>
              </ul>
            </div>
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
      font-size: 1rem;
      max-width: 700px;
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.Pcolor};
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      width: 90%;
      margin: 0 auto;
      padding: 1rem 0;

      .exp {
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        animation: moveRight 1s ease forwards;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;

        &:hover {
          transform: translateY(-5px);
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid #ccc;
        }

        .content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex:1;

          h2 {
            color: ${({ theme }) => theme.colors.green};
            font-size: 1rem;
          }

          .title {
            font-size: 1.25rem;
            font-weight: 700;
          }

          .subtitle {
            font-size: 0.9rem;
            font-family: monospace;
            color: ${({ theme }) => theme.colors.Pcolor};
            text-transform: uppercase;
          }

          .description {
            font-size: 0.9rem;
            color: ${({ theme }) => theme.colors.Pcolor};
          }

          ul {
            list-style: disc;
            margin-left: 1.5rem;

            li {
              font-size: 0.9rem;
              color: ${({ theme }) => theme.colors.Pcolor};
            }
          }
        }

        .price {
          font-weight: bold;
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.green};
          text-align: right;
          padding: 0.5rem 1rem 1rem;
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

    .resume h1 {
      font-size: 2rem;
    }
  }
`;
