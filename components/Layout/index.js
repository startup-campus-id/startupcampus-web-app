import { Box } from "@mui/material";
import React from "react";
import AlertMui from "../AlertMui";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Box position="relative">
        <Header />
        <Box component="main" minHeight="100vh">
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
