import React from "react";
import styled from "styled-components";

function Resume() {
  return (
    <Div>
      <div className="education">
        <h1>Education</h1>
        <hr />
        <div className="wrap_container">
          <div className="edu3">
            <h1>2020-present</h1>
            <p className="title">Bachelor in Science . Computer Science and Information Technology(BSc.CSIT)</p>
            <p className="subtitle">Godawari College</p>
            <p className="description">Private college of Itahari</p>
          </div>
          <div className="edu2">
            <h1>2017-2020</h1>
            <p className="title">Higher Secondary School</p>
            <p className="subtitle">Vishwa Aadarsha College</p>
            <p className="description">Private college of Itahari</p>
          </div>
          <div className="edu1">
            <h1>2017</h1>
            <p className="title">Secondary level Complete</p>
            <p className="subtitle">Balmiki Sec. Boarding School</p>
            <p className="description">Boarding school located in biratnagar</p>
          </div>
        </div>
      </div>

      <button id="edu_btn">DOWNLOAD CV</button>
    </Div>
  );
}

export default Resume;

const Div = styled.div`
margin-top: 5rem;
  .education {
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

    .wrap_container {
      display: flex;
      flex-wrap: wrap;
      padding: 0 4rem;
      width: fit-content;
      gap: 1rem;
      margin: 0 auto;

      & > div {
        box-sizing: border-box;
        border: none;
        background-color: ${({theme})=>theme.colors.bg};
        max-width: 40vw;
        padding: 1.5rem;
        border-radius: 1rem;
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

  #edu_btn{
    border-radius: 2rem;
    border: none;
    width: 13rem;
    height: 4rem;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    background: ${({theme})=>theme.colors.green};
    margin: 5rem auto;
    display: block;
    color: #000;
  }
`;
