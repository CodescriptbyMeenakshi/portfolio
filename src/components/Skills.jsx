import React from 'react';


const Skills = () => {
  const skills = [
    {
      name:"HTML",
      logo: "logo-html5",
      level: "Intermediate",
      count: 70,
    },
    {
      name:"CSS",
      logo: "logo-css3",
      level: "Intermediate",
      count: 70,
    },
    {
      name:"JAVASCRIPT",
      logo:"logo-javascript",
      level: "Intermediate",
      count:70,
    },
    {
      name:"REACT",
      logo: "logo-react",
      level: "Beginner",
      count: 30,
    },
    {
      name:"NODE JS",
      logo: "logo-nodejs",
      level: "Beginner",
      count: 40,
    }
  ];
  return (
    <section id="skills" className="relative py-10 bg-gray-800">
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My knowledge</p>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl"
            >
              <p className="mb-2 text-xl">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="flex items-center justify-center w-32 h-32 rounded-full"
              >
                
                <div className="flex items-center justify-center text-6xl bg-gray-900 rounded-full w-28 h-28 group-hover:text-cyan-600">
                  <ion-icon name={skill.logo} > </ion-icon>
                </div>
              </div>
             <p className="mt-3 text-xl">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;