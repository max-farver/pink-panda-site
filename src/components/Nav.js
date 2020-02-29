import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import logo from '../assets/svgs/logo-pink.svg';

const Nav = () => {
  const navItems = [
    ['About', 'about'],
    ['Services', 'services'],
    ['FAQ', 'faq'],
    ['Clients', 'login'],
  ];

  return (
    <NavWrapper>
      <Navbar>
        <Logo>
          <h1>
            Pink <div></div>
          </h1>
        </Logo>
        <NavItems>
          {navItems.map(page => (
            <Link href={`/${page[1]}`}>{page[0]}</Link>
          ))}
        </NavItems>
      </Navbar>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
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
    color: ${props => props.theme.color.gray.five};
    background: none;

    &:hover,
    :active {
      color: ${props => props.theme.color.gray.nine};
      text-decoration: underline;
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
      /* margin-bottom: -0.5em; */
    }
  }
`;

const NavItems = styled.div`
  @media (max-width: ${props => props.theme.screen.sm}) {
    visibility: hidden;
  }
`;

export default Nav;
