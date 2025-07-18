import type { TJob } from "../../types/job";
import JobCard from "./JobCard";

type JobListProps = {
  jobs: TJob[];
  onToggleBookmark: (id: number) => void;
};

const JobList = ({ jobs, onToggleBookmark }: JobListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} onToggleBookmark={onToggleBookmark} />
      ))}
    </div>
  );
};

export default JobList;
