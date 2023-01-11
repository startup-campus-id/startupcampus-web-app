import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import useDeviceDetect, { mobileType } from '../../hooks/useDeviceDetect';
import useStudiIndepenPopup from '../../hooks/useStudiIndependenPopup';
import { BOOTCAMP_FOR_PUBLIC, KAMPUS_MERDEKA } from '../../utils/constant';
import MyButton from '../MyButton';

export default function Main({ name, desc }) {
  const router = useRouter();
  const { device } = useDeviceDetect();
  const { openSiPopup } = useStudiIndepenPopup();

  return (
    <Stack
      height={'100vh'}
      justifyContent={'center'}
      spacing={3}
      zIndex={2}
      position="relative"
    >
      <Typography color="white">
        Siap #MahirDigital,{' '}
        {router.asPath.match('founder') ? 'Siap Menjadi' : 'Siap Jadi Ahli'}{' '}
      </Typography>
      <Typography color="white" fontWeight={700} variant="h3">
        {name}
      </Typography>
      <Typography
        color="white"
        width={device == mobileType.mobile ? undefined : '550px'}
      >
        {desc}
      </Typography>
      <Stack direction="row" spacing={2}>
        <MyButton variant="outlined" color="sc_white" onClick={openSiPopup}>
          Kampus Merdeka
        </MyButton>
        <Link href={BOOTCAMP_FOR_PUBLIC} underline="none" passHref>
          <MyButton color="sc_blue">Bootcamp for Public</MyButton>
        </Link>
      </Stack>
    </Stack>
  );
}
