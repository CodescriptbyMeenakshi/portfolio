import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "meenakshi.k.2402@gmail.com" },
    { logo: "call-outline", text: "+91 9445570534" },
    {
      logo: "location",
      text: "Chennai, Tamil Nadu, India",
    },
  ];
  return (
    <section id="contact" className="px-3 py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">Get in touch</p>

        <div
          className="flex flex-col max-w-5xl gap-6 p-2 mx-auto mt-16 bg-gray-800 rounded-lg md:flex-row md:p-6"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="l" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row flex-wrap items-center gap-4 text-left"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-sm break-words md:text-base">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
