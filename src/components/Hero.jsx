// import bg1 from "../assets/Black White Gray Edgy Grungy Halloween Virtual Background.webp";
// import bg3 from "../assets/bg2.webp"
import bg3 from "../assets/bg1.webp"
const Hero = () => {
  return (
    <div
      className="
            relative w-full h-[80vh]
            py-20  -top-3 
            bg-cover bg-no-repeat overflow-hidden
          "
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundPosition: "center",
        
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative max-sm:px-3 flex z-10 max-w-7xl mx-auto text-center  h-full text-white font-bold">
        <div className="flex flex-col justify-center space-y-13">
          <h1 className="font-extrabold text-8xl max-sm:text-5xl">
            Ads Tracking <br />{" "}
            <div className="flex items-center justify-center text-center max-sm:pt-2 gap-3">
              {" "}
              <span className="pl-0 p-3 text-center max-sm:pl-0 max-sm:p-2 pr-6 max-sm:pr-4 border-gray-500 border-2 rounded-full w-fit flex items-center">
                <span className="text-6xl text-center max-sm:text-4xl bg-[#b62124] text-white p-5 px-8 max-sm:p-3 rounded-full">
                  Digital
                </span>
              </span>
              Agency
            </div>
          </h1>
          <p className="text-xl max-sm:text-[16px] text-white  ">
            We help brands grow through performance marketing, smart tracking,
            and conversion-focused design. From Meta & Google Ads to SEO, SMM,
            and Landing Pages — everything built to drive results, not guesses.
          </p>
          <div>
            <button className="btn px-10 h-14 bg-[#db383c] rounded-full shadow-none border-0 text-2xl text-white">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=8801521527446"
              >
                Book a Call
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
