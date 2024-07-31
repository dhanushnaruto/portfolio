import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import projects from './projects';

// Animation for project card hover
const cardHover = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

// Animation for project details fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const NotFound = styled.div`
  width:100%;
  text-align:center;
`;

const NotFoundImage = styled.img`
  height:500px;

  @media (max-width: 1100){
    height:300px;
  }
  
`

const ProjectsSectionContainer = styled.section`
  padding: 20px;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  height:90vh;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button { 
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    margin: 0 10px;
    padding: 10px 20px;
    cursor: pointer;
    transition: color 0.3s, border-bottom 0.3s;

    &.active {
      color: ${(props) => props.theme.palette.primary.main};
      border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
    }

    &:hover {
      color: ${(props) => props.theme.palette.primary.dark};
    }
  }
`;

const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 55px;
  margin-right:30px;
  margin-left:30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* Two cards on medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* One card on small screens */
  }
`;

const ProjectCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  height: 350px;
  width:300px /* Reduce the card height */
  
  &:hover {
    animation: ${cardHover} 0.3s ease-in-out;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 80%; /* Adjust the image height */
    display: block;
    object-fit: cover; /* Ensure image covers the area */
  }

  .card-content {
    padding: 8px;
    text-align: center;
    background: ${(props) => props.theme.palette.background.paper};
    height: 40%; /* Adjust content area height */
  }

  .card-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .card-icons {
    position: absolute;
    top: 10px; /* Increase spacing from top */
    right: 10px; /* Increase spacing from right */
    display: flex;
    gap: 15px; /* Increase spacing between icons */
    z-index: 10;

    a {
      color: ${(props) => props.theme.palette.text.secondary};
      font-size: 2rem; /* Increase icon size */
      transition: color 0.3s;

      &:hover {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`;

const ProjectDetails = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  max-width: 500px;
  height: auto;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;

  .details-content {
    background: ${(props) => props.theme.palette.background.default};
    color: ${(props) => props.theme.palette.text.primary};
    padding: 15px;
    border-radius: 8px;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 50%;
      max-width: 350px;
      height: auto;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    h2 {
      margin: 0;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-size: 1.5rem;
      color: ${(props) => props.theme.palette.text.primary};
    }

    .card-icons {
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      gap: 15px;

      a {
        color: ${(props) => props.theme.palette.text.secondary};
        font-size: 2rem; /* Increase icon size */
        transition: color 0.3s;

        &:hover {
          color: ${(props) => props.theme.palette.primary.main};
        }
      }
    }
  }
`;

const nothingFound = () =>{
  return (<NotFound>
            <NotFoundImage src="https://img.freepik.com/premium-vector/empty-planet-galaxy-space-nothing-found-here-error-page-illustration-element_22052-4874.jpg"/>
          </NotFound>)
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const filteredProjects = projects[activeTab];

  return (
    <ProjectsSectionContainer>
    <h2 style={{ textAlign: 'center' }}>Projects</h2>

      <Tabs>
        <button
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        
        <button
          className={activeTab === 'fullstack' ? 'active' : ''}
          onClick={() => handleTabClick('fullstack')}
        >
          Full Stack
        </button>
        <button
          className={activeTab === 'miniprojects' ? 'active' : ''}
          onClick={() => handleTabClick('miniprojects')}
        >
          Mini Projects
        </button>
      </Tabs>
      {filteredProjects.length === 0?nothingFound() : <ProjectCardsContainer id="projects">
        
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} onClick={() => handleCardClick(project)}>
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <div className="card-title">{project.title}</div>
              <div className="card-icons">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </ProjectCard>
        )) }
      </ProjectCardsContainer>}
      
      {selectedProject && (
        <ProjectDetails isOpen={!!selectedProject}>
          <div className="details-content">
            <span className="close-button" onClick={handleCloseDetails}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <div className="card-icons">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={selectedProject.deployed} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </ProjectDetails>
      )}
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
