
import EastIcon from '@mui/icons-material/East';
import { Box, Grid, Stack, Typography } from '@mui/material';
import MyLink from 'components/MyLink';
import Link from 'next/link';
import React from 'react';

import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyTitle from '../MyTitle';
import MyButton from '../MyButton';
import { REGIST_BEASISWA_GOOGLE_URL } from 'sc.config';
import CircleHighlight from 'components/CircleHighlight';

export default function BeasiswaSertifikat({ name, materi }) {
  return (
    <Grid container mb={{xs: 30, md:0}}>
      <Grid item xs={12} md={6} justifyContent="center" alignItems="center" display="flex">
        <Stack maxWidth={450}>
          <MyTitle gutterBottom mb={5} sx={{
            fontWeight: "bold",
            fontStyle: "normal",
            color: "sc_black.dark",
            textAlign: {
              xs: "center",
              md: "left",
            },
            lineHeight: 1.5,
            letterSpacing: -0.54,
          }}>
            Daftar Kelas Beasiswa
            Google secara <CircleHighlight width={{ xs: 100, md: 135 }} top={{ xs: "-15%", md: undefined }}>GRATIS</CircleHighlight> dan
            Mulai Kariermu Di sini!
          </MyTitle>
          <Link href={REGIST_BEASISWA_GOOGLE_URL} passHref>
            <MyButton
              color="sc_yellow"
              width={{
                xs: "100%",
                md: "60%",
              }}
              textColor={'sc_black.dark'}
              hover={{
                backgroundColor: '#B67A02',
                color: '#FFFFFF',
              }}
            >
              <Typography
                fontWeight={500}
                fontSize={17}
                fontStyle={'normal'}
                marginRight={1}
              >
                Daftar Sekarang{' '}
              </Typography>{' '}
              <EastIcon />
            </MyButton>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
        <Box
          component="img"
          maxWidth={800}
          width="auto"
          height="100%"
          alt="Sertifikat Google"
          src="/images/beasiswa_footer.png"
        />
      </Grid>
    </Grid>
  );
}
