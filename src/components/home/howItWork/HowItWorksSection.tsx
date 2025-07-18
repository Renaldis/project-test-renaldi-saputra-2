import React from "react";
import howItWorksImage from "/assets/man-work-illustration-rmv.png";
import {
  FiUserPlus,
  FiSearch,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";

import { BsChatRightDots } from "react-icons/bs";

const steps = [
  {
    icon: <FiUserPlus />,
    title: "Sign up & Complete your profile",
    description:
      "Sign up in our app or website and complete your profile for finding your desire jobs.",
  },
  {
    icon: <FiSearch />,
    title: "Search Your job",
    description:
      "You can search millions of jobs online to find the next step in your career.",
  },
  {
    icon: <FiFileText />,
    title: "Apply to the job",
    description:
      "It contains confidential candidate information for applicant to this apply process.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Give online interview",
    description:
      "An online interview is an interview conducted through an online chat video/audio platform.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-5 px-6 md:px-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center relative">
          <img
            src={howItWorksImage}
            alt="Illustration of a person working on a computer"
            className="max-w-md w-[75%]"
          />
          <div className="border-2 w-full opacity-50 h-full rounded-2xl absolute" />

          <BsChatRightDots
            className="absolute text-green-400 top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
            size={30}
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How it works
          </h2>
          <p className="mt-4 text-gray-500">
            When you're looking for a new job, many of your applications will be
            completed online either directly on an employer website or via a job
            board. Before you start job searching, you should first prepare to
            complete online job applications.
          </p>

          <div className="mt-12 relative">
            <div
              className="absolute left-6 top-0 h-full w-0.5 bg-blue-200"
              aria-hidden="true"
            ></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-8">
                <div className="z-10 bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  {React.cloneElement(step.icon, {
                    className: "text-white text-2xl",
                  })}
                </div>

                <div className="ml-6">
                  <h3 className="font-bold text-lg text-gray-800">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
