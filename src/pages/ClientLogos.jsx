import React from "react";
// Swiper React components এবং modules ইমপোর্ট
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

// Swiper এর স্টাইল ফাইলগুলো
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import clientImg1 from "../assets/happy_client/happy_client1.webp";
import clientImg2 from "../assets/happy_client/happy_client2.webp";
import clientImg3 from "../assets/happy_client/happy_client3.webp";
import clientImg4 from "../assets/happy_client/happy_client4.webp";
import clientImg5 from "../assets/happy_client/happy_client5.webp";
import clientImg6 from "../assets/happy_client/happy_client6.webp";
import clientImg7 from "../assets/happy_client/happy_client7.webp";
import clientImg8 from "../assets/happy_client/happy_client8.webp";
import clientImg9 from "../assets/happy_client/happy_client9.webp";
import clientImg10 from "../assets/happy_client/happy_client10.webp";
import clientImg11 from "../assets/happy_client/happy_client11.webp";
import clientImg12 from "../assets/happy_client/happy_client12.webp";
import clientImg13 from "../assets/happy_client/happy_client13.webp";
import { GoDash } from "react-icons/go";

// আপনার লোগো ডাটা (৭টি লোগো)

const clientLogos = [
  { id: 1, name: "Brand 1", logo: clientImg1 },
  { id: 5, name: "Brand 5", logo: clientImg5 },
  { id: 6, name: "Brand 6", logo: clientImg6 },
  { id: 7, name: "Brand 7", logo: clientImg7 },
  { id: 8, name: "Brand 8", logo: clientImg8 },
  { id: 9, name: "Brand 9", logo: clientImg9 },
  { id: 13, name: "Brand 13", logo: clientImg13 },
  { id: 2, name: "Brand 2", logo: clientImg2 },
  { id: 3, name: "Brand 3", logo: clientImg3 },
  { id: 4, name: "Brand 4", logo: clientImg4 },
  { id: 10, name: "Brand 10", logo: clientImg10 },
  { id: 11, name: "Brand 11", logo: clientImg11 },
  { id: 12, name: "Brand 12", logo: clientImg12 },
];

const ClientLogos = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto  overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center flex flex-col items-center">
        <h3 className="flex items-center text-2xl bg-linear-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text  ">
          <GoDash className=" text-blue-600" />
          Trusted By
          <GoDash className="text-indigo-400" />
        </h3>
        <h2 className="text-3xl   md:text-5xl font-bold text-gray-800">
          Our Happy <span className="text-[#E11D48]">Clients</span>
        </h2>
      </div>

      <div className="flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          loopedSlides={clientLogos.length}
          // Responsive Breakpoints
          breakpoints={{
            320: {
              slidesPerView: 3, // মোবাইলে ৩টা দেখাবে
            },
            1024: {
              slidesPerView: 4, // ল্যাপটপে ৫টা দেখাবে
            },
          }}
          coverflowEffect={{
            rotate: 30, // কার্ডগুলো ৩০ ডিগ্রি এঙ্গেলে বাঁকানো থাকবে
            stretch: 0,
            depth: 100, // গভীরতা (3D ভাব)
            modifier: 1,
            slideShadows: false, // শ্যাডো বন্ধ রাখা হয়েছে ক্লিনি লুকের জন্য
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="max-w-7xl mx-auto py-10"
        >
          {clientLogos.map((client) => (
            <SwiperSlide key={client.id} className="w-full h-40 bg-transparent">
              {({ isActive }) => (
                <div
                  className={`
                    card bg-white  h-full flex items-center justify-center p-6 rounded-xl transition-all duration-500
                    ${
                      isActive
                        ? "scale-110 opacity-100 grayscale-0 ring-2 ring-[#E11D48]" // মাঝখানের কার্ড
                        : "opacity-40 grayscale" // পাশের কার্ড
                    }
                  `}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-40 w-50 object-contain"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogos;
