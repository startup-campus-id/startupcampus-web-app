import { Stack } from "@mui/material";
import React from "react";
import AccentText from "../AccentText";
import BasicTabs from "../BasicTabs";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";

export default function Kurikulum({ kurikulum, nickname = "NULL", desc = "" }) {
  return (
    <Stack id="kurikulum" data-aos="fade-up">
      <AccentText>Kurikulum</AccentText>
      <MyTitle gutterBottom>
        4 Tahap Untuk Menjadi <HighlightText>{nickname}</HighlightText>
      </MyTitle>
      <MyDesc>{desc}</MyDesc>
      <BasicTabs data={kurikulum} />
    </Stack>
  );
}
