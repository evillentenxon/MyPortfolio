import React, { useState } from "react";
import SvgLogo from "./SvgLogo";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { LuMedal } from "react-icons/lu";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <Div>
      <div className="container">
        <div className="left">
          <SvgLogo />
          <h1>Kiran Gautam</h1>
        </div>

        <div className="right">
          <nav>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/resume">
              <li>Resume</li>
            </NavLink>
            <NavLink to="/works">
              <li>Work</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </nav>
        </div>
        <GiHamburgerMenu
          className="menu-icon"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div className={`left-side-menu ${toggle ? "show" : ""}`}>
        <nav>
          <NavLink to="/">
            <li>
              <FiHome /> Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li>
              <FaRegUser /> About
            </li>
          </NavLink>
          <NavLink to="/skills">
            <li>
              <LuMedal /> Skills
            </li>
          </NavLink>
          <NavLink to="/works">
            <li>
              <MdOutlineWorkHistory /> Work
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <MdOutlineContactPhone /> Contact
            </li>
          </NavLink>
        </nav>
      </div>
    </Div>
  );
}

export default Header;

const Div = styled.div`
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0,0.5);
  backdrop-filter: blur(6.7px);
  box-shadow: 0px 4px 4px rgba(146, 161, 176, 0.15);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    width: 100vw;
  }

  .left {
    display: flex;
    align-items: center;
    h1 {
      font-size: 2.3rem;
    }
  }

  .right nav {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    font-size: 1.5rem;

    a {
      text-decoration: none;
    }

    li {
      position: relative;
      overflow: hidden;
      padding: 10px;
      color: #fff;

      &:hover {
        cursor: pointer;
      }

      &::after {
        content: "";
        display: block;
        height: 4px;
        width: 100%;
        background-color: #2bd576;
        transform: scale(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }
      &:hover::after {
        transform: scale(1);
      }
    }
  }

  .menu-icon,
  .left-side-menu {
    display: none;
  }

  /* ========  tabs query =================== */
  @media (min-width: 800px) and (max-width: 1000px) {
    .container {
      padding: 0;
    }

    .left h1 {
      font-size: 1.5rem;
    }
    .right nav {
      gap: 0.5rem;
    }
  }

  /* ========= mobile query ====================== */
  @media (max-width: 800px) {
    display: block;
    /* box-shadow: none; */
    box-shadow: 0px 4px 4px rgba(146, 161, 176, 0.15);

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* box-shadow: 0px 4px 4px rgba(146, 161, 176, 0.15); */
    }
    .right {
      display: none;
    }

    .menu-icon,
    .left-side-menu {
      display: block;
    }

    .menu-icon {
      font-size: 1.5rem;
    }

    .left-side-menu {
      position: fixed;
      /* top: 0; */
      left: -100%; // Start off-screen
      width: 100%; // Adjust width as needed
      height: 100vh;
      background: rgba(245, 245, 245, 0.2); // Adjust background color
      transition: left 0.4s ease-in-out;
      z-index: 999;
      nav {
        list-style-type: none;

        a {
          color: #fff;
          text-decoration: none;
        }

        li {
          padding: 1rem 4rem;
          font-size: 1.5rem;
          margin: 1rem;

          &:hover {
            border: 2px solid #fff;
            border-radius: 1rem;
            cursor: pointer;
          }
        }
      }
    }

    .show {
      left: 0;
    }
  }

  /* ================extra small for mobile================= */
  @media (max-width: 360px) {
    .container {
      padding: 0 1rem;
    }

    .left {
      gap: -20px;
    }

    .left h1 {
      font-size: 1.5rem;
    }

    .menu-icon {
      font-size: 1.5rem;
    }
  }
`;
