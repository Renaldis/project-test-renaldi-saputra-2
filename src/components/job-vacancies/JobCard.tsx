import { FaBookmark } from "react-icons/fa";
import type { TJob } from "../../types/job";
import { FiBookmark, FiClock } from "react-icons/fi";

interface JobCardProps extends TJob {
  onToggleBookmark: (id: number) => void;
}

const JobCard = (props: JobCardProps) => {
  const {
    id,
    logo,
    title,
    company,
    experience,
    salary,
    description,
    daysLeft,
    isBookmark,
    onToggleBookmark,
  } = props;

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col w-full h-full">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-12 h-12 object-contain rounded-md border p-1"
          />
          <div className="text-sm sm:text-base">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-500">{company}</p>
          </div>
        </div>
        <button
          onClick={() => onToggleBookmark(id)}
          className="text-blue-500 hover:text-blue-700 p-1"
          aria-label={isBookmark ? "Remove from bookmarks" : "Add to bookmarks"}
        >
          {isBookmark ? <FaBookmark size={20} /> : <FiBookmark size={20} />}
        </button>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <span>{experience}</span>
        <span className="font-semibold">{salary}</span>
      </div>

      <p className="mt-4 text-sm text-gray-500 flex-grow">
        {description.length > 90 ? (
          <>
            {description.slice(0, 90)}...
            <a
              href="#"
              className="text-blue-500 font-semibold ml-1 hover:underline"
            >
              Selengkapnya
            </a>
          </>
        ) : (
          description
        )}
      </p>

      <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-3">
        <button className="bg-blue-600 text-white text-sm font-semibold py-2 px-5 rounded-lg w-full sm:w-auto hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
        <div className="flex items-center gap-x-1.5 text-sm text-gray-400">
          <FiClock />
          <span>{daysLeft} hari tersisa</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
