import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          In pursuit of a challenging position in an organization that would
          enable me to utilize my acquired knowledge, bring my skills to the
          forefront, and work for the development of the organization to make
          prominent contribution to the success of the company.
        </p>

        <br />

        <p className="text-xl">
          I am a highly motivated individual who is driven to succeed. I thrive
          in challenging environments and believe that setting goals for myself
          is the key to reaching my full potential. I am not content with
          mediocrity and am always looking for ways to improve and achieve
          greatness. I believe that success is not just about reaching a
          destination, but about constantly pushing myself to new heights and
          striving for excellence in all that I do. I am ambitious and
          passionate about my work, and I am committed to putting in the effort
          and hard work needed to achieve my goals.
        </p>
      </div>
    </div>
  );
};

export default About;
