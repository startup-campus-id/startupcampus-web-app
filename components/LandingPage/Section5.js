import { Avatar, Box, Grid, Icon, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { benefit } from "../../content/benefit";
import HighlightText from "../HighlightText";
import WordBreak from "../WordBreak";
import useDeviceDetect from "../../hooks/useDeviceDetect";

function Section5() {
  const { device } = useDeviceDetect();
  return (
    <Grid container my={6} py={6} spacing={3} alignItems="center">
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="h4" fontWeight={700}>
          Mengapa <HighlightText>Harus</HighlightText> Startup Campus ?
        </Typography>
      </Grid>
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="body1" color={"sc_gray.dark"}>
          Tingkatkan kompetensi digital yang dibutuhkan saat ini melalui
          bootcamp intensif selama satu semester.
        </Typography>
      </Grid>
      <Grid item container md={7} spacing={device=="mobile"?4:10 }>
        {benefit.map((item, idx) => (
          <Grid item xs={12} sm={6} key={item.title} data-aos="fade-up">
            <Stack spacing={2} justifyContent="center">
              <Box>
                <Image src={item.img} width={50} height={50} alt={idx} />
              </Box>
              <Typography variant="h5" fontWeight={700} color="sc_black.main">
                {item.title}
              </Typography>
              <Typography variant="body2" color={"sc_gray.dark"}>
                {item.desc}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid item md={5} data-aos="fade-left">
        <Box borderRadius={"20px"} overflow="hidden">
          <Image
            src={"/images/pexels.png"}
            width={598}
            height={898}
            alt="people-play-computer"
          />
        </Box>
      </Grid>
    </Grid >
  );
}

export default Section5;
