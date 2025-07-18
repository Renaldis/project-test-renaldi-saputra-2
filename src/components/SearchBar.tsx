import { FiSearch, FiSliders } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="mt-8 flex items-center gap-5 max-w-md">
      <div className="group flex items-center bg-white p-2 rounded-full border border-slate-100   focus-within:border-blue-500 shadow-md flex-2">
        <FiSearch className="text-gray-400 mx-3 text-xl group-focus-within:text-blue-500 transition-colors duration-200" />
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full bg-transparent focus:outline-none text-gray-700"
        />
      </div>
      <button className="p-3 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 shadow-xl">
        <FiSliders className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
