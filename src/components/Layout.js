import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

const Layout = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const [navIsOpaque, setNavIsOpaque] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav />
        {/* <button
          style={{ height: '100vh' }}
          onClick={() => setNavIsOpaque(!navIsOpaque)}
        ></button> */}
        {children}
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
