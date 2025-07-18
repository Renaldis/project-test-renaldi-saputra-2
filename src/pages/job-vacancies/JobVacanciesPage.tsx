import { useEffect, useState } from "react";
import JobList from "../../components/job-vacancies/JobList";
import type { TJob } from "../../types/job";
import { ListJobs } from "../../constants/data/Jobs";
import JobFilter from "../../components/job-vacancies/JobFilter";

const JobVacanciesPage = () => {
  const [jobs, setJobs] = useState<TJob[]>(ListJobs);

  const [filteredJobs, setFilteredJobs] = useState<TJob[]>(jobs);

  const handleToggleBookmark = (id: number) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, isBookmark: !job.isBookmark } : job
    );
    setJobs(updatedJobs);
  };

  const handleFilter = (filters: {
    title: string;
    location: string;
    company: string;
  }) => {
    let tempJobs = [...jobs];

    tempJobs = tempJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        job.company.toLowerCase().includes(filters.company.toLowerCase())
    );

    setFilteredJobs(tempJobs);
  };

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <div className="mb-10">
      <div className="text-center mb-12 mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Find Your Next Job</h1>
        <p className="text-gray-500 mt-2">
          Explore thousands of job opportunities with all the information you
          need.
        </p>
      </div>

      <JobFilter onFilter={handleFilter} />
      <JobList jobs={filteredJobs} onToggleBookmark={handleToggleBookmark} />
    </div>
  );
};

export default JobVacanciesPage;
