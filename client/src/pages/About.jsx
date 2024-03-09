import React from "react";

const About = () => {
  return (
    <div className="md:py-12 py-10 px-16 md:px-32 space-y-10 min-h-screen">
      <h1 className="text-5xl font-semibold">
        My first full stack project with MERN stack
      </h1>
      <div className="text-2xl font-mono bg-gray-200 p-5 rounded-lg">
        <p>
          Hi, I am Syed Amaan Ali and this is one of my projects which uses MERN
          stack, This is my first fullstack project using MERN stack and I know
          it may be possible to still improve it in different areas but I
          believe that this is a good start, hope you like it as well.
        </p>
        <p>
          The articles in this website/project are not my own, They are just
          part of articles taken from various other websites just to test this
          project, thank you.
        </p>
      </div>
    </div>
  );
};

export default About;
