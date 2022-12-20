import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import HighlightText from "../HighlightText";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import Card from "../Card";
import WordBreak from "../WordBreak";
import MyButton from "../MyButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import useDeviceDetect from "../../hooks/useDeviceDetect";

function Section3({ course }) {
  const swiper = useSwiper();
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);
  const { device } = useDeviceDetect();
  useEffect(() => {
    const options = {
      strings: [
        "Founder",
        "UI/UX Designer",
        "Data Scientist",
        "AI Specialist",
        "Backend Engineer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  const linkCourse = [
    "the-founder",
    "data-science",
    "uiux-design",
    "artificial-intelligence",
    "backend-engineer",
  ];

  return (
    <Grid container my={6} spacing={2}>
      <Grid item xs={12} data-aos="fade-right" id={"program"}>
        <Typography variant="h4" fontWeight={700}>
          <HighlightText width="-2%">Kamu Bisa</HighlightText> Menjadi{" "}
          <Typography display={{ xs: "block", md: "none" }} />
          <span ref={el} />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} data-aos="fade-right">
        <Typography variant="body1" color={"sc_gray.dark"} mr={3}>
          Pilih trek sesuai minatmu sekarang juga!
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={3}
        display={{xs:"none", sm: "flex"}}
        justifyContent={"flex-end"}
        data-aos="fade-left"
      >
        <MyButton
          padding={device === "mobile" ? "10px 10px" : "15px 19px"}
          color={"sc_sky"}
          borderRadius={"5px 0 0 5px"}
          variant="contained"
          className="swipe-left"
          onClick={() => swiper?.slidePrev()}
        >
          <ArrowBackIosRoundedIcon />
        </MyButton>
        <MyButton
          padding={device === "mobile" ? "10px 10px" : "15px 19px"}
          borderRadius={"0 5px 5px 0px"}
          variant="contained"
          className="swipe-right"
          onClick={() => swiper?.slideNext()}
        >
          <ArrowForwardIosRoundedIcon />
        </MyButton>
      </Grid>
      <Grid item xs={12} data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="course-swiper"
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swipe-left",
            nextEl: ".swipe-right",
          }}
          breakpoints={{
            690: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {course?.map((value, idx) => {
            const item = value.fields;
            const img = item.image.fields.file;
            return (
              <SwiperSlide key={idx}>
                <Card
                  img={img.url}
                  title={item.title}
                  desc={item.desc}
                  bulan={item.durasi}
                  level={item.level}
                  tanggal={item.startDate}
                  online={item.isOnline}
                  link={"/track/" + linkCourse[idx]}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default Section3;
