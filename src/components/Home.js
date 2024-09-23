import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SectionContent = ({ title, content, imageContainer }) => (
  <div className="section-content flex flex-row justify-between items-start">
    <div className="text-content flex-grow">
      <h2 className="section-title font-oranienbaum">{title}</h2>
      <p className="section-text">{content}</p>
    </div>
    {imageContainer}
  </div>
);

const Section = ({ className, children }) => (
  <div className={`section-container ${className}`}>
    <div className="section-wrapper">
      {children}
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="home-container">
      <Section className="about-me-section">
        <SectionContent
          title="About Me"
          content={
            <div>
              <p className="mb-4">Hi, I'm Dev Thakkar, a senior in Computer Engineering at Purdue University graduating December 2024.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Teaching Assistant for Python for Data Science and Artificial Intelligence course</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Previous internship experience at Harbinger Motors and ZF in the automotive sector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Actively seeking full-time SDE roles starting December 2024</span>
                </li>
              </ul>
            </div>
          }
          imageContainer={
            <div className="about-image-container">
              <img src="/profile.jpg" alt="Dev Thakkar" className="about-image" />
            </div>
          }
        />
      </Section>

      <Section className="interests-section">
        <SectionContent
          title="Interests"
          content={
            <div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">I want to build tech that actually makes a difference in people's lives. There's something special about creating products that anyone can pick up and use, solving everyday problems in clever ways. I want to work on things that people use naturally as part of their daily routines.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">I'm really excited by how computer vision is evolving and how it could lead to smarter, more intuitive ways for people to interact with technology. </span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">The automotive industry is another area that fascinates me, especially as cars become more high-tech and change how we think about transportation. </span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">I'm drawn to startups because they give me the chance to work on meaningful products and innovate quickly.</span>
                </li>
              </ul>
            </div>
          }
        />
      </Section>

      <Section className="non-professional-interests-section">
        <SectionContent
          title="Non-Professional Interests"
          content={
            <div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Sneakers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Table Tennis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Football (both kinds)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Baking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Film Photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span className="text-lg">Basketball</span>
                </li>
              </ul>
            </div>
          }
        />
      </Section>

      {/* Add other sections as needed */}

      {/* Add this section at the bottom of your home page */}
      <div className="social-links-container">
        <a href="https://github.com/DevT9" target="_blank" rel="noopener noreferrer" className="social-link github">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/devthak" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <FaLinkedin />
        </a>
        <a href="https://x.com/DevT_9" target="_blank" rel="noopener noreferrer" className="social-link x-twitter">
          <FaTwitter />
        </a>
        <a href="mailto:duthakka@purdue.edu" className="social-link email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Home;
