import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import desktopSVG from '../assets/svgs/hero-desktop-fancy.svg';
import mobileSVG from '../assets/svgs/hero-mobile-fancy.svg';

const Home = () => (
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
      <CoolSVG></CoolSVG>
    </Hero>
    <main>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga
        aperiam consequuntur quaerat aut porro error esse minus cum, quas animi
        ratione iste consequatur aspernatur est sequi velit non ipsa deleniti!
        Voluptatem eaque dolorum placeat enim, veritatis cupiditate molestiae
        aliquam. Adipisci vel pariatur magni reprehenderit dolore illum numquam
        aliquam, quidem minima saepe. Eveniet voluptas inventore est ipsa
        aliquam dignissimos quas libero tenetur enim. Eius hic nesciunt nulla
        adipisci sint cupiditate aliquam. Recusandae, nemo totam. Reiciendis
        iure, officiis eveniet accusamus tempora qui illum voluptatibus minima
        quasi! Saepe suscipit ad, autem, quo ipsa corrupti ut, non consectetur
        ab vero facilis sequi tempora mollitia nam ex perferendis consequuntur
        incidunt unde? Minus sapiente soluta odio aliquam expedita nobis eius
        sed eveniet distinctio culpa accusamus, in nisi necessitatibus itaque
        voluptatibus veritatis voluptatem. A ab saepe enim quis esse vero quod
        odio iure fugit temporibus, sint magni debitis et neque nostrum illum
        minima possimus dolores atque mollitia! Ipsam tenetur sint earum
        consequuntur vitae enim ipsum quos molestiae sit assumenda itaque dicta
        qui expedita ut ab amet illum aliquam, rerum harum pariatur et dolorem.
        Eligendi iure earum praesentium provident voluptatibus ipsa repellendus
        tempore sequi, dolor pariatur, iste optio ratione aperiam laborum, ex
        ducimus architecto quo ipsam? Sit.
      </section>
    </main>
  </Layout>
);

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

const CoolSVG = styled.div`
  overflow: hidden;
  position: relative;
  z-index: -1;
  background: url(${desktopSVG}) no-repeat;
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

export default Home;
