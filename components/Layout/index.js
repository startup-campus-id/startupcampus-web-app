import { Box } from '@mui/material';
import React from 'react';

import AlertMui from '../AlertMui';
import Footer from '../Footer';
import Header from '../Header';
import PopupStudiIndependen from '../PopupStudiIndependen';

const Layout = ({ children }) => {
  return (
    <>
      <Box position="relative">
        <Header />
        <Box component="main" minHeight="100vh">
          {children}
          <PopupStudiIndependen />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
