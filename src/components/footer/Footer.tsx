import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import googlePlayBtn from "/assets/gplay-icon.jpg";
import appStoreBtn from "/assets/apple-icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold">JobCareer</h2>
            <p className="mt-4 text-sm text-blue-200 leading-relaxed">
              JobCareer is a user-friendly, smart, and fast job searching
              website designed to deliver the best service in Indonesia.
            </p>
            <div className="mt-6 flex gap-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100"
                  >
                    <Icon />
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="mt-4 space-y-3 text-sm text-blue-200">
              {[
                "Find job",
                "Top companies",
                "Post a job",
                "Browse courses",
              ].map((item, i) => (
                <li key={i}>
                  <span className="hover:text-white cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-blue-200">
              {["Our team", "About us", "Blog"].map((item, i) => (
                <li key={i}>
                  <span className="hover:text-white cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-blue-200">
              {[
                "Support",
                "Contact Us",
                "renaldis142@gmail.com",
                "+62 89675759858",
              ].map((item, idx) => (
                <li key={idx}>
                  <span className="hover:text-white cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Download Our App</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <img
                src={googlePlayBtn}
                alt="Get it on Google Play"
                className="h-14"
              />

              <img
                src={appStoreBtn}
                alt="Download on the App Store"
                className="h-14"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500 py-6">
        <p className="text-center text-sm text-blue-200">
          © 2025 JobCareer – Job finding platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
