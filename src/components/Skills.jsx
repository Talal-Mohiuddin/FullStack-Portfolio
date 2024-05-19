import React from "react";

const SkillsSection = () => {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Machine Learning",
    "Python",
  ];

  return (
    <section id="additional">
      <div className="container m-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">
          Additional technologies and skills
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="flex items-center">
                <span className="h-4 w-4 bg-[#2B93EC] rounded-full mr-2"></span>
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
