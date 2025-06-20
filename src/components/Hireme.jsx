import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="px-3 py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="max-w-lg mt-4 text-sm leading-6 text-justify text-gray-200 lg:text-left">
           If you're in need of someone who’s committed to quality, communicates well, and genuinely cares about building a product that works — I’d love to be part of your next project. Whether it’s a website revamp, a portfolio, or a brand-new idea, I’m open to freelance opportunities, internships, or collaboration.
          </p>
          <button className="mt-10 btn-primary">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
