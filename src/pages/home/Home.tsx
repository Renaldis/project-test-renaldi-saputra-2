import HeroSection from "../../components/home/hero/HeroSection";
import HowItWorksSection from "../../components/home/howItWork/HowItWorksSection";
import JobCategorySection from "../../components/home/jobCategory/jobCategorySection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <JobCategorySection />
      <HowItWorksSection />
    </div>
  );
};

export default Home;
