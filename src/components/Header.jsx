import React, { useState, useEffect } from "react";
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
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (item) => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(
              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            );
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold to detect when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <Div>
      <div className="container">
        <div className="left">
          <SvgLogo />
          <h1>Kiran Gautam</h1>
        </div>

        <div className="right">
          <nav>
            <li
              className={activeItem === "Home" ? "active" : ""}
              onClick={() => handleClick("Home")}
            >
              Home
            </li>
            <li
              className={activeItem === "About" ? "active" : ""}
              onClick={() => handleClick("About")}
            >
              About
            </li>
            <li
              className={activeItem === "Resume" ? "active" : ""}
              onClick={() => handleClick("Resume")}
            >
              Resume
            </li>
            <li
              className={activeItem === "Work" ? "active" : ""}
              onClick={() => handleClick("Work")}
            >
              Work
            </li>
            <li
              className={activeItem === "Contact" ? "active" : ""}
              onClick={() => handleClick("Contact")}
            >
              Contact
            </li>
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
            <li onClick={() => setToggle(false)}>
              <FiHome /> Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li onClick={() => setToggle(false)}>
              <FaRegUser /> About
            </li>
          </NavLink>
          <NavLink to="/resume">
            <li onClick={() => setToggle(false)}>
              <LuMedal /> Resume
            </li>
          </NavLink>
          <NavLink to="/works">
            <li onClick={() => setToggle(false)}>
              <MdOutlineWorkHistory /> Work
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li onClick={() => setToggle(false)}>
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
  background: rgba(0, 0, 0, 0.5);
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

    // ********************************************************  to set the nav active
    .active {
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
        transform: scale(1);
        transform-origin: left;
        transition: transform 0.3s ease;
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
      left: -100%; 
      width: 100%;
      height: 100vh;
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
      position: static;
      left: 0;
      background-color: rgba(0, 0, 0, 0.1); 
      backdrop-filter: blur(10px); 
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
