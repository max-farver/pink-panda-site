import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import logo from '../assets/svgs/logo-pink.svg';
import menuIcon from '../assets/svgs/icon-menu.svg';

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = navItems.map(page => (
    <Link to={`/${page[1]}`}>{page[0]}</Link>
  ));

  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <NavWrapper
      animate={{
        backgroundColor:
          !navIsOpaque || isMobileMenuOpen
            ? 'rgba(33,7,59, .95)'
            : 'rgba(33,7,59, .0)',
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
        <DesktopNavItems>{navLinks}</DesktopNavItems>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(prev => !prev)} >
          
        </MobileMenuButton>
        <MobileNavItems
          animate={{
            x: isMobileMenuOpen ? -200 : 0,
            backgroundColor:
              !navIsOpaque || isMobileMenuOpen
                ? 'rgba(33,7,59, .95)'
                : 'rgba(33,7,59, .0)',
          }}
        >
          {navLinks}
        </MobileNavItems>
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

  @media (max-width: ${props => props.theme.screen.sm}) {
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
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

const DesktopNavItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;

  > a:nth-child(4) {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: calc(100% + 1rem);
      height: calc(100% + 1rem);
      border: 2px solid ${props => props.theme.color.primary.five};
      border-radius: 5px;
      top: -0.5rem;
      left: -0.5rem;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  height: 2rem;
  width: 2rem;
  background: url(${menuIcon});
  border: none;

  outline: none;

  z-index: 200;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
  }
`;

const MobileNavItems = styled(motion.div)`
  display: none;
  position: absolute;
  top: 0;
  right: -300px;
  height: 100vh;
  width: 300px;
  margin-top: 4rem;
  background: rgba(33, 7, 59, 0.9);

  a {
    display: inline;
    margin: 1rem;
    color: ${props => props.theme.color.gray.nine};
    background: none;

    :hover,
    :focus,
    :active {
      background: none;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: flex;
    flex-direction: column;
  }
`;

export default Nav;
