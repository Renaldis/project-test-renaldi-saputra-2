import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  FiGrid,
  FiList,
  FiPlusSquare,
  FiUser,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import logo from "/assets/apple-icon.jpg";

type SProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SProps) => {
  const { logout, user } = useAuth();

  const activeLinkClass = "bg-blue-700 text-white";
  const inactiveLinkClass = "text-gray-300 hover:bg-blue-500 hover:text-white";

  const sidebarClasses = `
  bg-blue-600 text-white w-64 min-h-screen p-4 flex flex-col max-h-[100vh]
  fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
  md:relative md:translate-x-0
`;

  return (
    <aside className={sidebarClasses}>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold ml-2">Admin Panel</span>
        </div>

        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
          <FiX size={24} />
        </button>
      </div>

      <nav className="flex-grow">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${
                  isActive ? activeLinkClass : inactiveLinkClass
                } flex items-center p-3 my-1 rounded-lg transition-colors`
              }
            >
              <FiGrid className="mr-3" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/list-job-vacancies"
              className={({ isActive }) =>
                `${
                  isActive ? activeLinkClass : inactiveLinkClass
                } flex items-center p-3 my-1 rounded-lg transition-colors`
              }
            >
              <FiList className="mr-3" /> List Data Perusahaan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-job-vacancies"
              className={({ isActive }) =>
                `${
                  isActive ? activeLinkClass : inactiveLinkClass
                } flex items-center p-3 my-1 rounded-lg transition-colors`
              }
            >
              <FiPlusSquare className="mr-3" /> Tambah Data Baru
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `${
                  isActive ? activeLinkClass : inactiveLinkClass
                } flex items-center p-3 my-1 rounded-lg transition-colors`
              }
            >
              <FiUser className="mr-3" /> Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="flex items-center p-2 border-t border-blue-500">
          <img
            src={user?.profilePicture}
            alt="Admin"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 font-semibold">{user?.fullname}</span>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center p-3 my-1 rounded-lg text-red-300 hover:bg-red-600 hover:text-white transition-colors"
        >
          <FiLogOut className="mr-3" /> Keluar
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
