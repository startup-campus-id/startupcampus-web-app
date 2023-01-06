import { Typography } from '@mui/material';
import React from 'react';

export default function AccentText({ children }) {
  return (
    <Typography
      variant="body2"
      color="sc_blue.main"
      fontWeight={700}
      gutterBottom
    >
      {children}
    </Typography>
  );
}
