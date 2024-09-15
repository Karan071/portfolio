import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@material-tailwind/react";


const TypingEffect = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-slate-100 space-y-4">
      <div className="text-9xl font-bold">
        <p>Karan</p>
      </div>
      <TypeAnimation
        className="font-poppins text-red-500"
        sequence={[
          "I am a Software Engineer",
          1000,
          "I am a Web Developer",
          1000,
        ]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "3em", display: "inline-block"}}
        repeat={Infinity}
      />
      <Button size="lg">Contact Me</Button>
    </div>
  );
};

export default TypingEffect;
