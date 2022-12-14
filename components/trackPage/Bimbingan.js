import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ChatOutlined from '@mui/icons-material/ChatOutlined';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { bkFounder } from '../../content/bimbinganKarier';
import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';

export default function Bimbingan({ desc = ' ' }) {
  const router = useRouter();
  return (
    <Stack id="bimbingan-karier" data-aos="fade-up">
      <AccentText>Bimbingan Karier</AccentText>
      <MyTitle gutterBottom>
        Dukungan untuk Membangun Karier <HighlightText>Terbaik</HighlightText>
      </MyTitle>
      <MyDesc>{desc}</MyDesc>
      <MyDesc mt={3}>
        Dukungan yang kamu dapatkan selama di Startup Campus antara lain:
      </MyDesc>
      <Grid container my={3} spacing={4}>
        {bkFounder.map((v, i) => (
          <Grid item xs={6} md={3} key={i}>
            {v.icon}
            <Typography mt={2} variant="body2" fontWeight={700}>
              {v.title}
            </Typography>
          </Grid>
        ))}

        {/* <Grid item xs={12}>
          <Typography variant="body2" color="#2B2C27">
            Setelah kamu menjadi Alumni Program Founder Startup Campus, kamu
            dapat berjejaring dengan alumni dari program Startup Campus lain
            yang tersebar di seluruh Indonesia bahkan dunia.
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <Box
            sx={{
              height: '450px',
              width: '100%',
              backgroundImage: "url('/images/twopeopple.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 8,
              filter: 'drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))',
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
