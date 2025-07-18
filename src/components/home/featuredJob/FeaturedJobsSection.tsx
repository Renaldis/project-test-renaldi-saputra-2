import { jobs } from "../../../constants/data/Jobs";
import JobCard from "./JobCard";

const FeaturedJobsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get your jobs
        </h2>
        <p className="mt-4 text-gray-500">
          Search job openings in your local area and use tools and research to
          map the results and learn valuable information about the companies and
          the interview process.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.slice(0, 6).map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
