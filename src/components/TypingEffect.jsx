import React from "react";
import { TypeAnimation } from "react-type-animation";


const TypingEffect = () => {


  function onClick () {
    window.open("https://www.linkedin.com/in/karan-chourasia", "_blank")
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-slate-100 space-y-4">
      <div className="text-9xl font-bold">
        <p>Karan</p>
      </div>
      <TypeAnimation
        className="font-poppins text-white "
        sequence={[
          "I am a Software Engineer",
          1000,
          "I am a Web Developer",
          1000,
        ]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "3em", display: "inline-block" }}
        repeat={Infinity}
      />
      <button onClick={onClick} className="px-6 py-2 border border-gray-300 text-white-800  rounded-3xl hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 font-poppins">
        Contact Me
      </button>
    </div>
  );
};

export default TypingEffect;
