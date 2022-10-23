import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import Link from "next/link";
import MyButton from "../MyButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function Sme({ sme }) {
  const swiper = useSwiper();
  return (
    <Stack id="sme-dan-mentor" data-aos="fade-up">
      <AccentText>Subject Matter Expert dan Mentor</AccentText>
      <MyTitle gutterBottom>
        Belajar Langsung dari <HighlightText>Ahlinya</HighlightText>
      </MyTitle>
      <MyDesc>
        Terhubung dengan Subject Matter Expert (SME) dan mentor yang
        berpengalaman dari berbagai perusahaan digital terkemuka.
      </MyDesc>
      <Grid container my={3} sx={{ position: "relative" }}>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
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
          {sme?.map((val, idx) => (
            <SwiperSlide key={idx}>
              <Grid item xs={12}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      filter:
                        "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))",
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
                  >
                    <Stack>
                      <Typography
                        fontWeight={700}
                        color={"sc_blue.main"}
                        variant={"h6"}
                      >
                        {val.name}
                      </Typography>
                      <Typography
                        fontWeight={400}
                        color={"sc_gray.dark"}
                        variant={"body2"}
                      >
                        {val.position}
                      </Typography>
                    </Stack>
                    <Typography variant={"body1"}>{val.description}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent={"space-between"}
                      spacing={2}
                    >
                      <Link href={val.link} underline="none">
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={2}
                          sx={{ cursor: "pointer", width: "fit-content" }}
                        >
                          <Image
                            src={"/images/linkedn.svg"}
                            width={28}
                            height={28}
                          />
                          <Typography color={"sc_blue.main"} variant={"body2"}>
                            Lebih dekat dengan {val.name}
                          </Typography>
                        </Stack>
                      </Link>

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
