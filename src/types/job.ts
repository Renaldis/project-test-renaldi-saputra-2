export type TJob = {
  id: number;
  logo: string;
  title: string;
  company: string;
  experience: string;
  salary: string;
  salaryRange: { min: number; max: number };
  location: string;
  description: string;
  daysLeft: number;
  isBookmark: boolean;
};
