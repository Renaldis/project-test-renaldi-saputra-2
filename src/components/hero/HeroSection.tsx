import { FiCheckSquare } from "react-icons/fi";
import SearchBar from "../SearchBar";

const HeroSection = () => {
  return (
    <section className="px-6 md:px-20 py-12 md:py-10 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-500 leading-tight">
          Find your <br />
          dream jobs <br />
          with Job<span className="text-[#2cb0ff]">Career</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg mx-auto md:mx-0">
          JobCareer is a user-friendly, smart, and fast job searching mobile
          application designed to deliver the best service in Indonesia. It
          helps users find their desired jobs quickly and efficiently.
        </p>
        <SearchBar />
        <div className="mt-6 flex justify-center md:justify-start gap-x-4">
          <a href="#">
            <img src={""} alt="Google Play" className="h-12" />
          </a>
          <a href="#">
            <img src={""} alt="App Store" className="h-12" />
          </a>
        </div>
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">We are trusted by:</p>
          <div className="flex gap-x-3 mt-2 justify-center md:justify-start">
            <div className="w-8 h-8 bg-blue-200 rounded"></div>
            <div className="w-8 h-8 bg-blue-200 rounded"></div>
            <div className="w-8 h-8 bg-blue-200 rounded"></div>
            <div className="w-8 h-8 bg-blue-200 rounded"></div>
            <div className="w-8 h-8 bg-blue-200 rounded"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="relative z-50">
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
            <p className="text-sm">Best Talents</p>
            <div className="flex mt-1 -space-x-2">
              <span className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></span>
              <span className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></span>
              <span className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
        <div className="rounded-full w-[10%] h-[50%] p-50 border-[10px] opacity-50 border-[#2cb0ff] absolute" />
      </div>
    </section>
  );
};

export default HeroSection;
