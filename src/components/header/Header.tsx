import { useNavigate } from "react-router-dom";
const navLink = [
  { label: "Home", path: "/" },
  { label: "Find A Job", path: "/find-a-job" },
  { label: "About", path: "/about-us" },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm py-3 px-6 md:px-20 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-500">
        Job<span className="text-[#2cb0ff]">Career</span>
      </div>
      <nav className="hidden md:flex items-center gap-x-8">
        {navLink.map((item) => (
          <span
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </span>
        ))}
      </nav>
      <div className="flex items-center gap-x-4">
        <button className="py-2 px-6 border text-white bg-[#2cb0ff] rounded-full hover:bg-blue-700 hover:shadow-md cursor-pointer shadow-sm">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
