import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";
import Card from "../Card";
import HighlightText from "../HighlightText";
import WordBreak from "../WordBreak";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MyButton from "../MyButton";

function Section7({ testimoni, title7 }) {
  // console.log(testimoni);
  const swiper = useSwiper();
  return (
    <Grid container my={9} pt={4}>
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="h4" fontWeight={700}>
          Dan Ini <HighlightText width="-2%">Tanggapan</HighlightText> Mereka
          <WordBreak />
          Tentang Startup Campus
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display={{ xs: "none", md: "flex" }}
        justifyContent={"flex-end"}
        data-aos="fade-left"
      >
        <MyButton
          padding={"15px 19px"}
          color={"sc_sky"}
          borderRadius={"5px 0 0 5px"}
          variant="contained"
          className="swipe-left"
          onClick={() => swiper?.slidePrev()}
        >
          <ArrowBackIosRoundedIcon />
        </MyButton>
        <MyButton
          padding={"15px 19px"}
          borderRadius={"0 5px 5px 0px"}
          variant="contained"
          className="swipe-right"
          onClick={() => swiper?.slideNext()}
        >
          <ArrowForwardIosRoundedIcon />
        </MyButton>
      </Grid>
      <Grid item xs={12} data-aos="fade-up" p={{ xs: 2, md: 4 }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swipe-left",
            nextEl: ".swipe-right",
          }}
          className="testimoni-swiper"
          spaceBetween={100}
          breakpoints={{
            690: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            1050: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {testimoni
            ?.slice(0)
            .reverse()
            .map((item, id) => {
              const img = item.fields?.fotoTestimoni?.fields.file.url;
              return (
                <SwiperSlide key={id} className="testimoni-slide">
                  <Stack
                    mx={{ xs: undefined, md: 1 }}
                    my={{ xs: undefined, md: 1 }}
                    mb= {4}
                    justifyContent="space-between"
                    spacing={3}
                    p={4}
                    sx={{
                      background: "#FFFFFF",
                      boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
                      borderRadius: "20px",
                      // width: 575,
                      // height: 371,
                    }}
                  >
                    <Stack>
                      <Typography
                        variant="h6"
                        component="h1"
                        color="sc_blue.main"
                        fontWeight={700}
                      >
                        {item.fields.title}
                      </Typography>

                      <Typography variant="body1" color="sc_gray.dark">
                        {item.fields.description}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        alt={item.fields.namaTestimoni}
                        src={img ? `https:` + img : null}
                      />
                      <Stack>
                        <Typography
                          variant="h6"
                          color="sc_blue.main"
                          fontWeight={700}
                        >
                          {item.fields.namaTestimoni}
                        </Typography>
                        <Typography variant="body2" color="sc_gray.dark">
                          {item.fields.pekerjaan}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Grid>
      {/* <Grid item xs={12} py={2} data-aos="fade-left">
        <Splide
          options={{
            perPage: 2,
            rewind: true,
            gap: 4,
            breakpoints: {
              1000: {
                perPage: 2,
              },
              640: {
                perPage: 1,
                gap: 2,
              },
            },
          }}
          aria-label="Starup-Class"
        >
          {testimoni?.map((item, id) => (
            <SplideSlide key={id}>
              <Stack
                my={4}
                mx={1}
                spacing={3}
                p={4}
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
                  borderRadius: "20px",
                }}
              >
                <Typography variant="h6" color="sc_blue.main" fontWeight={700}>
                  {item.fields.title}
                </Typography>
                <Typography variant="body1" color="sc_gray.dark">
                  {item.fields.description}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    alt={item.fields.namaTestimoni}
                    src={`https:${item.fields.logo?.fields.file.url}`}
                  />
                  <Stack>
                    <Typography
                      variant="h6"
                      color="sc_blue.main"
                      fontWeight={700}
                    >
                      {item.fields.namaTestimoni}
                    </Typography>
                    <Typography variant="body2" color="sc_gray.dark">
                      {item.fields.pekerjaan}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </SplideSlide>
          ))}
        </Splide>
      </Grid> */}
    </Grid>
  );
}

export default Section7;
