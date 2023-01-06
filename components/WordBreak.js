import { Box, Typography } from '@mui/material';
import React from 'react';

const WordBreak = () => {
  return <Box component="br" display={{ xs: 'none', md: 'block' }} />;
};

export default WordBreak;
