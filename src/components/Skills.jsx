import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const skills = [
  { name: "MONGO DB", percentage: 85 },
  { name: "REACT", percentage: 90 },
  { name: "EXPRESS", percentage: 85 },
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 90 },
  { name: "JAVASCRIPT", percentage: 85 },
];

const SkillsBar = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimated(entry.isIntersecting); // Set true when visible, false when out
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Div ref={ref}>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-label">
              {skill.name} {skill.percentage}%
            </span>
            <div className="skill-bar">
              <div
                className={`skill-progress ${animated ? "animate" : ""}`}
                style={{ width: `${animated ? skill.percentage : 0}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default SkillsBar;

const Div = styled.div`
  margin-top: 2rem;
  width: 100%;

  .skills-container {
    margin: 0 auto;
  }

  .skill {
    margin-bottom: 20px;
  }

  .skill-label {
    display: block;
    font-size: 1rem;
    color: white;
    font-weight: normal;
    margin-bottom: 8px;
  }

  .skill-bar {
    width: 100%;
    height: 10px;
    background-color: #5a5a5a;
    border-radius: 10px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.green};
    width: 0%;
    transition: width 1s ease-in-out;
  }

  .skill-progress.animate {
    transition: width 1s ease-in-out;
  }
`;
