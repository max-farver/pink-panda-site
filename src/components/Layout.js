import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

const Layout = ({ children, location }) => {
  const { scrollYProgress } = useViewportScroll();
  const [navIsOpaque, setNavIsOpaque] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Site>
        <GlobalStyles />
        <Nav />
        <Content>{children}</Content>
        <Footer />
      </Site>
    </ThemeProvider>
  );
};

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
