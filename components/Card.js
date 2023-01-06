import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

import MyButton from './MyButton';

const Card = ({ img, title, desc, level, bulan, tanggal, online, link }) => {
  const [cardHover, setCardHover] = useState(false);
  return (
    <Stack
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      borderRadius={'16px'}
      overflow="hidden"
      width={{ sx: undefined, md: '369px' }}
      border={'1px solid rgba(224, 228, 230, 1)'}
      sx={{
        boxShadow: cardHover
          ? '0px 16px 40px rgba(112, 144, 176, 0.2)'
          : 'unset',
        height: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 200,
          overflow: 'hidden',
          '&::before': {
            content: "''",
            zIndex: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${img ?? '/images/FO.png'})`,
            backgroundSize: 'cover',
            transform: cardHover ? 'scale(1.2)' : 'scale(1)',
            transition: '.3s',
          },
          '&::after': {
            content: "''",
            zIndex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(179.76deg, rgba(43, 44, 39, 0) 25.6%, #2B2C27 99.79%)',
          },
        }}
      />

      <Stack p={4} justifyContent="space-between" spacing={2} height="100%">
        <Typography
          variant="h4"
          fontWeight={700}
          color={cardHover ? 'sc_blue.main' : null}
        >
          {title ?? 'The Founder'}
        </Typography>
        <Typography variant="body2" color="sc_gray.dark" className="text_temp">
          {desc ??
            'Membangun startup dari awal hingga menjadi MVP dan melakukan pitching di depan calon investor'}
        </Typography>
        <Box>
          <Chip
            sx={{ mr: 1, mb: 1 }}
            label={level ?? 'Semua level'}
            variant="outlined"
          />
          <Chip
            sx={{ mr: 1, mb: 1 }}
            label={bulan ?? 'Berapa bulan'}
            variant="outlined"
          />
          <Chip
            sx={{ mr: 1 }}
            label={tanggal ?? 'Tanggal'}
            variant="outlined"
          />
          <Chip label={online ?? 'Online'} variant="outlined" />
        </Box>

        <Link href={link.match('backend') ? '' : link}>
          <MyButton
            color={'sc_blue'}
            disabled={link.match('backend') ? true : false}
          >
            Pelajari lebih lanjut
          </MyButton>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Card;
