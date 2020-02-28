import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Nav from '../components/Nav';

const Home = () => (
  <Layout>
    <SEO title={`Home`} />
    <Nav></Nav>
    <Hero></Hero>
  </Layout>
);

const Hero = styled.header`
  height: 750px;
  background: radial-gradient(
      circle at 1% 52%,
      rgba(139, 139, 139, 0.05) 0%,
      rgba(139, 139, 139, 0.05) 50%,
      rgba(21, 21, 21, 0.05) 50%,
      rgba(21, 21, 21, 0.05) 100%
    ),
    radial-gradient(
      circle at 41% 28%,
      rgba(81, 81, 81, 0.05) 0%,
      rgba(81, 81, 81, 0.05) 50%,
      rgba(7, 7, 7, 0.05) 50%,
      rgba(7, 7, 7, 0.05) 100%
    ),
    radial-gradient(
      circle at 48% 1%,
      rgba(93, 93, 93, 0.05) 0%,
      rgba(93, 93, 93, 0.05) 50%,
      rgba(7, 7, 7, 0.05) 50%,
      rgba(7, 7, 7, 0.05) 100%
    ),
    linear-gradient(255deg, rgb(156, 41, 132), rgb(47, 14, 122));
`;

export default Home;
