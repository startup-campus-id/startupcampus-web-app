import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { REGIST_BEASISWA_GOOGLE_URL } from '../../sc.config';
import MyButton from '../MyButton';
import WordBreak from '../WordBreak';

export default function BeasiswaHero({ name }) {
  return (
    <Stack
      spacing={5}
      height={'100vh'}
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontWeight={700} color="white">
        {name}
      </Typography>
      <Typography
        fontWeight={800}
        variant={'h2'}
        color="white"
        textAlign="center"
      >
        Siap Kerja dengan Google <WordBreak /> Career Certificates
      </Typography>

      <Stack spacing={2}>
        <Typography color="white" textAlign="center">
          Raih karier impianmu di bidang Data Analitik hanya dalam waktu 3
          bulan!
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          width="100%"
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="row" spacing={1}>
            <CheckCircleIcon sx={{ color: '#fff' }} />
            <Typography color="white">Tidak perlu pengalaman</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <CheckCircleIcon sx={{ color: '#fff' }} />
            <Typography color="white">Jalur menuju karier impian</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} width="100%" alignItems="center">
        <Typography fontWeight={700} color={'white'} textAlign="center">
          Batch Selanjutnya: 20 Februari 2023
        </Typography>

        <Stack
          sx={{
            zIndex: 1,
            width: { xs: '90%', sm: '60%' },
            px: 2,
            py: 1,
            backgroundColor: 'white',
            borderRadius: 35,
            position: 'relative',
            '&::before': {
              zIndex: 0,
              top: 0,
              left: 0,
              content: "''",
              position: 'absolute',
              width: '87%',
              height: '100%',
              backgroundColor: 'sc_yellow.main',
              borderRadius: 35,
            },
          }}
        >
          <Typography fontWeight={700} zIndex={2}>
            87% Kuota Pendaftaran Sudah Terisi
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Link href={REGIST_BEASISWA_GOOGLE_URL} passHref>
          <MyButton color="sc_yellow">
            <Typography fontWeight={700}>Daftar Beasiswa</Typography>
          </MyButton>
        </Link>
      </Stack>
    </Stack>
  );
}
