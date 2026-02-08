import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "./Services";
import About from "./About";
// import MarqueeServices from "../components/MarqueeServices";
import Technology from "../components/Technology";
import ClientLogos from "./ClientLogos";
import Aos from "aos";
import { useLocation } from "react-router";
// import team1 from "../assets/team/Team Member.png";

const Home = () => {
  const location = useLocation(); 

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        const yOffset = -100; 
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);
  useEffect(() => {
    Aos.init({
      duration: 500, 
    });
  }, []);
  return (
    <div>
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="clientlogos">
        <ClientLogos></ClientLogos>
      </div>
      <div id="about">
        
        <About></About>
      </div>
      <div id="services" data-aos="fade-up">
        <Services></Services>
        <div data-aos="zoom-in">
          <Technology></Technology>
        </div>
      </div>
      {/* <div className="bg-black  mt-10 items-center w-full gap-10">
        <div className="text-center py-5">
          <h3 className="text-5xl font-bold uppercase text-white">Teams</h3>
        </div>
        <div className="max-w-7xl mx-auto pb-5 flex gap-5">
          <div>
            <img src={team1} alt="" />
          </div>
          <div>
            <img src={team1} alt="" />
          </div>
          <div>
            <img src={team1} alt="" />
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default Home;
