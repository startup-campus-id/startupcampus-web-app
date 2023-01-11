import { Typography } from '@mui/material';
import React from 'react';

export default function AccentText({ children, variant = 'blue' }) {
  if (variant === 'blue') {
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
  } else if (variant === 'black') {
    return (
      <Typography
        variant="body2"
        color="sc_black.dark"
        fontWeight={500}
        gutterBottom
      >
        {children}
      </Typography>
    );
  }
}
