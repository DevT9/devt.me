import React from 'react';

const SectionContent = ({ title, content, imageContainer }) => (
  <div className="section-content flex flex-row justify-between items-start">
    <div className="text-content flex-grow">
      <h2 className="section-title">{title}</h2>
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
                  <span className="text-lg">EVs </span>
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
        />
      </Section>

      <Section className="non-professional-interests-section">
        <SectionContent
          title="Non-Professional Interests"
          content="Your non-professional interests content here..."
        />
      </Section>

      {/* Add other sections as needed */}

      {/* Add this section at the bottom of your home page */}
      <div className="social-links-container">
        <a href="https://github.com/DevT9" target="_blank" rel="noopener noreferrer" className="social-link github">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/devthak" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/DevT_9" target="_blank" rel="noopener noreferrer" className="social-link x-twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="mailto:duthakka@purdue.edu" className="social-link email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
