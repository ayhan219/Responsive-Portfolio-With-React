import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-area">
        <h2>Contact Me</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
