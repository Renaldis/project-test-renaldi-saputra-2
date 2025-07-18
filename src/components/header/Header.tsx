import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { FiChevronDown, FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Find A Job", path: "/find-a-job" },
  { label: "About", path: "/about-us" },
];

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-20 flex justify-between items-center fixed w-full z-50">
      <NavLink to="/" className="text-2xl font-bold text-blue-500">
        Job<span className="text-[#2cb0ff]">Career</span>
      </NavLink>

      <nav className="hidden md:flex items-center gap-x-8">
        {navLinks.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `hover:text-blue-500 cursor-pointer pb-1 ${
                isActive
                  ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                  : "text-gray-700"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-x-4">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center space-x-2"
            >
              <img
                src={user.profilePicture || ""}
                alt="Profil"
                className="w-10 h-10 rounded-full object-cover"
              />
              <FiChevronDown className="text-gray-500" />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <NavLink
                  to="/dashboard/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  <FiUser className="mr-2" /> Profile
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  <MdOutlineDashboard className="mr-2" /> Dashboard
                </NavLink>
                <button
                  onClick={logout}
                  className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <FiLogOut className="mr-2" /> Keluar
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="py-2 px-6 border text-white bg-[#2cb0ff] rounded-full hover:bg-blue-700 hover:shadow-md cursor-pointer shadow-sm"
            onClick={() => navigate("/auth/login")}
          >
            Sign In
          </button>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FiMenu size={28} className="text-gray-600" />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 mr-4">
            <ul className="flex flex-col gap-y-2">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </li>
              ))}
              <hr className="my-2" />
              {user ? (
                <>
                  <li
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavClick("/dashboard")}
                  >
                    Dashboard
                  </li>
                  <li
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavClick("/dashboard/profile")}
                  >
                    Profile
                  </li>
                  <li
                    className="px-4 py-2 text-red-600 hover:bg-gray-100"
                    onClick={logout}
                  >
                    Keluar
                  </li>
                </>
              ) : (
                <li className="px-4">
                  <button
                    className="w-full py-2 px-6 text-white bg-[#2cb0ff] rounded-full"
                    onClick={() => handleNavClick("/auth/login")}
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
