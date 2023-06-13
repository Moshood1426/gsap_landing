import React from "react";
import SectionHeader from "../SectionHeader";
import "./style.scss";

const Footer = () => {
  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in" />
      <h1 className="location" id="location">
        Rio de Janeiro
      </h1>
    </section>
  );
};

export default Footer;
