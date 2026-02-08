import React from "react";
import AboutImg from "../assets/about-five-image.webp";
import { GoDash } from "react-icons/go";

const About = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={AboutImg}
            alt="About Agency"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
          {/* Subtitle (H3) */}
          <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold   mb-3">
            <GoDash className="text-blue-600 text-2xl" />
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
              Get to Know
            </span>
            <GoDash className="text-indigo-400 text-2xl" />
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold   text-gray-800 mb-6 leading-tight">
            Know <span className="text-[#db383c]">About</span> Us
          </h2>

          {/* Paragraph */}
          <p className="text-lg text-gray-600   leading-relaxed text-justify">
            At Ads Tracking, we turn clicks into customers. We’re a
            results-driven digital marketing agency focused on performance,
            strategy, and growth. Our team helps brands scale faster through
            data-backed advertising, conversion-optimized design, and smart
            digital strategies. Whether you’re launching a new eCommerce brand
            or boosting an existing business, we make sure every ad, post, and
            page drives measurable results. We don’t just run ads — we track,
            optimize, and grow your brand profitably.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
