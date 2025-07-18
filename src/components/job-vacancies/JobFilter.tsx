import { useState } from "react";
import { FiSearch } from "react-icons/fi";

type FilterValues = {
  title: string;
  location: string;
  company: string;
};

type JobFilterProps = {
  onFilter: (filters: FilterValues) => void;
};

const JobFilter = ({ onFilter }: JobFilterProps) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ title, location, company });
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 mx-10">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
      >
        <div className="md:col-span-1">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ex: UI/UX Designer"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-1">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="ex: Jakarta"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-1">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="ex: Gojek"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-1">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-x-2"
          >
            <FiSearch />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobFilter;
