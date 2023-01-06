import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyButton from '../MyButton';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';

export default function BeasiswaKurikulum({ kurikulum }) {
  const [content, setContent] = useState(5);
  return (
    <Box id="kurikulum" pt={6}>
      <AccentText>Kurikulum</AccentText>
      <MyTitle gutterBottom>
        Materi yang akan kamu{' '}
        <HighlightText width="-2%">Dapatkan</HighlightText>
      </MyTitle>
      <Typography variant={'body2'} my={4}>
        Pelajari cara menganalisis dan memproses data untuk membantu strategi
        bisnis perusahaan melalui 8 materi berikut:
      </Typography>
      <Stack
        spacing={2}
        position="relative"
        sx={{
          '&::before': {
            display: content >= kurikulum.length ? 'none' : 'block',
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: '50%',
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
          },
        }}
      >
        {kurikulum?.slice(0, content).map((v, i) => (
          <Stack spacing={4} key={i}>
            <Stack direction="row" spacing={2}>
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                  backgroundColor: 'sc_blue.main',
                  borderRadius: '100%',
                  width: 32,
                  height: 32,
                  flexShrink: 0,
                }}
              >
                <Typography color={'white'}>{i + 1}</Typography>
              </Stack>

              <Stack spacing={1}>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  color="sc_blue.main"
                >
                  {v.title}
                </Typography>
                <MyDesc>{v.desc}</MyDesc>
              </Stack>
            </Stack>
            <Divider />
          </Stack>
        ))}

        <Stack alignItems="center">
          {content < kurikulum.length ? (
            <MyButton onClick={() => setContent((prev) => prev + 2)}>
              Lihat lebih banyak
            </MyButton>
          ) : (
            <MyButton onClick={() => setContent(5)}>
              Lihat lebih sedikit
            </MyButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
