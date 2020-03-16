import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';
import Image from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import desktopSVG from '../assets/svgs/hero-desktop-fancy.svg';
import mobileSVG from '../assets/svgs/hero-mobile-fancy.svg';

const Home = () => {
  return (
    <Layout>
      <SEO title={`Home`} />
      <Hero>
        <BG></BG>
        <HeroText>
          <div>
            <h1>
              Web <span>Design</span>, <br />
              <span>Development</span> & <br />
              <span>SEO</span> Made Easy
            </h1>
            <Link to="/Contact">Get in Touch</Link>
          </div>
        </HeroText>
        <CoolSVG></CoolSVG>
      </Hero>
      <Main>
        <IntroBlurb>
          <div>
            <h2>
              It’s Time To Show <span>YOU</span> Off
            </h2>
            <div></div>
            <p>
              You’re passionate about your business. It’s time to show the world
              why. At Pink Panda, our team has a single goal - to help you build
              a brand that stands out. We take what makes you special and help
              you tell the world, turning strangers into customers, and
              customers into loyal fans.
            </p>
          </div>
        </IntroBlurb>
        <Work>
          <h2>
            We’re not all bark, here’s some of our <Link to="/">bite.</Link>
          </h2>
          <div>
            <div>
              <article>
                <Link to="/"></Link>
                <div>
                  <h3>Company</h3>
                </div>
              </article>
              <article>
                <Link to="/"></Link>
                <div>
                  <h3>Company</h3>
                </div>
              </article>
            </div>
          </div>
        </Work>
        <Services>
          <h2>What makes us better</h2>
          <p></p>
        </Services>
      </Main>
    </Layout>
  );
};

const Hero = styled.header`
  max-width: 100%;
  overflow: hidden;
`;

const HeroText = styled.div`
  position: absolute;
  width: 100%;
  > div {
    height: 750px;
    width: 100%;
    margin: 0 auto;
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
        background-image: linear-gradient(
          0deg,
          ${props => props.theme.color.primary.five} 0%,
          ${props => props.theme.color.primary.five} 100%
        );
        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: 0 85%;
        transition: background-size 0.25s ease-in;
      }

      @media (max-width: ${props => props.theme.screen.sm}) {
        font-size: 36px;
      }
    }

    a {
      font-size: 1.5em;
      font-kerning: 2;
      border-radius: 5px;
      border: 3px solid ${props => props.theme.color.primary.five};
      padding: 0.5em 1em;
      color: #ffffff;
      text-align: center;
      width: 250px;
      transition: background-color 0.3s ease-in-out;

      :hover,
      :focus,
      :active {
        background-color: ${props => props.theme.color.secondary.one};
      }

      @media (max-width: ${props => props.theme.screen.sm}) {
        background-color: hsla(300, 79%, 13%, 0.7);
      }
    }

    @media (max-width: ${props => props.theme.screen.sm}) {
      height: 450px;
    }
  }
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

  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 650px;
  }
`;

const CoolSVG = styled(motion.div)`
  overflow: hidden;
  position: relative;
  background: url(${desktopSVG}) no-repeat;
  z-index: -1;
  top: 50px;
  left: 40%;
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
    top: 300px;
  }
`;

const Main = styled.main`
  max-width: ${props => props.theme.screen.xl};
  padding: 0;
  max-width: 100%;
  margin-top: -300px;
  section {
    a {
      background-image: linear-gradient(
        0deg,
        ${props => props.theme.color.primary.five} 0%,
        ${props => props.theme.color.primary.five} 100%
      );
      background-repeat: no-repeat;
      background-size: 100% 0.1em;
      background-position: 0 90%;
      transition: background-size 0.25s ease-in-out;
    }
  }
`;

const IntroBlurb = styled.section`
  max-width: ${props => props.theme.screen.xl};
  margin: 0 auto;
  padding: 0 1rem;

  > div {
    max-width: ${props => props.theme.screen.sm};
  }

  span {
    color: ${props => props.theme.color.primary.three};
  }
`;

const Work = styled.section`
  padding: 0;
  max-width: 100vw;
  overflow: hidden;
  h2 {
    max-width: ${props => props.theme.screen.xl};
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem 0 1rem;

    a {
      background-position: 0 90%;
      color: black;
      :hover,
      :focus,
      :active {
        background-size: 100% 100%;
      }
    }
  }

  article {
    position: relative;
    height: 300px;

    /* Have to fix skew each for individual item in inner div */
    h3 {
      margin: 0;
      color: #fff;
      z-index: 5;
    }

    /* Div inside the card, don't change */
    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        opacity: 0.6;
        background: ${props => props.theme.color.secondary.three};
      }
    }
  }

  > div {
    /* Container div */
    overflow: hidden;
    height: calc(600px - (100vw * 0.26794919243));

    > div {
      /* Background stuff for each card */
      display: flex;
      flex-direction: column;

      /* Change for desktop to skewX   */
      transform: skewY(15deg);
      transform-origin: top right;

      overflow: hidden;
      position: relative;

      /* Set backgrounds for each card */
      > :nth-child(1) {
        overflow: hidden;

        > div {
          transform: skewY(-15deg);
          transform-origin: top right;
          background: url(https://source.unsplash.com/1600x900/?website);
          background-size: cover;
        }
      }
      > :nth-child(2) {
        overflow: hidden;
        > div {
          transform: skewY(-15deg);
          transform-origin: bottom left;
          background: url(https://source.unsplash.com/1600x900/?computer);
          background-size: cover;
        }
      }

      a {
        position: absolute;
        background: transparent;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 10;
      }
    }
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    article {
      position: relative;
      height: 400px;
      width: 100%;

      h3 {
        margin: 0;
        font-size: 2.5em;
        /* resetting from mobile */
        transform: skewX(0deg);
        visibility: hidden;
      }

      /* Div inside the card, don't change */
      > div {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: block;
          opacity: 0;
          transition: opacity 0.5s;
          background: ${props => props.theme.color.secondary.three};
        }
      }

      :focus,
      :hover,
      :active {
        > div::after {
          opacity: 0.7;
        }
        h3 {
          visibility: visible;
        }
      }
    }

    > div {
      /* Container div */
      overflow: hidden;
      height: 400px;
      min-width: calc(100vw + (400px * 0.26794919243));

      > div {
        /* Background stuff for each card */
        flex-direction: row;

        /* Change for desktop to skewX   */
        transform: skewX(15deg);
        transform-origin: bottom left;

        overflow: hidden;
        position: relative;

        /* Set backgrounds for each card */
        > :nth-child(1) {
          > div {
            transform: skewY(0deg);
            transform: skewX(-15deg);
            transform-origin: bottom left;
          }
        }
        > :nth-child(2) {
          > div {
            transform: skewY(0deg);
            transform: skewX(-15deg);
            transform-origin: top right;
          }
        }
      }
    }
  }
`;

const Services = styled.section`
  max-width: ${props => props.theme.screen.xl};
  margin: 0 auto;
  padding: 0 1rem;
`;

export default Home;
