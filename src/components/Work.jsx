import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import projects from "./project.json";
import Counter from "./subComponents/Counter";

function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stops observing after animation starts
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <Div>
      <h1>Projects</h1>
      <p>Below are some MERN project i have work for certain period of time.</p>
      <div className="my_projects">
        {projects.map((project, index) => (
          <div ref={ref} className={isVisible ? "proj" : "proj1"} key={index}>
            <a
              href={project.url}
              target="_blank"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            ></a>
            <div className="proj_def">
              <h2>{project.title}</h2>
              <p>{project.describ}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="video_container">
        <video
          src="/media/animationbg2.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="done_things">
          <div>
            <p>
              <span>
                <Counter end={0} />
              </span>
              <br /> Achievements
            </p>
          </div>
          <div>
            <p>
              <span>
                <Counter end={3} />
              </span>
              <br /> Projects
            </p>
          </div>
          <div>
            <p>
              <span>
                <Counter end={3} />
              </span>
              <br /> Mentored Students
            </p>
          </div>
          <div>
            <p>
              <span>
                <Counter end={500} />
              </span>
              <br /> Cups of coffee
            </p>
          </div>
        </div>

        <div className="more">
          <h1>
            More projects on <span>Github</span>
          </h1>
          <p>I love to solve business problems & uncover hidden data stories</p>
          <a href="https://github.com/evillentenxon" target="_blank">
            <button>GITHUB</button>
          </a>
        </div>
      </div>
    </Div>
  );
}

export default Work;

const Div = styled.div`
  h1 {
    position: relative;
    font-size: 50px;
    color: white;
    margin: 2rem 0;
    text-align: center;
  }

  h1::before {
    content: "Projects";
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

  // ************************************************   my projects
  .my_projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 10rem;

    .proj {
      width: 100%;
      max-width: 300px;
      flex: 1 1 300px;
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
      * {
        margin: 1rem 0;
      }
      a {
        display: block;
        max-width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        transition: scale 0.5s ease;

        &:hover {
          scale: 1.1;
        }
      }

      .proj_def {
        h2 {
          text-align: left;
          font-size: 1.2rem;
          transition: color 0.5s ease;
          &:hover {
            color: ${({ theme }) => theme.colors.green};
            cursor: pointer;
          }
        }
        p {
          text-align: left;
          margin: 0;
          padding: 0;
          font-weight: normal;
        }
      }
    }

    //before animation start
    .proj1 {
      width: 100%;
      max-width: 300px;
      flex: 1 1 300px;
  
      * {
        margin: 1rem 0;
      }
      a {
        display: block;
        max-width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        transition: scale 0.5s ease;

        &:hover {
          scale: 1.1;
        }
      }

      .proj_def {
        h2 {
          text-align: left;
          font-size: 1.2rem;
          transition: color 0.5s ease;
          &:hover {
            color: ${({ theme }) => theme.colors.green};
            cursor: pointer;
          }
        }
        p {
          text-align: left;
          margin: 0;
          padding: 0;
          font-weight: normal;
        }
      }
    }
  }

  // ************************************************   video css
  .video_container {
    position: relative;
    width: 100%;
    /* max-width: 800px; */
    margin: auto;

    video {
      width: 100%;
      display: block;
    }

    .done_things {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      gap: 20px;
      width: 100%;
      justify-content: center;

      & > div {
        background-color: rgba(200, 200, 200, 0.6); /* Semi-transparent */
        height: 150px;
        width: 200px;
        display: grid;
        place-items: center;
        text-align: center;
        border-radius: 10px;
      }
      p {
        color: #fff;
        margin: 0;
      }
      span {
        font-size: 2rem;
        font-weight: bold;
      }
    }

    .more {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;

      h1::before {
        content: "";
      }

      p {
        color: #fff;
      }

      button {
        background-color: ${({ theme }) => theme.colors.green};
        border: none;
        display: block;
        margin: 2rem auto;
        padding: 1.2rem 2.5rem;
        letter-spacing: 0.5cap;
      }
      a {
        text-decoration: none;
      }
    }
  }
`;
