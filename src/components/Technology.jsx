import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import {
  FaGoogle,
  FaMeta,
  FaPinterest,
  FaReddit,
  FaShopify,
  FaWordpress,
  FaYoutube,
} from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { RiNextjsFill } from "react-icons/ri";

const Technology = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-1 flex flex-col items-center">
        <h3 className="flex items-center text-2xl bg-linear-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text  ">
          <GoDash className=" text-blue-600" />
          Our Creative Partners
          <GoDash className="text-indigo-400" />
        </h3>
        <h2 className="text-5xl capitalize max-sm:text-4xl text-center font-bold  ">
          Our <span className="text-[#db383c]">Partners</span>
        </h2>
      </div>
      <Marquee>
      <div className="flex  gap-6 lace-items-center py-5">
        <div className="relative ml-6 w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">Shopify</h2>
            <h2 className="text-6xl">
              <FaShopify />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-full h-full rounded-full bg-red-500 opacity-100 blur-md"></div>
        </div>
        <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">Wordpress</h2>
            <h2 className="text-6xl">
              <FaWordpress />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-md  "></div>
        </div>
        <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">Meta</h2>
            <h2 className="text-6xl">
              <FaMeta />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-md  "></div>
        </div>
        <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">Google</h2>
            <h2 className="text-6xl">
              <FaGoogle />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-md  "></div>
        </div>
        <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">Youtube</h2>
            <h2 className="text-6xl">
              <FaYoutube />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-md  "></div>
        </div>
        <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">Pinterest</h2>
            <h2 className="text-6xl">
              <FaPinterest />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-md  "></div>
        </div>
        <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">ReactJS</h2>
            <h2 className="text-6xl">
              <FaReact />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-md  "></div>
        </div>
        <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center group">
          <div className="absolute top-[5px] left-[5px] w-[150px] h-47.5 md:w-[190px] md:h-60 z-2 bg-white/95 backdrop-blur-xl rounded-[10px] overflow-hidden outline-2 outline-white flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-3xl  ">NextJS</h2>
            <h2 className="text-6xl">
              <RiNextjsFill />
            </h2>
          </div>
          <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-md  "></div>
        </div>
      </div>
      </Marquee>
    </div>
  );
};

export default Technology;
