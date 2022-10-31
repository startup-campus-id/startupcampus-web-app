import { Stack, Typography } from "@mui/material";
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
      <MyDesc>Pilih metode pembayaran yang kamu inginkan</MyDesc>
      {biaya.map((e, i) => (
        <MyAccordion
          key={i}
          title={e.title}
          subtitle={e.subtitle}
          content={e.content}
          idx={i}
        />
      ))}
      <Hubungi />
    </Stack>
  );
}
