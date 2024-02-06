import React from 'react';
import '../components/Contact.css'; 
import {send} from '../components/contactForm';

const ContactSection = () => {
    const handleSendMessage = (event) => {
        send(event);
    }
  return (
    <section className="Contact">
      <div className="contact_content container">
        <h2 className="Contact_head">Let's get <span>Connected</span></h2>
        <div className="Contact_container grid">
          <div className="contact_list">
            <h2 className="intro">Write me a message here</h2>
            <form className="contact_form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button className="subbtn" type="submit" onClick={handleSendMessage}>Send Message</button>
            </form>
          </div>

          <div className="contact_list social_media">
            <div className="social_circle">
            <img src={`${window.location.origin}/Assestsall/pngfind.com-connections-png-6603141.png`} alt="Image 1" />
              <div className="social_links">
                <div>
                  <a href="mailto:poulomimondal513@gmail.com" target="_blank" title="Gmail">
                    <i className="fa fa-envelope"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/poulomi-mondal-144374259" target="_blank" title="LinkedIn">
                    <i className="fa fa-linkedin"></i>
                  </a>

                  <a href="https://www.instagram.com/_polo.meee_/" target="_blank" title="Instagram">
                    <i className="fa fa-instagram"></i>
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=100073019395277" target="_blank" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a href="https://github.com/PoulomiM" target="_blank" title="Github">
                    <i className="fa fa-github"></i>
                  </a>

                  <a href="" target="_blank" title="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/poulomi-mondal-144374259" target="_blank" title="LinkedIn">
  <p><i>&copy; 2023 poulomi</i></p>
</a>
    </section>
  );
};
export default ContactSection;



