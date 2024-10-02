import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../assets/profile.jpg";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const About = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="text-left">
          <h1 className="text-4xl font-poppins font-medium">About Me</h1>
          <div className="border-b-2 border-black my-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="text-base p-10 lg:w-1/2">
            <p className="text-3xl">I'm Karan, and I'm a Software Developer.</p>
            <p className="mt-4">
              My journey into technology began with a simple curiosity about how
              things work behind the screen. Over time, this curiosity evolved
              into a deep commitment to mastering the art of development. Today,
              I channel that passion into crafting seamless digital experiences,
              whether it's through designing user-friendly websites or building
              efficient, high-performance applications.
            </p>
          </div>

          <div className="lg:w-1/3 text-center">
            <div className="overflow-hidden rounded-4xl p-6">
              <img
                className="w-full h-auto rounded-2xl transform transition-transform duration-300 hover:scale-110"
                src={Profile}
                alt="profile-pic"
              />
            </div>
            <div>
              <ul className="flex justify-items-center space-x-4 mt-4">
                <li className="text-2xl transform transition-transform duration-300 hover:scale-110">
                  <a
                    href="https://github.com/Karan071"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub />
                  </a>
                </li>
                <li className="text-2xl transform transition-transform duration-300 hover:scale-110">
                  <a
                    href="https://instagram.com/Karennnspams"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="text-2xl transform transition-transform duration-300 hover:scale-110">
                  <a
                    href="https://linkedin.com/in/karan-chourasia"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="container mx-auto p-6 m-8">
          <p>
            Driven by a relentless desire to innovate, I constantly seek out new
            challenges and opportunities to expand my skill set. Whether it's
            exploring the latest programming languages, experimenting with
            cutting-edge technologies, or collaborating on impactful projects, I
            am committed to pushing the boundaries of what’s possible. My goal
            is to create solutions that not only meet the needs of today but
            also anticipate the demands of tomorrow, all while maintaining a
            focus on user-centric design and functionality.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
