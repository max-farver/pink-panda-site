import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

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
          </div>
        </HeroText>
        <CoolSVG
          initial={{
            opacity: 0,
            x: 10,
            y: 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        ></CoolSVG>
      </Hero>
      <Main>
        <section>
          <h2>Insert Fancy Slogan Here</h2>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            ipsum aspernatur rem repudiandae, odit inventore, voluptatibus
            culpa, accusantium adipisci quo ea. Vel iste quis, exercitationem
            officiis reprehenderit numquam tempora officia ipsam quaerat ad ex
            nesciunt soluta vero voluptatem sint dolor non. Tempora molestias
            distinctio at alias, delectus neque assumenda qui minus quis numquam
            repudiandae maiores corrupti accusamus velit facere. Et quidem
            sapiente cum, architecto quod labore omnis id iure sequi earum eum
            ad. Vero harum laboriosam eius fugiat unde dolores ad praesentium
            necessitatibus saepe. Optio aliquam voluptate eveniet iure earum
          </p>
        </section>
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
        background-image: linear-gradient(0deg, #ff0b70 0%, #ff0b70 100%);
        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: 0 85%;
        transition: background-size 0.25s ease-in;
      }

      @media (max-width: ${props => props.theme.screen.sm}) {
        font-size: 36px;
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
  position: relative;
  top: -300px;
  h1 {
    span {
      background-image: linear-gradient(0deg, #ff0b70 0%, #ff0b70 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.2em;
      background-position: 0 85%;
      transition: background-size 0.25s ease-in;
    }
  }

  section {
    > div {
      background: ${props => props.theme.color.primary.five};
      height: 5px;
      width: 110px;
      position: relative;
      top: -20px;
    }

    max-width: ${props => props.theme.screen.md};
  }
`;

export default Home;
