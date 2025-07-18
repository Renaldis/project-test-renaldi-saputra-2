import { createContext, useContext } from "react";

import type { TJob } from "../types/job";

export type JobsContextType = {
  jobs: TJob[];
  filteredJobs: TJob[];
  toggleBookmark: (id: number) => void;
  filterJobs: (filters: {
    title: string;
    location: string;
    company: string;
  }) => void;
};

export const JobsContext = createContext<JobsContextType | null>(null);

export const useJobs = (): JobsContextType => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("useJobs harus digunakan di dalam JobsProvider");
  }
  return context;
};
