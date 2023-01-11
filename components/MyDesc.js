import { Typography } from '@mui/material';
import React from 'react';

const MyDesc = ({ children, type = 'gray_dark', ...args }) => {
  switch (type) {
    case 'gray_dark':
      return (
        <Typography variant="body2" color={'sc_gray.dark'} {...args}>
          {children}
        </Typography>
      );
      break;
    case 'gray_light':
      return (
        <Typography
          variant="body2"
          color={'sc_gray.light'}
          fontSize={16}
          {...args}
        >
          {children}
        </Typography>
      );
      break;
    default:
      throw new Error('variant ' + variant + ' not found');
  }
};

export default MyDesc;
