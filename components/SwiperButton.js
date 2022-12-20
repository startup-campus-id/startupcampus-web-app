import useDeviceDetect from "../hooks/useDeviceDetect";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useSwiper, useSwiperSlide } from "swiper/react";
import MyButton from "./MyButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const SwiperButton = ({ controlledSwiper, isBeginning, isEnd, ...args }) => {
  const { device } = useDeviceDetect();

  return (
    <Grid
      item
      display={{ xs: "none", md: "flex" }}
      justifyContent={"flex-end"}
      data-aos="fade-left"
      {...args}
    >
      <MyButton
        padding={device == "mobile" ? "10px 10px" : "15px 19px"}
        color={isBeginning ? "sc_sky" : "sc_blue"}
        borderRadius={"5px 0 0 5px"}
        variant="contained"
        onClick={() => {
          controlledSwiper.slidePrev()
        }}
      >
        <ArrowBackIosRoundedIcon />
      </MyButton>
      <MyButton
        padding={device == "mobile" ? "10px 10px" : "15px 19px"}
        borderRadius={"0 5px 5px 0px"}
        color={isEnd ? "sc_sky" : "sc_blue"}
        variant="contained"
        onClick={() => {
          controlledSwiper.slideNext()
        }}
      >
        <ArrowForwardIosRoundedIcon />
      </MyButton>
    </Grid>
  );
}

export default SwiperButton
