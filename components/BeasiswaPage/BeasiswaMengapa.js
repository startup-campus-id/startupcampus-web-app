import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

export default function BeasiswaMengapa({ name, materi }) {
  return (
    <Box id="beasiswa-gcc" pt={6}>
      <AccentText variant="black">
        Beasiswa Google Career Certificate
      </AccentText>
      <MyTitle gutterBottom mt={1.5}>
        Mengapa <HighlightText variant="yellow">Harus</HighlightText> Google
        Career Certificate?
      </MyTitle>
      <Grid container my={4} spacing={3} direction="row-reverse">
        <Grid item xs={12} md={6}>
          <Typography
            variant={'body2'}
            color="sc_gray.light"
            fontSize={16}
            lineHeight={1.8}
          >
            Dengan dukungan{' '}
            <MyLink link={GCC_URL} variant="black">
              Google Career Certificate (GCC)
            </MyLink>
            , Startup Campus meluncurkan program beasiswa untuk menunjang para
            pencari kerja dan pemuda di seluruh Indonesia khususnya bagian timur
            yang kurang terakomodasi.
          </Typography>

          <Typography
            variant={'body2'}
            my={4}
            color="sc_gray.light"
            fontSize={16}
            lineHeight={1.8}
          >
            Beasiswa tersebut mencakup dukungan berupa:
          </Typography>

          <Stack spacing={4}>
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
              minHeight: 570,
              backgroundImage: 'url(/images/beasiswa-why-gcc.png)',
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
