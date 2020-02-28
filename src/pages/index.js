import React from 'react';
import styled from 'styled-components';

import { Heading, Layout, SEO, Text } from '../components';

const TextHome = styled(Text)`
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  font-size: 22px;
  line-height: 1.6;
  color: var(--dark-color-light);

  @media (max-width: 849px) {
    font-size: 19px;
  }
`;

const Home = () => (
  <Layout>
    <SEO title={`Home`} />
    <Heading>Lewis Gatsby Starter Basic</Heading>
    <TextHome>
      This is a custom basic Gatsby starter template to start a website.
    </TextHome>
  </Layout>
);

export default Home;
