import React from 'react';
import '../components/Projects.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Weather Dashboard",
      image: `${window.location.origin}/Assestsall/weatherapp.png`,
      description: "A responsive weather application that provides real-time weather information. Track the current weather and forecasts with an intuitive and user-friendly interface.",
      languages:"HTML/Css/Javascript",
      codeLink: "#",  
      viewLink: "https://github.com/PoulomiM/PRODIGY_WD_05",
    },
    {
      title: "Tic-Tac-Toe",
      image: `${window.location.origin}/Assestsall/Tictactoe1.png`,
      description: "Classic Tic-Tac-Toe game implemented in a clean and minimalistic design. Play against a friend or challenge yourself against an AI opponent.",
      languages:"HTML/Css/Javascript",
      codeLink: "https://github.com/PoulomiM/PRODIGY_WD_03",  
      viewLink: "#",  
    },
    {
      title: "Stopwatch",
      image: `${window.location.origin}/Assestsall/Stopwatch.png`,
      description: "Whether you need to time an activity or keep track of elapsed time, this stopwatch has you covered with its user-friendly features.",
      languages:"HTML/Css/Javascript",
      codeLink: "https://github.com/PoulomiM/PRODIGY_WD_02", 
      viewLink: "#",  
    },
    {
      title: "Flower Selling Website",
      image: `${window.location.origin}/Assestsall/flower.png`,
      description: "Seamlessly integrated with an easy-to-use interface for browsing and purchasing flowers.",
      languages:"HTML/Css/Javascript",
      codeLink: "https://github.com/PoulomiM/Flower-shop",  
      viewLink: "#",  
    },
  ];

  return (
    <section className="Projects container" id="projects">
      <h1 className="Projects_head">
        My <span>Works</span>
      </h1>
      <div className="project_container grid">
        {projects.map((project, index) => (
          <div className="project_item grid" key={index}>
            <div className="project_content">
              <img src={project.image} alt={project.title} />
              <div className="project_title">{project.title}</div>
              <p className="project_description">{project.description}</p>
              <button className="code" onClick={() => window.open(project.codeLink, "_blank")}>
                Code
        </button>
             <p className='languages'>{project.languages}</p>
              {/*<button className="view" onClick={() => window.open(project.viewLink, "_blank")}>
                View
              </button>*/}
            </div>
          </div>
        ))}
        <button className="show_more_btn">Show More</button>
      </div>
    </section>
  );
};

export default ProjectsSection;

