import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

import useDeviceDetect from '../../hooks/useDeviceDetect';
import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyButton from '../MyButton';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';
import CardPorto from './CardPorto';

export default function Portofolio({ nickname, karya }) {
  const router = useRouter();
  const { device } = useDeviceDetect();
  return (
    <Stack id="portofolio-alumni" data-aos="fade-up">
      <AccentText>Portofolio Alumni</AccentText>
      <MyTitle gutterBottom>
        Karya-karya <HighlightText>Alumni</HighlightText> {nickname}
      </MyTitle>
      <MyDesc>
        Contoh hasil proyek riil alumni selama mengikuti Bootcamp trek{' '}
        {nickname} di Startup Campus{' '}
        {router.asPath.match('founder') ? ' ' : '(Coming Soon)'}
      </MyDesc>
      {router.asPath.match('founder') && (
        <Grid container my={3} sx={{ position: 'relative' }}>
          <Swiper
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.porto-swipe-left',
              nextEl: '.porto-swipe-right',
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
            {karya?.map((val, idx) => (
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
                          {val.members}
                        </Typography>
                      </Stack>
                      <Typography variant={'body1'}>{val.desc}</Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={'space-between'}
                        spacing={2}
                      >
                        <Link href={val.link} underline="none" passHref>
                          <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={2}
                            sx={{ cursor: 'pointer', width: 'fit-content' }}
                          >
                            <Image
                              src={
                                val.link.match('instagram')
                                  ? '/images/instagram.svg'
                                  : '/images/linkedn.svg'
                              }
                              width={28}
                              height={28}
                            />
                            <Typography
                              color={
                                val.link.match('instagram')
                                  ? '#C837AA'
                                  : 'sc_blue.main'
                              }
                              variant={'body2'}
                            >
                              Mari mengenal {val.name} lebih dalam!
                            </Typography>
                          </Stack>
                        </Link>

                        <Stack direction="row">
                          <MyButton
                            padding={
                              device == 'mobile' ? '10px 10px' : '15px 19px'
                            }
                            borderRadius={'5px 0 0 5px'}
                            variant="contained"
                            className="porto-swipe-left"
                          >
                            <ArrowBackIosRoundedIcon />
                          </MyButton>
                          <MyButton
                            padding={
                              device == 'mobile' ? '10px 10px' : '15px 19px'
                            }
                            borderRadius={'0 5px 5px 0px'}
                            variant="contained"
                            className="porto-swipe-right"
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
      )}
    </Stack>
  );
}
