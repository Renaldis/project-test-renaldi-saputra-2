import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";

const navLink = [
  { label: "Home", path: "/" },
  { label: "Find A Job", path: "/find-a-job" },
  { label: "About", path: "/about-us" },
];

const Header = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogin = () => {
    navigate("/auth/login");
  };

  return (
    <header className="bg-white shadow-sm py-3 px-6 md:px-20 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-500">
        Job<span className="text-[#2cb0ff]">Career</span>
      </div>
      <nav className="hidden md:flex items-center gap-x-8">
        {navLink.map((item, idx) => (
          <span
            className={`hover:text-blue-500 cursor-pointer pb-2 ${
              location.pathname === item.path
                ? "border-b-2 border-blue-400 text-blue-500 font-semibold"
                : "text-gray-700"
            }`}
            onClick={() => navigate(item.path)}
            key={idx}
          >
            {item.label}
          </span>
        ))}
      </nav>

      {!user ? (
        <div className="flex items-center gap-x-4">
          <button
            className="py-2 px-6 border text-white bg-[#2cb0ff] rounded-full hover:bg-blue-700 hover:shadow-md cursor-pointer shadow-sm"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2"
          >
            <img
              src={user?.profilePicture || ""}
              alt="Profil"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="hidden sm:inline font-semibold text-gray-700">
              {user?.fullname}
            </span>
            <FiChevronDown className="text-gray-500" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                to="/dashboard/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                <FiUser className="mr-2" /> Profile
              </Link>
              <button
                onClick={logout}
                className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                <FiLogOut className="mr-2" /> Keluar
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
