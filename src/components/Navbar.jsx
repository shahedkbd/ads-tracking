import React from "react";
import logo from "../assets/ads tracking.png";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -100;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const links = (
    <>
      <li>
        <button
          className="scroll-smooth font-bold text-2xl btn btn-ghost bg-[#db383c] text-white hover:duration-300 m-1 rounded-full"
          onClick={() => handleNavigation("hero")}
        >
          Home
        </button>
      </li>
      <li>
        <button
          className="scroll-smooth font-bold text-2xl btn btn-ghost bg-[#db383c] text-white hover:duration-300 m-1 rounded-full"
          onClick={() => handleNavigation("about")}
        >
          About
        </button>
      </li>
      <li>
        <button
          className="scroll-smooth font-bold text-2xl btn btn-ghost bg-[#db383c] text-white hover:duration-300 m-1 rounded-full"
          onClick={() => handleNavigation("services")}
        >
          Services
        </button>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 rounded-b-2xl border-b-4 border-white bg-[#db383c]">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <a href="/">
            <img
              className="w-50 object-cover brightness-0 invert"
              src={logo}
              alt="Ads Tracking"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex flex-row">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn h-14 bg-[#db383c] rounded-full shadow-none border-0 text-2xl text-white">
            <Link target="_blank" to="https://www.facebook.com/adstrackingbd">
              <TiSocialFacebook />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/adstracking"
            >
              <TiSocialLinkedin />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/adstrackingbd">
              <TiSocialInstagram />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
