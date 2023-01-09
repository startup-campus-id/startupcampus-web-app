import { Grid, Typography } from '@mui/material';
import AccentText from 'components/AccentText';
import MyLink from 'components/MyLink';
import Link from 'next/link';
import React from 'react';

import { GCC_URL } from '../../sc.config';
import HighlightText from '../HighlightText';
import MyTitle from '../MyTitle';
import WordBreak from '../WordBreak';
import BeasiswaTimeline from './BeasiswaTimeline';

export default function BeasiswaJadwal() {
  return (
    <Grid container id="alur-pendaftaran">
      <Grid item xs={12} md={7}>
        <AccentText variant="black">Alur Pendaftaran</AccentText>
        <MyTitle gutterBottom mt={1.5} lineHeight={1.5}>
          <HighlightText variant="yellow" width="-10%">
            Jadwal
          </HighlightText>{' '}
          Program Beasiswa Google Career Certificates
        </MyTitle>
        <Typography
          variant={'body2'}
          mt={5}
          color="sc_gray.light"
          fontSize={16}
          lineHeight={1.8}
        >
          Beasiswa{' '}
          <MyLink link={GCC_URL} variant="black">
            Google Career Certificate
          </MyLink>
          , adalah program beasiswa pelatihan daring selama 3 bulan yang telah
          disertifikasi Google.
        </Typography>
        <Typography variant={'body2'} my={4}>
          Berikut tahapan pendaftaran yang akan kamu lewati:
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <BeasiswaTimeline />
      </Grid>
    </Grid>
  );
}
