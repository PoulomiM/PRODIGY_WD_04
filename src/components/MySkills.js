import React from 'react';
import '../components/mySkills.css';

const MySkills = () => {
  return (
    <section className="MySkills container">
      <h1 className="MySkills_head">My <span>Skills</span></h1>
      <div className="skills_container grid">
        <div className="skills_list">
          <div className="skills_title">FRONTEND</div>

          <div className="skills_content">
            <p className="skills_name">HTML<span className="skills_number">100%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '100%' }}></span>
            </div>
          </div>

          <div className="skills_content">
            <p className="skills_name">CSS<span className="skills_number">90%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '90%' }}></span>
            </div>
          </div>

          <div className="skills_content">
            <p className="skills_name">JavaScript<span className="skills_number">90%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '90%' }}></span>
            </div>
          </div>
        </div>

        <div className="skills_list">
          <div className="skills_title">BACKEND</div>
          <div className="skills_content">
            <p className="skills_name">Java<span className="skills_number">70%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '70%' }}></span>
            </div>
          </div>

          <div className="skills_content">
            <p className="skills_name">Python<span className="skills_number">80%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '80%' }}></span>
            </div>
          </div>

          <div className="skills_content">
            <p className="skills_name">PHP<span className="skills_number">60%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '60%' }}></span>
            </div>
          </div>
        </div>

        <div className="skills_list">
          <div className="skills_title">FRAMEWORKS</div>
          <div className="skills_content">
            <p className="skills_name">React<span className="skills_number">80%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '80%' }}></span>
            </div>
          </div>

          <br />

          <div className="skills_title">DATABASE</div>
          <div className="skills_content">
            <p className="skills_name">MySQL<span className="skills_number">100%</span></p>
            <div className="skills_bar">
              <span className="skills_percentage" style={{ width: '100%' }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
