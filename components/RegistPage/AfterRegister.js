import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Stack, Typography } from '@mui/material';
import React from 'react';

import MyInput from './MyInput';
import MySelect from './MySelect';

const media = [
  'Instagram',
  'Google Search',
  'Teman/Kerabat/Saudara',
  'LinkedIn',
  'Twitter',
];

const AfterRegister = () => {
  return (
    <Stack spacing={3}>
      <Typography fontWeight={700} color={'sc_gray.dark'}>
        Terimakasih!
      </Typography>
      <Typography fontWeight={700} color={'sc_gray.dark'}>
        Tim kami akan segera menghubungi kamu untuk langkah selanjutnya.
      </Typography>
    </Stack>
  );
};

export default AfterRegister;
