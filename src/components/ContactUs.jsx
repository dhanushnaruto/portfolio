import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import img from '../assets/51004.jpg';

// Styled components
const ContactSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme?.palette?.background?.default || '#ffffff'};
  color: ${(props) => props.theme?.palette?.text?.primary || '#000000'};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .email-id {
    font-size: 1rem;
    color: ${(props) => props.theme?.palette?.text?.secondary || '#555555'};
  }
`;

const RightSide = styled.div`
  flex: 1;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-weight: bold;
    }

    input,
    textarea {
      padding: 8px;
      border: 1px solid ${(props) => props.theme?.palette?.border || '#cccccc'};
      border-radius: 4px;
      font-size: 0.9rem;
      width: 80%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    textarea {
      resize: vertical;
      height: 80px;
    }

    input[type='submit'] {
      width: 80%;
      background-color: ${(props) => props.theme?.palette?.primary?.main || '#6200ee'};
      color: #fff;
      border: none;
      cursor: pointer;
      font-size: 0.9rem;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${(props) => props.theme?.palette?.primary?.dark || '#3700b3'};
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .success-message {
    color: ${(props) => props.theme?.palette?.success?.main || '#4caf50'};
    font-size: 1rem;
    margin-top: 10px;
  }
`;

// ContactUs Component
export const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e66lu98', 'template_4hrgv2r', form.current, 'ca7kPlXTMofhg0rPd')
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          form.current.reset();
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <ContactSectionContainer id="contact">
      <SectionHeading>Contact</SectionHeading>
      <ContentWrapper>
        <LeftSide>
          <img src={img} alt="Contact" />
          <div className="email-id">harishmano98@gmail.com</div>
        </LeftSide>
        <RightSide>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required />

            <label htmlFor="company_name">Company Name</label>
            <input type="text" id="company_name" name="company_name" />

            <label htmlFor="user_email">Email Address</label>
            <input type="email" id="user_email" name="user_email" required />

            <label htmlFor="message">Description</label>
            <textarea id="message" name="message" required />

            <input type="submit" value="Send" />
          </form>
          {successMessage && <div className="success-message">{successMessage}</div>}
        </RightSide>
      </ContentWrapper>
    </ContactSectionContainer>
  );
};
