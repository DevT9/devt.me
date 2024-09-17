import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCheck, FaTimes } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md'; // Import a different copy icon

const ContactMethod = ({ icon, value, link }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="contact-method">
      <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
        {React.cloneElement(icon, { size: "1.5em" })} {/* Adjusted icon size */}
        <span className="method-value">{value}</span>
      </a>
      <button onClick={copyToClipboard} className="copy-button" aria-label="Copy to clipboard">
        {copied ? <FaCheck size="1.2em" className="tick-mark" /> : <MdContentCopy size="1.2em" />}
      </button>
    </div>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email and message to your backend
    console.log('Submitted:', { email, message });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          <FaTimes />
        </button>
        <h3 className="modal-title">Drop a Message</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-input"
          ></textarea>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <div className="contact-methods">
        <ContactMethod 
          icon={<FaEnvelope />}
          value="your.email@example.com"
          link="mailto:your.email@example.com"
        />
        <ContactMethod 
          icon={<FaLinkedin />}
          value="linkedin.com/in/yourprofile"
          link="https://linkedin.com/in/yourprofile"
        />
        <ContactMethod 
          icon={<FaGithub />}
          value="github.com/yourusername"
          link="https://github.com/yourusername"
        />
      </div>
      <button onClick={() => setIsModalOpen(true)} className="contact-me-button">
        Contact Me
      </button>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Contact;