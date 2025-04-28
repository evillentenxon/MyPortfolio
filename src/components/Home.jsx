import React from "react";
import About from "./About";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
