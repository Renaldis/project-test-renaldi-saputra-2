import React from "react";

type CProps = {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  jobCount: string;
};

const CategoryCard = ({ icon, title, description, jobCount }: CProps) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
      <div className="mx-auto w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
        {React.cloneElement(icon, { className: "text-blue-500 text-4xl" })}
      </div>
      <h3 className="mt-4 font-bold text-xl text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 h-20">{description}</p>
      <a
        href="#"
        className="  inline-block font-semibold text-blue-500 hover:underline"
      >
        {jobCount}
      </a>
    </div>
  );
};

export default CategoryCard;
