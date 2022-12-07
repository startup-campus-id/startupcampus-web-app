import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function BeasiswaAbout({ name, materi }) {
  return (
    <Box id="tentang-program" pt={6}>
      <AccentText>Tentang Program</AccentText>
      <MyTitle gutterBottom>
        Menggapa <HighlightText>Harus</HighlightText> Belajar {name} ?
      </MyTitle>
      <Grid container my={4} spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant={"subtitle1"}>
            Kabar baik! Startup Campus bersama{" "}
            <Link href={"#"} passHref>
              <Typography
                variant={"subtitle1"}
                component="a"
                color="sc_blue.main"
              >
                Google Career Certificate(GCC){"  "}
              </Typography>
            </Link>
            akan memberikan beasiswa pelatihan daring di bidang Data Analitik
            untuk 200 orang di seluruh Indonesia.
          </Typography>

          <Typography variant={"subtitle1"} my={4}>
            Materi yang akan dipelajari mencakup:
          </Typography>

          <Stack spacing={2}>
            {materi?.map((v, i) => (
              <Stack direction="row" spacing={1} key={i}>
                <CheckCircleIcon sx={{ color: "sc_blue.main" }} />
                <MyDesc>{v}</MyDesc>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              minHeight: 570,
              backgroundImage: "url(/images/writingperson.png)",
              backgroundSize: "cover",
              overflow: "hidden",
              borderRadius: 10,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
