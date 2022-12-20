import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Card from "../Card";
import HighlightText from "../HighlightText";
import WordBreak from "../WordBreak";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MyButton from "../MyButton";
import MySwiper from "../MySwiper";

function Section7({ testimoni, title7 }) {
  return (
    <Grid container my={9} pt={4}>
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="h4" fontWeight={700}>
          Dan Ini <HighlightText width="-2%">Tanggapan</HighlightText> Mereka
          <WordBreak />
          Tentang Startup Campus
        </Typography>
      </Grid>
      <MySwiper >
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
                  mb={4}
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
      </MySwiper>
    </Grid>
  );
}

export default Section7;
