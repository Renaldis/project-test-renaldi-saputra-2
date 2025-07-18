import { FiBookmark, FiClock } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";

type JobCardProps = {
  logo: string;
  title: string;
  company: string;
  experience: string;
  salary: string;
  description: string;
  daysLeft: number;
  salaryRange: { min: number; max: number };
  location: string;
  isBookmark: boolean;
};

const JobCard = (props: JobCardProps) => {
  const {
    logo,
    title,
    company,
    experience,
    salary,
    description,
    daysLeft,
    isBookmark,
  } = props;

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-x-4">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-14 h-14 object-contain rounded-lg p-1 border"
          />
          <div>
            <h3 className="font-bold text-lg text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-blue-500">
          {isBookmark ? (
            <FaBookmark
              size={20}
              className="text-red-600 cursor-pointer hover:text-red-700"
            />
          ) : (
            <FiBookmark size={20} className="cursor-pointer" />
          )}
        </button>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <span>{experience}</span>
        <span className="font-semibold">{`Salary: ${salary}`}</span>
      </div>

      <p className="mt-4 text-sm text-gray-500 flex-grow">
        {description}
        <a
          href="#"
          className="text-blue-500 font-semibold ml-1 hover:underline"
        >
          Read more
        </a>
      </p>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <button className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
          Apply Now
        </button>
        <div className="flex items-center gap-x-1.5 text-sm text-gray-400">
          <FiClock />
          <span>{daysLeft} days left</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
