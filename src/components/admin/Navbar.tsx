import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FiChevronDown, FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

type NProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NProps) => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-gray-600 md:hidden">
        <FiMenu size={24} />
      </button>

      <div className="flex-grow"></div>

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
    </header>
  );
};

export default Navbar;
