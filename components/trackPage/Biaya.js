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
      <MyDesc>
        Startup Campus berkomitmen untuk membuat pendidikan digital menjadi
        lebih mudah untuk diakses oleh siapa saja, komitmen pertama kami, yaitu
        mengurangi biaya pendaftaran menjadi <strong>Rp4.015.050*</strong> (
        yang semula Rp12.015.050) untuk waktu yang terbatas. Mulailah
        perjalananmu sebelum biaya pendaftaran kembali normal!
      </MyDesc>
      {biaya.map((e, i) => (
        <MyAccordion
          key={i}
          title={e.title}
          subtitle={e.subtitle}
          content={e.content}
        />
      ))}
      <Hubungi />
    </Stack>
  );
}
