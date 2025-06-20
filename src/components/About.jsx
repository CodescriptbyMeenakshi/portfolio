import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "https://drive.google.com/file/d/10rSAi5JvLwooxzbJ3cVMKTxQfNTVZUTe/view?usp=drive_link";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="my-3 text-lg text-gray-400">My introduction</p>
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6">
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <p className="w-11/12 mx-auto leading-7 text-justify">
              I am currently pursuing b.tech in IT, As a Developer specializing in web development With hands-on experience in crafting dynamic user interfaces, I bring a blend of creativity and technical expertise to my role.
                <br />A passionate and enthusiastic web developer with a solid foundation in HTML, CSS, JavaScript, and Bootstrap. I love crafting clean, responsive, and user-friendly websites that not only look good but also provide a smooth user experience.
                <br />Currently, I’m leveling up my skills by learning React.js along with modern tools like Vite and Tailwind CSS to build faster and more dynamic web applications. I enjoy turning ideas into real-world projects and continuously learning new technologies to stay updated in the ever-evolving world of web development.<br />
              </p>
              <div className="flex items-center mt-10 gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="text-2xl font-semibold text-white md:text-4xl">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="text-xs md:text-base">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
