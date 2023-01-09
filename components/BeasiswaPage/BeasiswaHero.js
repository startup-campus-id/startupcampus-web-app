import DoneAllIcon from '@mui/icons-material/DoneAll';
import EastIcon from '@mui/icons-material/East';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import BoxHighlight from 'components/BoxHighlight';
import MyButton from 'components/MyButton';
import Link from 'next/link';
import React from 'react';

import { REGIST_BEASISWA_GOOGLE_URL } from '../../sc.config';
import WordBreak from '../WordBreak';

export default function BeasiswaHero({ name }) {
  const checkList = [
    'Tidak perlu pengalaman',
    'Jalur menuju karier impian',
    'GRATIS, tanpa biaya pendaftaran',
  ];
  const rightUpperEllipsis = {
    position: 'absolute',
    top: 0,
    right: 0,
  };
  const leftUpperEllipsis = {
    position: 'absolute',
    top: -50,
    left: 0,
  };
  return (
    <Stack
      spacing={5}
      height={'100vh'}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={rightUpperEllipsis}
        height={{ xs: 250, sm: 300, md: 400, lg: 550, xl: 600 }}
        component="img"
        src="/images/gcc_hero_right.png"
      />
      <Box
        sx={leftUpperEllipsis}
        height={{ xs: 225, sm: 300, md: 330, lg: 450, xl: 500 }}
        component="img"
        src="/images/gcc_hero_left.png"
      />
      <Box
        component={'span'}
        sx={{
          padding: '4px 16px',
          backgroundColor: '#fdb72b',
          borderRadius: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          fontWeight={500}
          color="sc_black.dark"
          fontSize={20}
          textAlign="center"
        >
          Beasiswa {name}
        </Typography>
      </Box>
      <Typography
        fontWeight={'bold'}
        fontStyle={'normal'}
        variant={'h2'}
        color="sc_black.dark"
        textAlign="center"
      >
        <BoxHighlight>Siap Kerja</BoxHighlight> dengan Google <WordBreak />{' '}
        Career Certificates
      </Typography>

      <Stack spacing={2}>
        <Typography
          color="sc_gray.light"
          textAlign="center"
          fontSize={18}
          fontWeight={500}
          fontStyle="normal"
        >
          Raih karier impianmu di bidang Data Analitik hanya dalam waktu 3
          bulan!
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          width="100%"
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="center"
          alignItems="center"
          pt={4}
        >
          {checkList.map((v, _) => (
            <Stack direction="row" spacing={1}>
              <DoneAllIcon sx={{ color: 'sc_blue.main' }} />
              <Typography color="sc_blue.main">{v}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={2} width="100%" alignItems="center" pt={4}>
        <Typography
          fontWeight={500}
          fontSize={14}
          color={'sc_gray.light'}
          textAlign="center"
          marginBottom={1}
        >
          Batch Selanjutnya: 20 Februari 2023
        </Typography>

        <Link href={REGIST_BEASISWA_GOOGLE_URL} passHref>
          <MyButton
            color="sc_yellow"
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
              Daftar Beasiswa{' '}
            </Typography>{' '}
            <EastIcon />
          </MyButton>
        </Link>
      </Stack>
    </Stack>
  );
}
