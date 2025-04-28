import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaMapSigns } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <Div>
      <h1>Contact Me</h1>
      <p>Below are the details to reach out to me!</p>

      <div className="contact_icons">
        <div>
          <center>
            <div className="icon_container">
              <FaMapSigns className="icon" />
            </div>
            <p>ADDRESS</p>
            <p className="last">Morang,Nepal</p>
          </center>
        </div>

        <div>
          <center>
            <div className="icon_container">
              <FaPhoneAlt className="icon" />
            </div>
            <p>CONTACT NUMBER</p>
            <p className="last">+977 9817313776</p>
          </center>
        </div>

        <div>
          <center>
            <div className="icon_container">
              <FaPaperPlane className="icon" />
            </div>
            <p>EMAIL ADDRESS</p>
            <p className="last">romangautam71399@gmail.com</p>
          </center>
        </div>
      </div>

      {/* ********************************************************  have a question */}
      <div className="question">
        <p>Have a Question ?</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfeUeG9xmF8jNpAWwFG7IjzUJOf8wGAFyNbbcNqPlCnIi7Mnw/viewform?usp=header"
          target="_blank"
        >
          <button className="qabtn">Click here</button>
        </a>
      </div>
      {/* ********************************************************  social media */}
      <div className="social">
        <p>Find me on</p>
        <div className="icon_container">
          <a
            href="https://www.linkedin.com/in/roman-gautam-19aaa8274/"
            target="_blank"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </div>
        <div className="icon_container">
          <a href="https://www.facebook.com/keyraw.an" target="_blank">
            <FaFacebookF className="icon" />
          </a>
        </div>
        <div className="icon_container">
          <a href="https://www.instagram.com/romangautam5/">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>

      {/* ********************************************************  footer */}
      <footer>
        <p>Copyright ©2025 All rights reserved | Kiran Gautam |</p>
      </footer>
    </Div>
  );
}

export default Contact;

const Div = styled.div`
  @keyframes move-left {
    from {
      opacity: 0;
      transform: translateX(300px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  h1 {
    position: relative;
    font-size: 50px;
    color: white;
    margin: 2rem 0;
    text-align: center;
  }

  h1::before {
    content: "Contact";
    position: absolute;
    opacity: 0.1;
    font-size: 5rem;
    font-weight: 700;
    left: 50%;
    transform: translateX(-50%);
  }

  p {
    padding: 0 20%;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.Pcolor};
  }

  //********************************************  contact icons
  .contact_icons {
    margin-top: 5rem;
    display: flex;
    gap: 2rem;
    justify-content: center;

    & > div {
      animation: move-left linear;
      animation-timeline: view();
      animation-range: entry 0% cover 40%;
      flex: 1;

      p {
        color: #fff;
        font-weight: bold;
        margin: 1rem;
      }
      .last {
        color: ${({ theme }) => theme.colors.Pcolor};
      }
    }

    .icon_container {
      width: 5rem;
      height: 5rem;
      background: ${({ theme }) => theme.colors.bg};
      border-radius: 50%;
      display: grid;
      place-items: center;
      /* box-sizing: content-box; */

      .icon {
        display: grid;
        place-items: center;
        text-align: center;
        color: ${({ theme }) => theme.colors.green};
        font-size: 1.5rem;
      }
    }
  }

  //********************************************  have questions
  .question {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;

    p {
      font-size: 2rem;
      color: #fff;
      padding: 0;
      margin: 2rem 1rem;
      font-weight: bold;
    }

    .qabtn {
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.green};
      border: none;
      padding: 1.2rem 2.5rem;
      letter-spacing: 0.5cap;
      border-radius: 2rem;
    }
  }
  //********************************************  find me on
  .social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    p {
      padding: 0;
      display: block;
      margin: auto 0;
    }

    .icon_container {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: ${({ theme }) => theme.colors.bg};

      .icon {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  //********************************************  footer
  footer {
    margin: 10rem;
    p {
      /* color: #fff; */
    }
  }

  /* ================extra small for mobile================= */
  @media (max-width: 360px) {
    h1 {
      position: relative;
      font-size: 40px; /* Reduced size for smaller screens */
      color: white;
      margin: 1.5rem 0;
      text-align: center;
    }

    h1::before {
      content: "Contact";
      position: absolute;
      opacity: 0.1;
      font-size: 4rem;
      font-weight: 700;
      left: 50%;
      transform: translateX(-50%);
    }

    p {
      padding: 0 10%; /* Reduced padding */
      font-weight: normal;
      text-align: center;
      color: ${({ theme }) => theme.colors.Pcolor};
    }

    //********************************************  contact icons
    .contact_icons {
      margin-top: 3rem;
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap; /* Wrap items on smaller screens */

      animation: in 1s ease 1;

      @keyframes in {
        from {
          transform: translateY(3rem);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      & > div {
        flex: 1;
        min-width: 120px; /* Ensures a nice layout on small screens */

        p {
          color: #fff;
          font-weight: bold;
          margin: 1rem;
        }
        .last {
          color: ${({ theme }) => theme.colors.Pcolor};
        }
      }

      .icon_container {
        width: 4rem; /* Smaller size for small screens */
        height: 4rem;
        background: ${({ theme }) => theme.colors.bg};
        border-radius: 50%;
        display: grid;
        place-items: center;

        .icon {
          font-size: 1.2rem; /* Reduce icon size */
        }
      }
    }

    //********************************************  have questions
    .question {
      display: flex;
      flex-direction: column; /* Stack items on smaller screens */
      justify-content: center;
      align-items: center;
      margin: 2rem;

      p {
        font-size: 1.5rem; /* Smaller font size */
        color: #fff;
        padding: 0;
        margin: 1rem 0;
        font-weight: bold;
      }

      .qabtn {
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.colors.green};
        border: none;
        padding: 1rem 2rem; /* Adjusted padding */
        font-size: 0.9rem;
        border-radius: 1.5rem;
      }
    }

    //********************************************  find me on
    .social {
      display: flex;
      /* flex-direction: column; Stack social icons */
      align-items: center;
      gap: 1rem;

      p {
        margin-bottom: 0.5rem;
      }

      .icon_container {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        place-items: center;
        background: ${({ theme }) => theme.colors.bg};

        .icon {
          font-size: 1.2rem;
        }
      }
    }

    //********************************************  footer
    footer {
      margin: 5rem 0; /* Reduced margin */
      text-align: center;
      font-size: 0.9rem;
    }

    /* Media Query for Small Screens (max-width: 360px) */
    @media (max-width: 360px) {
      h1 {
        font-size: 30px;
      }

      h1::before {
        font-size: 3rem;
      }

      p {
        padding: 0 5%;
      }

      .contact_icons {
        flex-direction: column; /* Stack contact details */
        align-items: center;
        gap: 1rem;
      }

      .icon_container {
        width: 3.5rem;
        height: 3.5rem;
      }

      .question p {
        font-size: 1.2rem;
      }

      .qabtn {
        padding: 0.8rem 1.5rem;
        font-size: 0.8rem;
      }

      .social {
        gap: 0.8rem;
      }

      footer {
        font-size: 0.8rem;
        margin: 3rem 0;
      }
    }
  }
`;
