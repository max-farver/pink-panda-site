import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <div>
          <h3>Get in Touch</h3>
          <p>text field here</p>
        </div>
        <div>
          <h3>Get in Touch</h3>
          <p>text field here</p>
        </div>
        <ContactForm>
          <h3>Get in Touch</h3>
          <p>text field here</p>
        </ContactForm>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.color.gray.one};

  > div {
    padding: 0 1rem;
    max-width: ${props => props.theme.screen.xl};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const ContactForm = styled.div`
  h3 {
    color: ${props => props.theme.color.gray.nine};
  }
  p {
    color: ${props => props.theme.color.gray.nine};
  }
`;

export default Footer;
