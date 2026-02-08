import React from "react";
import { GoDash } from "react-icons/go";
import Ecommerce from "../assets/services/e-Commerce-Solution.webp";
import Performance from "../assets/services/Performance-Marketing.webp";
import seo from "../assets/services/SEO.webp";
import LandingPage from "../assets/services/Landing-Page-Design.webp";
import SMM from "../assets/services/Social-Media-Management.webp";
import Shopify from "../assets/services/Shopify-Store-Design.webp";

const Services = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h3 className="flex items-center text-2xl bg-linear-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text  ">
          <GoDash className=" text-blue-600" />
          Our Service
          <GoDash className="text-indigo-400" />
        </h3>
        <h2 className="text-5xl capitalize max-sm:text-3xl text-center font-bold  ">
          What We are Offering to
          <br />
          <span className="text-[#db383c]">Our Client</span>
        </h2>
      </div>
      <div className="py-5">
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-6 gap-y-20 py-10">
          <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl  shadow-red-200">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-blue-500 to-blue-600 flex justify-center items-center">
              <img src={Performance} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased  ">
                Performance Marketing
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased  ">
                We create and manage high-converting ad campaigns that bring
                real results. From audience targeting to conversion tracking —
                we optimize every step to maximize your ROI across Meta, Google,
                and TikTok.
              </p>
            </div>
          </div>
          <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl  shadow-red-200">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-blue-500 to-blue-600 flex justify-center items-center">
              <img src={SMM} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased  ">
                Social Media Management
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased  ">
                Build a powerful brand presence online. We handle your content
                strategy, posting schedule, and audience engagement — so your
                social media not only looks good but performs great.
              </p>
            </div>
          </div>
          <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl  shadow-red-200">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-blue-500 to-blue-600 flex justify-center items-center">
              <img src={seo} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased  ">
                SEO (Search Engine Optimization)
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased  ">
                We help your business rank higher on Google with proven SEO
                strategies — from keyword research and on-page optimization to
                backlink building — driving organic traffic that converts.
              </p>
            </div>
          </div>
          <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl  shadow-red-200">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-blue-500 to-blue-600 flex justify-center items-center">
              <img src={LandingPage} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased  ">
                Landing Page Design
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased  ">
                We design conversion-focused landing pages that turn visitors
                into customers. Clean design, clear messaging, and fast
                performance — all crafted to increase sales and ad performance.
              </p>
            </div>
          </div>
          <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl shadow-red-200">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-blue-500 to-blue-600 flex justify-center items-center">
              <img src={Ecommerce} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased  ">
                E-commerce Solutions
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased  ">
                We build and optimize eCommerce websites and stores that are
                ready to sell. From product setup to tracking integrations — we
                make your online shop run smoothly and scale effortlessly.
              </p>
            </div>
          </div>
          <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl shadow-red-200">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-blue-500 to-blue-600 flex justify-center items-center">
              <img src={Shopify} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased  ">
                Shopify Store Design
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased  ">
                We build beautiful, fast, and conversion-focused Shopify stores
                tailored to your brand. From layout design and product setup to
                app integration and checkout optimization — we create a seamless
                shopping experience that boosts sales and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
