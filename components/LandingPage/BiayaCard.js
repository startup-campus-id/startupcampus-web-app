import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckIcon from '@mui/icons-material/Check';
import { Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { benefitKampusMerdeka } from '../../content/biaya';
import { KAMPUS_MERDEKA } from '../../utils/constant';
import MyButton from '../MyButton';
import MyDesc from '../MyDesc';

const CheckWithLabel = ({ label }) => (
  <Stack direction="row" alignItems="start" spacing={1}>
    <CheckIcon color={'sc_blue'} />
    <Typography>{label ?? 'This is label'}</Typography>
  </Stack>
);

export default function BiayaCard({
  icon,
  title,
  price,
  link,
  recommended = false,
}) {
  const router = useRouter();
  return (
    <Stack
      sx={{
        backgroundColor:
          recommended && router.pathname == '/' ? '#D9E6F8' : 'unset',
      }}
      justifyContent="end"
      borderRadius="10px"
    >
      {recommended && router.pathname == '/' && (
        <Stack py={1} alignItems="center">
          <Typography fontWeight={700} color={'sc_blue.main'}>
            PILIHAN TERBAIK
          </Typography>
        </Stack>
      )}
      <Stack
        p={3}
        spacing={3}
        border={`1px solid ${recommended ? '#0056D2' : '#BDBDBD'}`}
        borderRadius="10px"
        sx={{ backgroundColor: '#FFF' }}
      >
        <Stack direction="row" width={'100%'} spacing={2} alignItems="center">
          {icon ?? <AccountBalanceIcon />}
          <Typography fontWeight={700} variant={'h6'}>
            {' '}
            {title ?? 'Kampus Merdeka'}{' '}
          </Typography>
        </Stack>

        <Stack>
          {
            <Typography color="sc_gray.main">
              <span style={{ textDecoration: 'line-through' }}>
                Rp20.000.000
              </span>
            </Typography>
          }
          <Typography fontWeight={700} color="sc_blue.main" variant="h5">
            {price ?? 'Gratis'}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography color="sc_gray.main">Durasi Belajar</Typography>
          <CheckWithLabel label={'4 Bulan Intensif (900 jam)'} />
        </Stack>

        <Stack
          spacing={2}
          py={4}
          sx={{
            borderTop: '1px dashed #BDBDBD',
            borderBottom: '1px dashed #BDBDBD',
          }}
        >
          <Typography color="sc_gray.main">Apa yang Kamu Dapat</Typography>
          {benefitKampusMerdeka.map((v, i) => (
            <CheckWithLabel key={i} label={v} />
          ))}
        </Stack>
        <Stack sx={{ marginTop: '80px !important' }}>
          <Link href={link ?? KAMPUS_MERDEKA} passHref>
            <MyButton variant={recommended ? 'contained' : 'outlined'}>
              <Typography fontWeight={700} color="inherit" variant="h6">
                {'Daftar Sekarang'}
              </Typography>
            </MyButton>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
