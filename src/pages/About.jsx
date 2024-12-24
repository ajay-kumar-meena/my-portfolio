import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p>
          Hi, I'm Ajay Kumar Meena, a passionate web developer with a strong
          interest in the MERN stack (MongoDB, Express, React, Node.js). I'm
          currently pursuing a Bachelor of Computer Applications (BCA) at Jaipur
          National University. I'm highly motivated and eager to learn new
          technologies to create impactful and visually appealing web
          applications.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
        <span>
          Bachelor of Computer Applications (BCA), Jaipur National University,
          [2025 Batch]
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}

export default About;
