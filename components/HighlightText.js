import { Box, Typography } from '@mui/material';
import React from 'react';

const HighlightText = ({
  children,
  width,
  height,
  variant = 'blue',
  ...rest
}) => {
  let sxValue = {};
  if (variant === 'blue') {
    sxValue = {
      fontWeight: 800,
      position: 'relative',
      color: 'sc_blue.main',
      '&::before': {
        zIndex: '-1',
        content: "''",
        position: 'absolute',
        top: height ?? 0,
        bottom: height ?? 0,
        right: width ?? '-5%',
        left: width ?? '-5%',
        backgroundColor: 'rgba(0, 86, 210, 0.15)',
      },
    };
  } else if (variant === 'yellow') {
    sxValue = {
      marginX: 1.5,
      fontWeight: 800,
      position: 'relative',
      color: 'sc_yellow.main',
      '&::before': {
        zIndex: '-1',
        content: "''",
        position: 'absolute',
        top: height ?? '-5%',
        bottom: height ?? '-5%',
        right: width ?? '-15%',
        left: width ?? '-15%',
        backgroundColor: 'sc_yellow.light',
      },
    };
  } else {
    throw new Error('Variant' + variant + ' not found');
  }

  return (
    <Box
      component={'span'}
      sx={{
        ...sxValue,
        ...rest,
      }}
    >
      {children}
    </Box>
  );
};

export default HighlightText;
