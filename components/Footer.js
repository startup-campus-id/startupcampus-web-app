import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import { tagline } from '../content/tagline';
import { TaglineContext } from '../pages/_app';

const sosmed = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/startupcampus.id/?hl=en',
  },
  {
    name: 'Linkedin',
    link: 'https://id.linkedin.com/school/startupcampusid/',
  },
  {
    name: 'Tiktok',
    link: 'https://www.tiktok.com/@startupcampusofficial?traffic_type=others&referer_url=amp_startupcampus&referer_video_id=7088996923700645146',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/c/StartupCampus',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/startupcampusidn/',
  },
];

const siteMap = [
  { name: 'Program', link: '/#program' },
  { name: "FAQ's", link: '/#faq' },
];

const kontak = [
  { name: '082126331142', link: null },
  { name: 'info@startupcampus.id', link: null },
  {
    name: 'YAPI Center Coworking Space, Jl. Sunan Giri No. 1, Kel. Rawamangun, Kec. Pulogadung, Jakarta Timur, DKI Jakarta, Kodepos 13220',
    link: null,
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <Grid
      component={'footer'}
      container
      sx={{
        backgroundColor:
          router.pathname.match('/track') || router.pathname.match('/beasiswa')
            ? 'white'
            : 'sc_blue.main',
      }}
    >
      <Container
        sx={{
          borderBottom: `1px solid ${
            router.pathname.match('/track') ||
            router.pathname.match('/beasiswa')
              ? '#BDBDBD'
              : 'white'
          }`,
          borderTop: `1px solid ${
            router.pathname.match('/track') ||
            router.pathname.match('/beasiswa')
              ? '#BDBDBD'
              : 'white'
          }`,
        }}
      >
        <Grid container xs={12} my={4} spacing={6} justifyContent="center">
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Box>
                <Image
                  src={
                    router.pathname.match('/track') ||
                    router.pathname.match('/beasiswa')
                      ? '/images/Startup Campus Gray Logo.svg'
                      : '/images/Startup Campus White Logo.png'
                  }
                  width={110}
                  height={36}
                  alt={'SC-Logo-White'}
                />
              </Box>
              <Typography
                variant="body2"
                color={
                  router.pathname.match('/track') ||
                  router.pathname.match('/beasiswa')
                    ? 'sc_gray.dark'
                    : 'white'
                }
              >
                {tagline.footer}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                component={'h1'}
                fontWeight={700}
                color={
                  router.pathname.match('/track') ||
                  router.pathname.match('/beasiswa')
                    ? 'sc_gray.dark'
                    : 'white'
                }
                sx={{ opacity: 0.5 }}
              >
                Site Map
              </Typography>
              <Stack spacing={1}>
                {siteMap.map((v, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    color={
                      router.pathname.match('/track') ||
                      router.pathname.match('/beasiswa')
                        ? 'sc_gray.dark'
                        : 'white'
                    }
                  >
                    <Link href={v.link} underline="none">
                      {v.name}
                    </Link>
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                component={'h1'}
                fontWeight={700}
                color={
                  router.pathname.match('/track') ||
                  router.pathname.match('/beasiswa')
                    ? 'sc_gray.dark'
                    : 'white'
                }
                sx={{ opacity: 0.5 }}
              >
                Kontak
              </Typography>
              <Stack spacing={1}>
                {kontak.map((v, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    color={
                      router.pathname.match('/track') ||
                      router.pathname.match('/beasiswa')
                        ? 'sc_gray.dark'
                        : 'white'
                    }
                  >
                    {v.link ? (
                      <Link href={v.link} underline="none">
                        {v.name}
                      </Link>
                    ) : (
                      v.name
                    )}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                fontWeight={700}
                component={'h1'}
                color={
                  router.pathname.match('/track') ||
                  router.pathname.match('/beasiswa')
                    ? 'sc_gray.dark'
                    : 'white'
                }
                sx={{ opacity: 0.5 }}
              >
                Ikuti Kami
              </Typography>
              <Stack spacing={1}>
                {sosmed.map((v, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    color={
                      router.pathname.match('/track') ||
                      router.pathname.match('/beasiswa')
                        ? 'sc_gray.dark'
                        : 'white'
                    }
                  >
                    <Link href={v.link} underline="none">
                      {v.name}
                    </Link>
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12} py={3}>
        <Typography
          textAlign={'center'}
          variant="subtitle2"
          color={
            router.pathname.match('/track') ||
            router.pathname.match('/beasiswa')
              ? 'sc_gray.dark'
              : 'white'
          }
        >
          ©Startup Campus. All right reserved, 2022.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
