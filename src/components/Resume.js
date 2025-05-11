import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe 
        title="Resume"
        src="/resume.pdf"
        width="50%"
        height="750px"
      >
        This browser does not support PDFs. Please download the PDF to view it: 
        <a href="/resume.pdf">Download PDF</a>
      </iframe>
    </div>
  );
};

export default Resume;
