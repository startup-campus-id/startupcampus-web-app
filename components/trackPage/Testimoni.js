import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyTitle from "../MyTitle";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Link from "next/link";
import MyButton from "../MyButton";
import Image from "next/image";

export default function Testimoni({ nickname, data }) {
  const swiper = useSwiper();

  return (
    <Stack id="testimoni-alumni" data-aos="fade-up">
      <AccentText>Testimoni Alumni</AccentText>
      <MyTitle gutterBottom>
        <HighlightText>Kata Mereka</HighlightText> tentang Trek {nickname}{" "}
        Startup Campus
      </MyTitle>
      <Grid container my={3} sx={{ position: "relative" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swipe-left",
            nextEl: ".swipe-right",
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
          {data?.map((val, idx) => (
            <SwiperSlide key={idx}>
              <Grid item xs={12}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
                      width: { xs: "100%", sm: 300 },
                      height: 300,
                      backgroundImage: `url(${
                        val.img ?? "/default-image.png"
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                    }}
                  />
                  <Stack
                    spacing={3}
                    width={{ xs: "100%", sm: 600 }}
                    py={1}
                    justifyContent="space-between"
                    alignItems={"start"}
                  >
                    <Image
                      src={"/images/ic_kutip.svg"}
                      width={60}
                      height={60}
                    />
                    <Typography variant={"body1"}>{val.story}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent={"space-between"}
                      spacing={2}
                      width={"100%"}
                    >
                      <Stack spacing={1}>
                        <Typography fontWeight={700}>{val.name}</Typography>
                        <Typography variant="body2" color={"sc_gray.dark"}>
                          {val.ptn}
                        </Typography>
                      </Stack>

                      <Stack direction="row">
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
