import React from "react";
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
        <button>Click here</button>
      </div>
      {/* ********************************************************  social media */}
      <div className="social">
        <p>Find me on</p>
        <div className="icon_container">
          <FaLinkedinIn className="icon" />
        </div>
        <div className="icon_container">
          <FaFacebookF className="icon" />
        </div>
        <div className="icon_container">
          <FaInstagram className="icon" />
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
      /* width: max-content; */
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

    button {
      background: ${({ theme }) => theme.colors.green};
      border: none;
      color: #000;
      text-transform: uppercase;
      height: fit-content;
      letter-spacing: 0.5cap;
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
  footer{
    margin: 10rem;
    p{
      /* color: #fff; */
    }
  }
`;
