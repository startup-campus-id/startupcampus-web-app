import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { GCC_URL } from '../../sc.config';
import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';

export default function BeasiswaAbout({ name, materi }) {
  return (
    <Box id="tentang-program" pt={6}>
      <AccentText>Tentang Program</AccentText>
      <MyTitle gutterBottom>
        Mengapa <HighlightText>Harus</HighlightText> Belajar {name} ?
      </MyTitle>
      <Grid container my={4} spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant={'body2'}>
            Kabar baik! Startup Campus bersama{' '}
            <Link href={GCC_URL} passHref>
              <Typography variant={'body2'} component="a" color="sc_blue.main">
                Google Career Certificate(GCC){'  '}
              </Typography>
            </Link>
            akan memberikan beasiswa pelatihan daring di bidang Data Analitik
            untuk 200 orang di seluruh Indonesia.
          </Typography>

          <Typography variant={'body2'} my={4}>
            Materi yang akan dipelajari mencakup:
          </Typography>

          <Stack spacing={4}>
            {materi?.map((v, i) => (
              <Stack direction="row" spacing={1} key={i}>
                <CheckCircleIcon sx={{ color: 'sc_blue.main' }} />
                <MyDesc>{v}</MyDesc>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              minHeight: 570,
              backgroundImage: 'url(/images/writingperson.png)',
              backgroundSize: 'cover',
              overflow: 'hidden',
              borderRadius: 8,
              filter: 'drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
