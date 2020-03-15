import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Directory>
          <Link to="/">Home</Link>
          <Link>Our Work</Link>
          <Link to="/services">Services</Link>
          <Link>About Us</Link>
        </Directory>
        <CopyWrite>
          © {new Date().getFullYear()}, Pink Panda. All rights reserved
        </CopyWrite>
        <ContactForm>
          <h3>
            Let us Help <span>YOU</span>
          </h3>
          <form>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email here"
            />
            <button type="submit">Get in Touch</button>
          </form>
        </ContactForm>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: relative;
  background-color: ${props => props.theme.color.gray.one};

  > div {
    padding: 1rem;
    max-width: ${props => props.theme.screen.xl};
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 'contact' 'directory' 'copywrite';

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      grid-template-rows: none;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 'directory copywrite contact';

      > div {
        height: 100%;
      }
    }
  }
`;

const ContactForm = styled.div`
  grid-area: contact;
  h3 {
    color: ${props => props.theme.color.gray.nine};
    margin-top: 1rem;

    span {
      color: ${props => props.theme.color.primary.five};
    }
  }
  p {
    color: ${props => props.theme.color.gray.nine};
  }

  form {
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    display: grid;
    grid-template-areas: 'label button' 'input button';

    label {
      grid-area: label;
      font-size: 0.8em;
      margin: 0.5rem;
      letter-spacing: 1px;
      font-weight: bold;
    }

    input {
      grid-area: input;
      border: none;
      margin: 0 0.5rem 0.5rem 0.5rem;
      border-bottom: 2px solid ${props => props.theme.color.gray.three};
      transition: border 200ms ease-in;

      :focus,
      :active {
        border-bottom: 2px solid ${props => props.theme.color.primary.seven};
        outline: none;
      }
    }

    button {
      grid-area: button;
      margin: 0.5rem;
      border-radius: 5px;
      border: 2px solid ${props => props.theme.color.gray.three};
      background: transparent;
    }
  }
`;

const CopyWrite = styled.div`
  margin: 1.5rem 0;
  grid-area: copywrite;
  color: #fff;
`;

const Directory = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: directory;

  a {
    background-image: linear-gradient(0deg, #00000000 0%, #00000000 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.1em;
    background-position: 0 100%;
    color: #fff;
    margin: 0.25rem auto 0.25rem 0;

    :hover,
    :focus,
    :active {
      background-image: linear-gradient(
        0deg,
        ${props => props.theme.color.primary.five} 0%,
        ${props => props.theme.color.primary.five} 100%
      );
    }

    @media (max-width: ${props => props.theme.screen.sm}) {
      background-image: linear-gradient(
        0deg,
        ${props => props.theme.color.primary.five} 0%,
        ${props => props.theme.color.primary.five} 100%
      );
    }
  }
`;

export default Footer;
