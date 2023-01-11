import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Box, Grid, Stack, Typography } from '@mui/material';
import MyLink from 'components/MyLink';
import Link from 'next/link';
import React from 'react';

import { GCC_URL } from '../../sc.config';
import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';
import { useRouter } from 'next/router'
export default function BeasiswaAbout({ name, materi }) {
  const router = useRouter()
  const isUX = router.asPath.includes('ux-design')

  return (
    <Box id="tentang-program" pt={6}>
      <AccentText variant={'black'}>Tentang Program</AccentText>
      <MyTitle gutterBottom mt={1.5} fontWeight={'bold'}>
        Kenapa <HighlightText variant={'yellow'}>Harus</HighlightText> Belajar{' '}
        {name}?
      </MyTitle>
      <Grid container my={4} spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={'body2'}
            color={'sc_gray.light'}
            fontSize={16}
            lineHeight={1.8}
          >
            Kabar baik! Startup Campus bersama{' '}
            <MyLink link={GCC_URL} variant="black">
              Google Career Certificate (GCC)
            </MyLink>
            {'  '}
            akan memberikan beasiswa pelatihan daring di bidang {isUX?"UX design": "data analitik"} secara{' '}
            <Typography
              component={'strong'}
              fontWeight={700}
              color="sc_black.dark"
            >
              GRATIS
            </Typography>{' '}
            untuk 200 orang di seluruh Indonesia.
          </Typography>

          <Typography variant={'body2'} fontSize={16} my={4} color={'sc_gray.light'}>
            Materi yang akan dipelajari mencakup:
          </Typography>
          <Stack spacing={3}>
            {materi?.map((v, i) => (
              <Stack direction="row" spacing={1} key={i}>
                <DoneAllIcon sx={{ color: 'sc_yellow.main' }} />
                <MyDesc type="gray_light">{v}</MyDesc>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              minHeight: 520,
              backgroundImage: name.toLowerCase().includes('ux')
                ? 'url(/images/writingperson-2.png)'
                : 'url(/images/writingperson.png)',
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
