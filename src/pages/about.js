import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const About = () => {
  return (
    <Layout>
      <SEO title={'About'} />
      <Main>
        <h1>About Us</h1>
        <TeamAsWhole>
          <p>
            The reason you can find Pink Panda working across the Midwest is
            because of two friends, Max and Grant. We’re a couple of guys who
            are probably a lot like you. We believe that building a website that
            can handle what your business needs should be easier. If you’re
            looking to work with a business who knows you by name, who handles
            the details so you don’t have to - you’re in the right place.
          </p>
          <img src="https://source.unsplash.com/1600x900/?people" alt="" />
        </TeamAsWhole>
        <Individuals>
          <article>
            <img src="https://source.unsplash.com/400x401/?person" alt="" />
            <h3>Grant Keast</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              accusantium deserunt veniam officia ut nam in atque. Excepturi cum
              sit quod assumenda voluptate deleniti perferendis harum modi
              architecto! Ipsa, ad.
            </p>
          </article>
          <article>
            <div>
              <img src="https://source.unsplash.com/400x400/?person" alt="" />
            </div>
            <h3>Max Farver</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              accusantium deserunt veniam officia ut nam in atque. Excepturi cum
              sit quod assumenda voluptate deleniti perferendis harum modi
              architecto! Ipsa, ad.
            </p>
          </article>
        </Individuals>
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const TeamAsWhole = styled.section``;

const Individuals = styled.section`
  h3 {
    margin-top: 0;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: flex;
    justify-content: space-around;

    > article {
      max-width: 400px;
      text-align: center;
    }
  }
`;

export default About;
