import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

// Link
export default function MyLink({ link = '#', variant = 'blue', children }) {
  switch (variant) {
    case 'blue':
      return (
        <Typography
          component={'span'}
          color={'sc_blue.main'}
          sx={{ textDecoration: 'underline' }}
        >
          <Link href={link}>{children}</Link>
        </Typography>
      );
    case 'black':
      return (
        <Typography
          component="a"
          color="sc_black.dark"
          fontWeight={600}
          fontStyle={'normal'}
          textDecoration={'none'}
          letterSpacing={0}
        >
          <Link href={link}>{children}</Link>
        </Typography>
      );
    default:
      throw new Error('Variant' + variant + ' not found');
  }
}
