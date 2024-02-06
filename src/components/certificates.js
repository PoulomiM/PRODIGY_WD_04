import React from 'react';

const PortfolioSection = () => {
  const sectionStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  const lineDividerStyle = {
    width: '100%',
    height: '2px',
    backgroundColor: '#000',
    margin: '20px 0',
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const certificatesStyle = {
    width: '45%',
  };

  const educationStyle = {
    width: '45%',
  };

  return (
    <div style={sectionStyle}>
      <h2>Certifications and Education</h2>
      <div style={lineDividerStyle}></div>
      <div style={contentStyle}>
        <div style={certificatesStyle}>
          <h3>Certificates</h3>
          <ul>
            <li>Certificate 1</li>
            <li>Certificate 2</li>
            {/* Add more certificate items as needed */}
          </ul>
        </div>
        <div style={educationStyle}>
          <h3>Education</h3>
          <ul>
            <li>School: Your School Name</li>
            <li>College: Your College Name</li>
            {/* Add more education details as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
