import JobList from "../../components/job-vacancies/JobList";
import JobFilter from "../../components/job-vacancies/JobFilter";
import { useJobs } from "../../contexts/JobsContext";

const JobVacanciesPage = () => {
  const { filteredJobs, toggleBookmark, filterJobs } = useJobs();

  return (
    <div className="mb-10">
      <div className="text-center mb-12 mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Find Your Next Job</h1>
        <p className="text-gray-500 mt-2">
          Explore thousands of job opportunities with all the information you
          need.
        </p>
      </div>

      <JobFilter onFilter={filterJobs} />
      <JobList jobs={filteredJobs} onToggleBookmark={toggleBookmark} />
    </div>
  );
};

export default JobVacanciesPage;
