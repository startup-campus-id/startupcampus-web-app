import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyButton from '../MyButton';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';

export default function Sme({ sme, desc }) {
  const router = useRouter();
  return (
    <Stack id="sme-dan-mentor" pt={6} data-aos="fade-up">
      <AccentText>Subject Matter Expert dan Mentor</AccentText>
      <MyTitle gutterBottom>
        Belajar Langsung dari <HighlightText>Ahlinya</HighlightText>
      </MyTitle>
      <MyDesc>
        {router.asPath.match('founder')
          ? 'Belajar langsung dari para pakar dan mentor yang terjun langsung dalam mengelola startup.'
          : desc ??
            'Belajar langsung dengan pakar dan mentor yang berpengalaman dari berbagai perusahaan terkemuka.'}
      </MyDesc>
      <Grid container my={3} sx={{ position: 'relative' }}>
        <Swiper
          modules={[Pagination, Navigation, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.sme-swipe-left',
            nextEl: '.sme-swipe-right',
          }}
          spaceBetween={100}
          slidesPerView={1}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides
          centeredSlidesBounds
          breakpoints={{
            690: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {sme?.map((val, idx) => (
            <SwiperSlide key={idx}>
              <Grid item xs={12}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      filter:
                        'drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))',
                      width: { xs: '100%', sm: 300 },
                      height: 300,
                      backgroundImage: `url(${
                        val.img ?? '/default-image.png'
                      })`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                    }}
                  />
                  <Stack
                    spacing={3}
                    width={{ xs: '100%', sm: 600 }}
                    py={1}
                    justifyContent="space-between"
                  >
                    <Stack>
                      <Typography
                        fontWeight={700}
                        color={'sc_blue.main'}
                        variant={'h6'}
                      >
                        {val.name}
                      </Typography>
                      <Typography
                        fontWeight={400}
                        color={'sc_gray.dark'}
                        variant={'body2'}
                      >
                        {val.position}
                      </Typography>
                    </Stack>
                    <Typography variant={'body1'}>{val.description}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent={'space-between'}
                      spacing={2}
                    >
                      <Link href={val.link} underline="none">
                        <Stack
                          direction={'row'}
                          alignItems={'center'}
                          spacing={2}
                          sx={{ cursor: 'pointer', width: 'fit-content' }}
                        >
                          <Image
                            src={'/images/linkedn.svg'}
                            width={28}
                            height={28}
                          />
                          <Typography color={'sc_blue.main'} variant={'body2'}>
                            Mari mengenal {val.name} lebih dalam!
                          </Typography>
                        </Stack>
                      </Link>

                      <Stack direction="row">
                        <MyButton
                          padding={'15px 19px'}
                          borderRadius={'5px 0 0 5px'}
                          variant="contained"
                          className="sme-swipe-left"
                        >
                          <ArrowBackIosRoundedIcon />
                        </MyButton>
                        <MyButton
                          padding={'15px 19px'}
                          borderRadius={'0 5px 5px 0px'}
                          variant="contained"
                          className="sme-swipe-right"
                        >
                          <ArrowForwardIosRoundedIcon />
                        </MyButton>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Stack>
  );
}
