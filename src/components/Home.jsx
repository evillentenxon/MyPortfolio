import React from "react";
import About from "./About";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
