const About = () => {
  return (
    <div>
      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Mission: Empowering Your Career
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At JobCareer, our mission is simple: to bridge the gap between
              talented professionals and innovative companies. We believe that
              the right job can change someone's life. Therefore, we built a
              platform that is not only smart and fast, but also intuitive and
              user-friendly. We are committed to providing the best tools and
              resources so that every job seeker can find a career path that
              best suits their potential and aspirations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are committed to providing the best tools and resources so that
              every job seeker can find a career path that best suits their
              potential and aspirations.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
              alt="Tim berkolaborasi"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="container mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-600">
            Ready to Start Your Dream Career?
          </h2>
          <p className="mt-2 text-slate-500 max-w-xl mx-auto ">
            Millions of opportunities await you. Find the job that best suits
            your skills and interests now.
          </p>
          <div className="mt-8">
            <a
              href="/find-a-job"
              className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors"
            >
              Find Jobs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
