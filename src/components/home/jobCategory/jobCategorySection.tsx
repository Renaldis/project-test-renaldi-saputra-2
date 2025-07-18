import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import CategoryCard from "./CategoryCard";
import { categories } from "../../../constants/jobCategory";
import { useState } from "react";

const JobCategorySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoriesData = isExpanded ? categories : categories.slice(0, 4);

  const toggleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Browse jobs category
        </h2>
        <p className="mt-4 text-gray-500">
          Jobs category is based on the job sectors. An applicant can easily
          find their desire job by searching on category based
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoriesData.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            description={category.description}
            jobCount={category.jobCount}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-x-2 mx-auto hover:bg-blue-600 transition-colors cursor-pointer"
          onClick={toggleSeeMore}
        >
          <span>{isExpanded ? "See Less" : "See More"}</span>
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
    </section>
  );
};

export default JobCategorySection;
