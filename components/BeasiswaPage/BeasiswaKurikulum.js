import { Box, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyButton from '../MyButton';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';

export default function BeasiswaKurikulum({ kurikulum }) {
  const [content, setContent] = useState(5);
  const router = useRouter();
  const isUX = router.asPath.includes('ux-design');

  // TODO mengganti Typography sesuai dengan path yang akan diambil
  return (
    <Box id="kurikulum" pt={6}>
      <AccentText variant="black">Kurikulum</AccentText>
      <MyTitle gutterBottom mt={1.5}>
        Materi yang akan kamu{' '}
        <HighlightText variant="yellow" width="-7.5%">
          Dapatkan
        </HighlightText>
      </MyTitle>
      <Typography
        variant={'body2'}
        my={4}
        color="sc_gray.light"
        fontSize={16}
        lineHeight={1.8}
      >
        {isUX
          ? 'Pelajari dasar-dasar UX design dengan memahami kebutuhan pengguna, membangun wireframe dan prototipe, hingga melakukan riset desain secara lengkap'
          : 'Pelajari cara menganalisis dan memproses data untuk membantu strategi bisnis perusahaan melalui 8 materi berikut:'}
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
                  backgroundColor: 'sc_yellow.main',
                  borderRadius: '100%',
                  width: 32,
                  height: 32,
                  flexShrink: 0,
                }}
              >
                <Typography color={'sc_black.dark'}>{i + 1}</Typography>
              </Stack>

              <Stack spacing={1}>
                <Typography
                  variant={'h6'}
                  sx={{
                    fontSize: 24,
                    fontWeight: '500',
                    fontStyle: 'normal',
                    letterSpacing: -0.29,
                    color: '#121212',
                  }}
                >
                  {v.title}
                </Typography>
                <MyDesc type="gray_light">{v.desc}</MyDesc>
              </Stack>
            </Stack>
            <Divider />
          </Stack>
        ))}

        <Stack alignItems="center">
          {content < kurikulum.length ? (
            <MyButton
              color="sc_yellow"
              textColor={'sc_black.dark'}
              hover={{
                backgroundColor: '#B67A02',
                color: '#FFFFFF',
              }}
              onClick={() => setContent((prev) => prev + 2)}
            >
              <Typography fontWeight={500} fontSize={14} fontStyle={'normal'}>
                Lihat lebih banyak
              </Typography>
            </MyButton>
          ) : (
            <MyButton
              color="sc_yellow"
              textColor={'sc_black.dark'}
              hover={{
                backgroundColor: '#B67A02',
                color: '#FFFFFF',
              }}
              onClick={() => setContent(5)}
            >
              <Typography fontWeight={500} fontSize={14} fontStyle={'normal'}>
                Lihat lebih sedikit
              </Typography>
            </MyButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
