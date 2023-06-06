import React from "react";
import About from "../components/About";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import CustomCursor from "../CustomCursor";

const Home = () => {
  return (
    <>
      <CustomCursor />
      
      <div className="main-container" id="main-container">
        <About />
        <Featured />
        <Footer />
        <Gallery />
        <Header />
        <NavBar />
        <SectionHeader />
      </div>
    </>
  );
};

export default Home;
