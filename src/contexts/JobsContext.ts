import { createContext, useContext } from "react";

import type { TJob } from "../types/job";

type NewJobData = Omit<TJob, "id">;

export type JobsContextType = {
  jobs: TJob[];
  filteredJobs: TJob[];
  toggleBookmark: (id: number) => void;
  filterJobs: (filters: {
    title: string;
    location: string;
    company: string;
  }) => void;
  deleteJob: (id: number) => void;
  updateJob: (id: number, updatedData: Partial<TJob>) => void;
  addJob: (newJob: NewJobData) => void;
};

export const JobsContext = createContext<JobsContextType | null>(null);

export const useJobs = (): JobsContextType => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("useJobs harus digunakan di dalam JobsProvider");
  }
  return context;
};
