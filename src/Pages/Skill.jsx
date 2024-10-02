import React from 'react';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

const Skill = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-poppins font-medium mb-6 text-left">🚀 Connect with me</h2>
      
        <div className="flex space-x-4 mb-8 p-5 m-5">
          <a href="https://wa.me/919582292422" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp Badge" />
          </a>
          <a href="https://github.com/Karan071" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
          </a>
          <a href="https://www.linkedin.com/in/Karan-Chourasia/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" />
          </a>
          <a href="https://www.instagram.com/karennnspams/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Badge" />
          </a>
        </div>

        <div className="container mx-auto p-8 m-5">
          <h2 className="text-3xl font-poppins font-medium mb-6 text-left">🛠️ Skills</h2>

          <div className="mb-8 m-6">
            <h3 className="text-2xl font-semibold mb-4 text-left">Programming Languages</h3>
            <a href="https://github.com/Karan071" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=cpp,java,kotlin,js,dart" alt="Programming Languages" />
            </a>
          </div>

          <div className="mb-8 m-6">
            <h3 className="text-2xl font-semibold mb-4 text-left">Frontend</h3>
            <a href="https://github.com/Karan071" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,typescript" alt="Frontend" />
            </a>
          </div>

          <div className="mb-8 m-6">
            <h3 className="text-2xl font-semibold mb-4 text-left">Backend</h3>
            <a href="https://github.com/Karan071" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=nodejs,express,mongo,mysql,graphql" alt="Backend" />
            </a>
          </div>

          <div className="mb-8 m-6">
            <h3 className="text-2xl font-semibold mb-4 text-left">Tools</h3>
            <a href="https://github.com/Karan071" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=git,github,linux,androidstudio,vscode,atom" alt="Tools" />
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Skill;
