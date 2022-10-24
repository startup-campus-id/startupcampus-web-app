import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { biaya } from "../../content/biaya";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import MyAccordion from "./MyAccordion";

export default function Biaya() {
  return (
    <Stack>
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
      <Stack
        direction={"row"}
        justifyContent="center"
        spacing={1}
        p={2}
        mt={3}
        sx={{
          background:
            "linear-gradient(0deg, rgba(0, 86, 210, 0.1), rgba(0, 86, 210, 0.1)), #FFFFFF",
        }}
      >
        <Typography>Punya pertanyaan seputar biaya pendidikan? </Typography>
        <Typography color={"sc_blue.main"}>
          <Link href="#">Hubungi sekarang!</Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
