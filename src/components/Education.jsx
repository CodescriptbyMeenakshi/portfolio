import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Agni College of Technology, Chennai, Tamil Nadu',
      grades: 'CGPA: 7.68',
      year: ' [2022-present]',
      desc: "I am currently pursuing a Bachelor's degree in Information technology at Agni College of Technology, Chennai, Tamil Nadu'. I have completed 6 semesters and have a CGPA of 7.68.",
    },
    {
      logo: "logo-play",
      degree: 'Matriculation(XII)-HSC',
      institution: 'M.P.Aanandh Matriculation Higher Secondary School, Chennai',
      grades: 'Grade: 59.1% ',
      year: ' [2021-2022]',
      desc: "I completed my class 12 high school education at M.P.Aanandh Matriculation Higher Secondary School, Chennai, where I studied Science with Maths.",       
    },
    {
      logo: "logo-play",
      degree: 'Matriculation(X)-SSLC',
      institution: 'M.P.Aanandh Matriculation Higher Secondary School, Chennai',
      grades: 'Grade: 75.2% ',
      year: ' [2019-2020]',
      desc: "I completed my class 10 Secondary schooling at M.P.Aanandh Matriculation Higher Secondary School, Chennai, where I studied f.",       
    },
  ];

  return (
    <div id="education" className="container px-4 py-12 mx-auto">
      <h3 className="mb-1 text-4xl font-semibold text-center">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg font-normal text-center ">My educational details are as follows.</p>
      <hr className="w-full mb-8 border-gray-300" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="flex flex-col items-start p-6 mb-4 bg-gray-200 rounded-lg shadow-md">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="mb-2 text-lg font-medium text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
