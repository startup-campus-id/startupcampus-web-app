import React, { useEffect, useState } from "react";
import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import SwiperButton from "./SwiperButton";
import { Grid } from "@mui/material";

const MySwiper = ({ className, slidesPerViewLarge = 3, slidesPerViewSmall = 2, buttonXs = 12, children, ...args }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <SwiperButton controlledSwiper={controlledSwiper} isEnd={isEnd} isBeginning={isBeginning} xs={buttonXs} />
      <Grid item xs={12} data-aos="fade-up" p={{ xs: 2, md: 4 }}>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          onSwiper={setControlledSwiper}
          onSlideChange={() => {
            setIsBeginning(controlledSwiper.isBeginning)
            setIsEnd(controlledSwiper.isEnd)
          }}
          breakpoints={{
            690: {
              slidesPerView: slidesPerViewSmall,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            1050: {
              slidesPerView: slidesPerViewLarge,
              spaceBetween: 30,
            },
          }}
          {...args}
        >
          {children}
        </Swiper>
      </Grid>
    </>
  );
}

export default MySwiper
