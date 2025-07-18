import { useEffect, useState } from "react";
import { ListJobs } from "../constants/data/Jobs";
import type { TJob } from "../types/job";
import { JobsContext } from "./JobsContext";
const initialJobsData = ListJobs || [];

export const JobsProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<TJob[]>(() => {
    try {
      const savedJobs = window.localStorage.getItem("jobify_jobs");
      if (savedJobs) {
        return JSON.parse(savedJobs);
      }
    } catch (error) {
      console.error("Gagal membaca dari localStorage", error);
    }

    return initialJobsData;
  });

  const [filteredJobs, setFilteredJobs] = useState<TJob[]>(jobs);

  useEffect(() => {
    try {
      window.localStorage.setItem("jobify_jobs", JSON.stringify(jobs));
    } catch (error) {
      console.error("Gagal menyimpan ke localStorage", error);
    }
  }, [jobs]);

  const toggleBookmark = (id: number) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, isBookmark: !job.isBookmark } : job
    );
    setJobs(updatedJobs);
  };

  const filterJobs = (filters: {
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

  const value = { jobs, filteredJobs, toggleBookmark, filterJobs };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};
