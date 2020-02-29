import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import desktopSVG from '../assets/svgs/hero-desktop-fancy.svg';
import mobileSVG from '../assets/svgs/hero-mobile-fancy.svg';

const Home = () => (
  <Layout>
    <SEO title={`Home`} />
    <Nav></Nav>
    <Hero>
      <BG>
        <div>
          <h1>
            Web <span>Design</span>, <br />
            <span>Development</span> & <br />
            <span>SEO</span> Made Easy
          </h1>
        </div>
      </BG>
      <CoolSVG></CoolSVG>
    </Hero>
  </Layout>
);

const Hero = styled.header`
  max-width: 100%;
  overflow: hidden;
`;

const BG = styled.div`
  z-index: -1;
  height: 750px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

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
  box-shadow: 0px 4px 4px 0px hsla(0, 0%, 0%, 0.25);

  > div {
    height: 70%;
    margin: 0 auto;
    overflow: visible;
    max-width: ${props => props.theme.screen.xl};
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 64px;
      color: #fff;
      z-index: 5;
      span {
        background-image: linear-gradient(0deg, #ff0b70 0%, #ff0b70 100%);
        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: 0 90%;
        transition: background-size 0.25s ease-in;
      }

      @media (max-width: ${props => props.theme.screen.sm}) {
        font-size: 36px;
      }
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 650px;
  }
`;

const CoolSVG = styled.div`
  overflow: hidden;
  position: relative;
  z-index: -1;
  background: url(${desktopSVG}) no-repeat;
  top: 50px;
  left: 35%;
  height: 1080px;
  width: 1280px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    left: 43%;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    left: 50%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    background: url(${mobileSVG}) no-repeat;
    height: 758;
    width: 640;
    left: -84px;
    top: 350px;
  }
`;

export default Home;
