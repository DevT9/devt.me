import React, { useState } from 'react';
import './Contact.css'; // We'll create this file for styling

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Email: <a href="mailto:duthakka@purdue.edu">duthakka@purdue.edu</a>
      </p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/devthak" target="_blank" rel="noopener noreferrer">linkedin.com/in/devthak</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/DevT9" target="_blank" rel="noopener noreferrer">github.com/DevT9</a>
      </p>
      <button onClick={openModal} className="contact-button">Contact Me</button>
      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-button">&times;</button>
            <h3>Contact Form</h3>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit" className="send-button">Send</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;