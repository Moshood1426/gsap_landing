import React, { useEffect } from "react";
import "./style.scss";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    gsap.to("#header-text", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text"> Art Objects</h1>
    </section>
  );
};

export default Header;
