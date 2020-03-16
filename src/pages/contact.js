import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = () => (
  <Layout>
    <SEO title={'Contact'} />
    <Main>
      <h1>
        Let Us Help <span>YOU</span>
      </h1>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          inventore ea eligendi pariatur? Omnis, officia ab illo nobis
          accusantium blanditiis dicta voluptatem, tempora molestias libero
          ipsam rem, assumenda eaque expedita aliquid distinctio vitae
          consequatur numquam sequi dolore quo. Quidem aspernatur fugiat
          dolores. Quisquam expedita earum ipsam maiores alias! Nemo,
          consequuntur.
        </p>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="name" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="phone" name="phpne" />
          </div>
          <div>
            <label htmlFor="company">Company Name (optional)</label>
            <input type="email" name="name" />
          </div>
          <div>
            <label htmlFor="name">Your message</label>
            <textarea name="contactBody" rows="6"></textarea>
          </div>
        </Form>
      </div>
    </Main>
  </Layout>
);

const Main = styled.main`
  > div {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    @media (min-width: ${props => props.theme.screen.sm}) {
      flex-direction: row;
    }
  }

  p {
    max-width: 600px;
  }
`;

const Form = styled.form`
  max-width: 600px;
  width: 100%;
  div {
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    display: grid;
    grid-template-areas: 'label' 'input';

    label {
      grid-area: label;
      font-size: 0.8em;
      margin: 1rem 0 0.5rem 0;
      letter-spacing: 1px;
      font-weight: bold;

      @media (min-width: ${props => props.theme.screen.sm}) {
        min-width: 0;
        width: 100%;
      }
    }

    textarea {
      grid-area: input;
      margin: 0 0 0.5rem 0;
      border: 2px solid ${props => props.theme.color.gray.three};
      transition: border 200ms ease-in;
      width: 100%;

      :focus,
      :hover,
      :active {
        border: 2px solid ${props => props.theme.color.primary.seven};
        outline: none;
      }
    }
    input {
      grid-area: input;
      border: none;
      margin: 0 0 0.5rem 0;
      border-bottom: 2px solid ${props => props.theme.color.gray.three};
      transition: border 200ms ease-in;

      :focus,
      :hover,
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

export default Contact;
