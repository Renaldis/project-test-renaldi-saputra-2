import { FiCheckSquare } from "react-icons/fi";
import SearchBar from "../SearchBar";
import {
  FaGooglePlay,
  FaApple,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const PlatformIcons = [
  { name: "google-play", icon: FaGooglePlay },
  { name: "apple", icon: FaApple },
  { name: "facebook", icon: FaFacebookF },
  { name: "linkedin", icon: FaLinkedinIn },
];

const HeroSection = () => {
  return (
    <section className="2xl:mt-20 px-6 dark:bg-slate-200 md:px-20 py-12 md:py-10 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-500 leading-tight">
          Find your <br />
          dream jobs <br /> with Job
          <span className="text-[#2cb0ff]">Career</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg 2xl:max-w-2xl mx-auto md:mx-0">
          JobCareer is a user-friendly, smart, and fast job searching mobile
          application designed to deliver the best service in Indonesia. It
          helps users find their desired jobs quickly and efficiently.
        </p>
        <SearchBar />
        <div className="mt-6 flex justify-center md:justify-start gap-x-4">
          <div className="flex gap-4">
            <div className="flex items-center cursor-pointer border border-slate-400/80 rounded-lg py-1 bg-white px-4 hover:shadow-xl">
              <img src={"/assets/gplay-icon.jpg"} alt="G" className="h-12" />
              <div className="flex flex-col">
                <span className="font-light text-xs">Get it on</span>
                <span className="text-sm font-medium">Google Play</span>
              </div>
            </div>
            <div className="flex items-center cursor-pointer border border-slate-400/80 rounded-lg py-1 px-4 hover:shadow-xl bg-white">
              <img src={"/assets/apple-icon.jpg"} alt="G" className="h-12" />
              <div className="flex flex-col">
                <span className="font-light text-xs">Download on</span>
                <span className="text-sm font-medium">App Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">We are trusted by:</p>
          <div className="flex gap-x-3 mt-2 justify-center md:justify-start">
            {PlatformIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <Icon
                  key={item.name || index}
                  className="w-8 h-8 p-2 text-white bg-blue-400 rounded cursor-pointer hover:shadow-md hover:bg-blue-500 "
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 md:flex justify-center items-center mt-10 md:mt-0 px-10 hidden md:px-0">
        <div className="relative z-10">
          <img
            src={"/assets/man-celebrate-rmv.png"}
            alt="Man celebrating"
            className="max-w-md w-full"
          />

          <div className="absolute top-12 -right-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-x-2 animate-bounce">
            <FiCheckSquare className="text-green-500" />
            <p className="text-sm font-semibold">Congratulations</p>
          </div>
          <div className="absolute top-1/3 -left-8 bg-white p-3 rounded-full shadow-lg text-2xl animate-pulse">
            😍
          </div>
          <div className="absolute bottom-12 -right-8 bg-white p-3 rounded-lg shadow-lg">
            <p className="text-blue-500 font-bold text-3xl">🏛️</p>
          </div>
          <div className="absolute bottom-20 -left-10 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex mt-1 -space-x-2 animate-pulse">
              <span className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></span>
              <span className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></span>
              <span className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
        <div className="absolute">
          <div className="relative rounded-full w-[10%] h-[50%] p-50 animate-spin">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2cb0ff] to-[#00ffe1] p-[5px]">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
