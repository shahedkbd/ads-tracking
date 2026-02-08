import React from "react";
import logo from "../assets/ads tracking.png";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // ১. আইকন ইমপোর্ট
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

const Footer = () => {
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
      <nav className="space-y-2 leading-snug">
        <li className="list-none">
          <a
            className="link link-hover"
            onClick={() => handleNavigation("hero")}
          >
            Home
          </a>
        </li>

        <li className="list-none">
          <a
            className="link link-hover"
            onClick={() => handleNavigation("about")}
          >
            About
          </a>
        </li>

        <li className="list-none">
          <a
            className="link link-hover"
            onClick={() => handleNavigation("services")}
          >
            Services
          </a>
        </li>
      </nav>
    </>
  );
  return (
    <div className="bg-black text-white mt-10">
      <footer className="grid justify-items-center md:justify-items-start max-w-7xl grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2  gap-10 w-full mx-auto py-10 px-5">
        <aside className="w-full space-y-5 flex flex-col items-center md:items-start">
          <img
            className="w-60 brightness-0 invert"
            src={logo}
            alt="Ads Tracking BD Logo"
          />
          <div className="flex space-x-3 text-[#E11D48] text-3xl">
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
          </div>
        </aside>

        <nav className="w-full flex flex-col items-center md:items-start">
          <h6 className="footer-title text-[#E11D48] opacity-100 uppercase tracking-widest mb-2">
            Menu
          </h6>
          <div className="text-lg flex flex-col items-center md:items-start gap-2">
            {links}
          </div>
        </nav>

        <nav className="w-full flex flex-col items-center md:items-start">
          <h6 className="footer-title text-[#E11D48] opacity-100 uppercase tracking-widest mb-2">
            Policies
          </h6>

          <div className="text-lg flex flex-col items-center md:items-start gap-2">
            <a className="link link-hover" href="/terms-conditions">
              Terms & Conditions
            </a>
            <a className="link link-hover" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="link link-hover" href="/cookie-policy">
              Cookie Policy
            </a>
          </div>
        </nav>

        <nav className="w-full flex flex-col items-center md:items-start">
          <h6 className="footer-title text-[#E11D48] opacity-100 uppercase tracking-widest mb-2">
            Contact Us
          </h6>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-start gap-2 max-w-xs text-center md:text-left">
              <FaMapMarkerAlt className="text-[#E11D48] text-xl mt-1 shrink-0" />
              <span className="text-lg leading-snug">
                Office no.10 (1st floor), Diganta Khaja Shopping Center,
                Bahaddarhat, 4208
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#E11D48] text-lg shrink-0" />
              <span className="text-lg">+8801521527446</span>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="text-[#E11D48] text-lg shrink-0" />
              <span className="text-lg">support@adstrackingbd.com</span>
            </div>
          </div>
        </nav>
      </footer>

      <footer className="footer footer-center text-white border-base-300 border-t px-10 py-4">
        <aside>
          <p className="  font-medium text-sm md:text-base ">
            Copyright © {new Date().getFullYear()} - All right reserved by Ads
            Tracking
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
