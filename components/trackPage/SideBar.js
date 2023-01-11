import EastIcon from '@mui/icons-material/East';
import { Divider, Link, Stack, Typography } from '@mui/material';
import React from 'react';

import DaftarButton from '../DaftarButton';
import MyButton from '../MyButton';

export default function SideBar({ variant = 'blue', listMenu, link }) {
  let styling = {};
  let button;
  switch (variant) {
    case 'blue':
      button = <DaftarButton link={link} />;
      break;
    case 'yellow':
      styling = {
        title: {
          fontWeight: 500,
          letterSpacing: 0,
          color: 'sc_black.dark',
        },
        text: {
          fontSize: 14,
          color: 'sc_gray.light',
        },
        button: {},
      };
      button = (
        <Link href={link} passHref>
          <MyButton
            color="sc_yellow"
            textColor={'sc_black.dark'}
            hover={{
              backgroundColor: '#B67A02',
              color: '#FFFFFF',
            }}
          >
            <Typography
              fontWeight={500}
              fontStyle={'normal'}
              fontSize={14}
              marginRight={1}
            >
              Daftar Sekarang
            </Typography>{' '}
            <EastIcon />
          </MyButton>
        </Link>
      );
      break;
    default:
      throw new Error('There is no variant ' + variant);
  }

  return (
    <Stack
      p={4}
      spacing={3}
      sx={{
        background: '#FFFFFF',
        boxShadow: '0px 16px 40px rgba(112, 144, 176, 0.2)',
        borderRadius: '10px',
        position: '-webkit-sticky',
        position: 'sticky !important',
        top: 0,
        alignSelf: 'flex-start',
      }}
    >
      <Typography fontWeight={700} sx={styling.title}>
        Detail Program
      </Typography>
      <Divider />
      {listMenu?.map((item, idx) => (
        <Link href={'#' + item.link} underline="none" key={idx}>
          <Typography
            fontWeight={400}
            variant="body2"
            color={'sc_gray.dark'}
            sx={styling.text}
            className={item.link}
          >
            {item.name}
          </Typography>
        </Link>
      ))}
      {button}
    </Stack>
  );
}
