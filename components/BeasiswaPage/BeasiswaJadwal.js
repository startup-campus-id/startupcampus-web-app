import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HighlightText from "../HighlightText";
import MyTitle from "../MyTitle";
import WordBreak from "../WordBreak";
import BeasiswaTimeline from "./BeasiswaTimeline";

export default function BeasiswaJadwal() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <MyTitle gutterBottom>
          <HighlightText>Jadwal Program</HighlightText> <WordBreak />
          Beasiswa Google <WordBreak />
          Career Certificates
        </MyTitle>
        <Typography variant={"body2"}>
          Beasiswa{" "}
          <Link href={"#"} passHref>
            <Typography variant={"body2"} component="a" color="sc_blue.main">
              Google Career Certificate(GCC){"  "}
            </Typography>
          </Link>
          , adalah program beasiswa pelatihan daring selama 3 bulan yang telah
          disertifikasi Google.
        </Typography>
        <Typography variant={"body2"} my={4}>
          Berikut tahapan pendaftaran yang akan kamu lewati:
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <BeasiswaTimeline />
      </Grid>
    </Grid>
  );
}
