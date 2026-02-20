import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col md:flex-row items-stretch gap-8 bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 transform transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            {/* Left Column: Card with Description and Skills */}
            <div className="md:w-2/3 flex flex-col justify-center">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
                {experience.desc}
              </p>
              <div className="mt-auto">
                <h5 className="font-medium text-white mb-2">Skills:</h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-purple-400 opacity-80"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Logo, Role, Company, Date */}
            <div className="md:w-1/3 flex flex-col items-center md:items-end justify-center text-center md:text-right border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-8">
              {/* Company Logo */}
              <div className="w-20 h-20 bg-white rounded-full overflow-hidden mb-4 shadow-lg border-2 border-[#8245ec]">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role and Company */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {experience.role}
                </h3>
                <h4 className="text-lg text-[#8245ec] font-semibold mb-2">
                  {experience.company}
                </h4>
                <p className="text-sm text-gray-500">{experience.date}</p>
              </div>

              {/* HackQuest Link if available */}
              {experience.hackquest && (
                <a
                  href={experience.hackquest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm text-[#8245ec] hover:underline font-medium"
                >
                  View Profile &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
