import React from "react";
import styled from "styled-components";
import {
  FaMapSigns,
  FaPhoneAlt,
  FaPaperPlane,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

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

      <div className="question">
        <p>Have a Question?</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfeUeG9xmF8jNpAWwFG7IjzUJOf8wGAFyNbbcNqPlCnIi7Mnw/viewform?usp=header"
          target="_blank"
        >
          <button className="qabtn">Click here</button>
        </a>
      </div>

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

      <footer>
        <p>Copyright ©2025 All rights reserved | Kiran Gautam |</p>
      </footer>
    </Div>
  );
}

export default Contact;

const Div = styled.div`
  @keyframes fade {
    from {
      opacity: 0;
      scale: 0.5;
    }
    to {
      opacity: 1;
      scale: 1;
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

  .contact_icons {
    margin-top: 5rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap; /* Stack icons in smaller screens */
    animation: fade linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;

    & > div {
      flex: 1;
      min-width: 150px; /* Allow the contact icons to wrap */

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

      .icon {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  .question {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    flex-direction: column;

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

  .social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: center;

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

  footer {
    margin: 10rem;
    p {
      text-align: center;
    }
  }

  /* Small Screen Adjustments */
  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }

    p {
      padding: 0 15%;
    }

    .contact_icons {
      margin-top: 3rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;

      & > div {
        min-width: 120px;
        p {
          color: #fff;
          font-weight: bold;
          margin: 1rem;
        }
      }

      .icon_container {
        width: 4.5rem;
        height: 4.5rem;
        background: ${({ theme }) => theme.colors.bg};
        border-radius: 50%;
        display: grid;
        place-items: center;

        .icon {
          font-size: 1.2rem;
        }
      }
    }

    .question {
      flex-direction: column;
      align-items: center;
      margin: 2rem;

      p {
        font-size: 1.8rem;
      }

      .qabtn {
        padding: 1rem 2rem;
      }
    }

    .social {
      gap: 1rem;
      align-items: center;

      .icon_container {
        width: 3.5rem;
        height: 3.5rem;

        .icon {
          font-size: 1.2rem;
        }
      }
    }

    footer {
      margin: 5rem 0;
      text-align: center;
    }
  }

  /* Extra Small Screen (Max Width 360px) */
  @media (max-width: 360px) {
    h1 {
      font-size: 30px;
    }

    .contact_icons {
      flex-direction: column;
      gap: 1rem;

      .icon_container {
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    .question {
      margin: 1.5rem;
      p {
        font-size: 1.5rem;
      }
      .qabtn {
        padding: 0.8rem 1.5rem;
        font-size: 0.8rem;
      }
    }

    footer {
      font-size: 0.8rem;
      margin: 3rem 0;
    }
  }
`;
