import React from 'react';
import '../components/Services.css';

const ServicesSection = () => {
  return (
    <section className="Services container" id="Services">
      <div className="Services_head">
        <h1>MY <span>Services</span></h1>
      </div>
      <div className="Services_container grid">
        <div className="Services_list">
          <div className="Services_content">
            <img
              src={`${window.location.origin}/Assestsall/mobile.png`}
              alt=""
              className="Services_icon"
            />
            <h3 className="Services_title">Responsive Design</h3>
            <p className="Services_detail">
              Crafting websites for all devices. Ensuring seamless user experience with fluid layouts and adaptable interfaces for diverse screen sizes.
            </p>
          </div>

          <div className="Services_content">
            <img
              src={`${window.location.origin}/Assestsall/graphic.png`}
              alt=""
              className="Services_icon"
            />
            <h3 className="Services_title">Full-Stack Development</h3>
            <p className="Services_detail">
              End-to-end web solutions. Expertise in both front-end (React) and back-end (Java, PHP) technologies for comprehensive development.
            </p>
          </div>
        </div>

        <div className="Services_list">
          <div className="Services_content">
          <img
              src={`${window.location.origin}/Assestsall/Powerful-bro.png`}
              alt=""
              className="Services_illustration"
            />
          </div>
        </div>

        <div className="Services_list">
          <div className="Services_content">
          <img
              src={`${window.location.origin}/Assestsall/optimization.png`}
              alt=""
              className="Services_icon"
            />
            <h3 className="Services_title">Database Optimization</h3>
            <p className="Services_detail">
              Efficient data management. Skilled in SQL for designing and fine-tuning databases, ensuring optimal performance and responsiveness in web applications.
            </p>
          </div>

          <div className="Services_content">
          <img
              src={`${window.location.origin}/Assestsall/agile.png`}
              alt=""
              className="Services_icon"
            />

            <h3 className="Services_title">Agile Methodologies</h3>
            <p className="Services_detail">
              Dynamic project management. Proficient in Agile practices for iterative development, fostering collaboration, and delivering high-quality, client-centric solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
