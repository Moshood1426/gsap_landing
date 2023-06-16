import React, { useEffect } from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../utils/Split3.min";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const split = new SplitText("#headline", { type: "lines" });

    gsap.fromTo(
      split.lines,
      { opacity: 0 },
      {
        duration: 1,
        y: -30,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#headline",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
        // onComplete: () => split.revert(),
      }
    );
  }, []);

  return (
    <section className="about-section" data-scroll-section>
      <SectionHeader title={"about"} />

      <p id="headline" data-scroll>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
};

export default About;
