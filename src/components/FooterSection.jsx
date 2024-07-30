import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .icons {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;

    a {
      color: ${(props) => props.theme.palette.text.primary};
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }

  .copyright {
    font-size: 0.9rem;
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="icons">
        <a href="https://github.com/Harish-kumar-M-1998" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/harish-kumar-m-871335280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="copyright">
        &copy; {currentYear} HARISH KUMAR M. All rights reserved.
      </div>
    </FooterContainer>
  );
};

export default FooterSection;
