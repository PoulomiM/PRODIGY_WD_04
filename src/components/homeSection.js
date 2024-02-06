import React from 'react';
import '../components/global.css';
import '../components/homeSection.css';

const HomeSection = () => {
    const backgroundImageUrl = `${window.location.origin}/Assestsall/bg.jpg`;
  return (

    <section className="Home" id="Home" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
     <div className="Home_Container container grid">
        <div className="Home_img">
        <img src={`${window.location.origin}/Assestsall/colorself.jpg`} alt="Colorful self-portrait painting" />
        </div>


        <div className="Home_text">
          <div className="Home_desc">Hello I'm</div>
          <div className="Home_name">
            Poulomi<span> Mondal</span>
          </div>
          <div className="Home_desc">
            <br />A novice
            <div className="Home_dev">Web Developer</div>
            eager to learn more and create innovative web solutions.
            <br />Let's build the web together!
          </div>
          <a href={`${window.location.origin}/Assestsall/Poulomi_Resume.pdf`} download>
            <button id="RSBtn" className="button">
              <i className="fa fa-download"></i>Download Resume
            </button>
          </a>
          <div className="Home_Socials">
            <a href="https://github.com/PoulomiM" target="_blank" className="Home_Socials-link">
              <i className="fa fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/poulomi-mondal-144374259" target="_blank" className="Home_Socials-link">
              <i className="fa fa-linkedin-square"></i>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100073019395277" target="_blank" className="Home_Socials-link">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>

            <a href="https://www.instagram.com/_polo.meee_/" target="_blank" className="Home_Socials-link">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
      </div>
      </div>
    </section>
  );
};

export default HomeSection;
