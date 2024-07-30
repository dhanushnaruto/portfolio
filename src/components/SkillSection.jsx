import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub, FaDatabase, FaRobot } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux, SiPostman } from 'react-icons/si';

// Styled-components for SkillsSection
const SkillsSectionContainer = styled.div`
  padding: 60px 20px;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  text-align: center;
  position: relative;
`;

const SkillCard = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: ${(props) => (props.round ? '50%' : '10px')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .icon {
    font-size: 3rem;
    color: ${(props) => props.theme.palette.primary.main};
  }

  .title {
    margin-top: 10px;
    font-size: 1.25rem;
  }
`;

const SkillDetail = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: opacity 0.3s ease-in-out;

  .detail-card {
    background: ${(props) => props.theme.palette.background.paper};
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;

    .title {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .progress-bar {
      margin-top: 20px;
      position: relative;
      height: 20px;
      background-color: ${(props) => props.theme.palette.background.default};
      border-radius: 10px;
      overflow: hidden;

      .progress {
        height: 100%;
        width: ${(props) => props.progress}%;
        background-color: ${(props) => props.theme.palette.primary.main};
        transition: width 0.5s ease-in-out;
      }
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-size: 1.5rem;
      color: ${(props) => props.theme.palette.text.primary};
    }
  }
`;

const SkillsSection = () => {
  const [openDetail, setOpenDetail] = useState(null);
  const [progress, setProgress] = useState({
    html: 50,
    css: 40,
    js: 60,
    node: 70,
    express: 65,
    mongodb: 50,
    redux: 55,
    github: 80,
    postman: 60,
    database: 50,
    chatgpt: 70,
  });

  const handleClick = (skill) => {
    setOpenDetail(skill);
  };

  const handleClose = () => {
    setOpenDetail(null);
  };

  return (
    <SkillsSectionContainer>
      <h2>Skills & Technologies</h2>
      <div>
        <SkillCard onClick={() => handleClick('html')}>
          <FaHtml5 className="icon" />
          <div className="title">HTML</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('css')}>
          <FaCss3Alt className="icon" />
          <div className="title">CSS</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('js')}>
          <FaJs className="icon" />
          <div className="title">JavaScript</div>
        </SkillCard>
        <SkillCard round onClick={() => handleClick('node')}>
          <FaNodeJs className="icon" />
          <div className="title">Node.js</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('express')}>
          <SiExpress className="icon" />
          <div className="title">Express.js</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('mongodb')}>
          <SiMongodb className="icon" />
          <div className="title">MongoDB</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('redux')}>
          <SiRedux className="icon" />
          <div className="title">Redux</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('github')}>
          <FaGithub className="icon" />
          <div className="title">GitHub</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('postman')}>
          <SiPostman className="icon" />
          <div className="title">Postman</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('database')}>
          <FaDatabase className="icon" />
          <div className="title">Database</div>
        </SkillCard>
        <SkillCard onClick={() => handleClick('chatgpt')}>
          <FaRobot className="icon" />
          <div className="title">ChatGPT</div>
        </SkillCard>
      </div>
      {openDetail && (
        <SkillDetail open={Boolean(openDetail)}>
          <div className="detail-card">
            <span className="close" onClick={handleClose}>&times;</span>
            <div className="title">{openDetail.toUpperCase()}</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress[openDetail]}%` }} />
            </div>
          </div>
        </SkillDetail>
      )}
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
