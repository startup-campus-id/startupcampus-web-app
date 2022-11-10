import { Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { biaya } from "../../content/biaya";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import Hubungi from "./Hubungi";
import MyAccordion from "./MyAccordion";

export default function Biaya() {
  return (
    <Stack id="biaya-pendidikan" data-aos="fade-up">
      <AccentText>Biaya Pendidikan</AccentText>
      <MyTitle gutterBottom>
        Rincian Biaya <HighlightText>Pendidikan</HighlightText>
      </MyTitle>
      <MyDesc my={4}>Pilih metode pembayaran yang kamu inginkan</MyDesc>
      <Grid container spacing={6} my={2}>
        {biaya.map((v, i) => (
          <Grid item xs={6} md={4} key={i}>
            {v.icon}
            <Typography mt={2} variant="body2" fontWeight={700}>
              {v.title}
            </Typography>
            <Typography mt={2} variant="body2" fontWeight={400}>
              {v.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Hubungi />
    </Stack>
  );
}
