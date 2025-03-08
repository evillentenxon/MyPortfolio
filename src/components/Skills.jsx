import React, { useEffect, useState } from "react";
import styled from "styled-components";

const skills = [
  { name: "SQL", percentage: 95 },
  { name: "PYTHON", percentage: 85 },
  { name: "Data Visualization", percentage: 90 },
  { name: "Statistical Analysis", percentage: 85 },
  { name: "Machine Learning", percentage: 80 },
];

const SkillsBar = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 500); // Delay animation start
  }, []);

  return (
    <Div>
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
width: 100%;
  .skills-container {
    /* width: 100%; */
    /* max-width: 600px; */
    margin: 0 auto;
  }

  .skill {
    margin-bottom: 20px; /* Increased spacing between skills */
  }

  .skill-label {
    display: block;
    font-size: 18px;
    color: white;
    margin-bottom: 8px; /* Increased margin for better spacing */
  }

  .skill-bar {
    width: 100%;
    height: 10px; /* Increased height to make the bar thicker */
    background-color: #5a5a5a;
    border-radius: 10px; /* Slightly rounded corners */
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
