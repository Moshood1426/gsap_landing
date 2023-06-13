import React from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";

const About = () => {
  return (
    <section className="about-section" data-scroll-section>
      <SectionHeader title={"about"} />

      <p id="headline">
        Lorem Eius rerum voluptas labore a ea dolores qui commodi. Unde placeat
        doloremque consequuntur numquam nobis esse? Hic dolorum maxime alias.
        Ipsum nobis veniam laborum facere nihil, minus quibusdam magnam iure
        eveniet delectus et tenetur cum, voluptas inventore, laudantium tempora.
        Unde qui rem quae, id deleniti fugiat!
      </p>
    </section>
  );
};

export default About;
