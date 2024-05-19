import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS & TailwindCss", level: "Advanced" },
    { name: "JavaScript, TypeScript", level: "Advanced" },
    { name: "Machine Learning", level: "Advanced", width: "75%" },
    { name: "React", level: "Advanced", width: "90%" },
  ];

  return (
    <section className="py-10" id="technologies">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Technologies</h2>
        <div className="mt-14">
          {technologies.map((tech, index) => (
            <div key={index} className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{tech.name}</h2>
                <p className="text-gray-500">{tech.level}</p>
              </div>
              <span className={`w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md`} style={{ width: tech.width || '100%' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
