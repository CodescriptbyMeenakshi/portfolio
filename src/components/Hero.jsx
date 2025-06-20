import React, { useRef } from "react";
import my2 from "../assets/images/my2.jpg";
import Type from "./Type";

const socialMediaLinks = [
  "https://www.instagram.com/_aaaryaan__/",
  "https://github.com/CodescriptbyMeenakshi",
  "https://www.linkedin.com/in/meenakshi-karthik-24-02-2005bef/",
  "https://twitter.com/aaryyan_",
];



const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="flex flex-col items-center min-h-screen py-10 md:flex-row"
    >
      <div className="flex items-center justify-center flex-1 h-full">
        <img src={my2} alt="" className="object-cover h-auto md:w-2/3" />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-cyan-600 md:text-6xl">
              Hello!
              <br />
            </span>
            My Name is <span>Meenakshi Karthik</span>
          </h1>
          <h4 className="mt-4 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal">
                <Type/>
              </h4>
          <button className="mt-8 btn-primary" onClick={scrollToContact}>Connect with Me</button>
          <div className="flex items-center justify-center gap-5 mt-8 text-3xl md:justify-start">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 cursor-pointer hover:text-white "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
