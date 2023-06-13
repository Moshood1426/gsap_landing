import React, { useState, useRef, useEffect } from "react";
import About from "../components/About";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import CustomCursor from "../CustomCursor";
import "../styles/home.scss";
import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {
  const [preloader, setPreLoader] = useState(true);
  const [timer, setTimer] = useState(3);

  useLocoScroll(!preloader);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreLoader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      console.log(timer);
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      console.log(timer);
      clear();
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />

      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <NavBar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
