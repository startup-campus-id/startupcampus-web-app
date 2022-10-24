import { Stack } from "@mui/material";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyTitle from "../MyTitle";
import CardKelas from "./CardKelas";

export default function Kelas() {
  return (
    <Stack spacing={3}>
      <AccentText>Kelas Terdekat</AccentText>
      <MyTitle gutterBottom>
        Kelas yang Dapat Kamu <HighlightText>Ikuti</HighlightText>
      </MyTitle>
      <CardKelas name="Skills Level Up!" />
      <CardKelas name={"Studi Independen Batch 4"} />
    </Stack>
  );
}
