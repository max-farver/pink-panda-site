import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import logo from '../assets/svgs/logo-pink.svg';

const Nav = ({ location }) => {
  const navItems = [
    ['Services', 'services'],
    ['FAQ', 'faq'],
    ['About', 'about'],
    ['Contact Us', 'contact'],
  ];
  const [navIsOpaque, setNavIsOpaque] = useState(true);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => scrollYProgress.onChange(v => setNavIsOpaque(v === 0)), [
    scrollYProgress,
  ]);

  return (
    <NavWrapper
      animate={{
        backgroundColor: navIsOpaque
          ? 'rgba(33,7,59, .0)'
          : 'rgba(33,7,59, .9)',
      }}
    >
      <Navbar>
        <Logo>
          <Link to="/">
            <h1>
              Pink
              <div></div>
            </h1>
          </Link>
        </Logo>
        <NavItems>
          {navItems.map(page => (
            <Link to={`/${page[1]}`}>{page[0]}</Link>
          ))}
        </NavItems>
      </Navbar>
    </NavWrapper>
  );
};

const NavWrapper = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Navbar = styled.nav`
  top: 0;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.screen.xl};
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  a {
    text-shadow: none;
    color: ${props => props.theme.color.gray.six};
    background-image: linear-gradient(0deg, #00000000 0%, #00000000 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.1em;
    background-position: 0 100%;

    :hover,
    :focus,
    :active {
      background-image: linear-gradient(
        0deg,
        ${props => props.theme.color.primary.five} 0%,
        ${props => props.theme.color.primary.five} 100%
      );

      color: ${props => props.theme.color.gray.nine};
    }
  }

  > div {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  a {
    :hover,
    :focus,
    :active {
      background-image: none;
    }
  }

  h1 {
    color: ${props => props.theme.color.primary.five};
    display: flex;
    align-items: center;
    margin: 0;

    > div {
      background: url(${logo});
      background-size: contain;
      height: 2em;
      width: 2em;
    }
  }
`;

const NavItems = styled.div`
  /* :nth-child(4) {
      position: relative;
      :before {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid black;
      }
    } */

  @media (max-width: ${props => props.theme.screen.sm}) {
    visibility: hidden;
  }
`;

export default Nav;
