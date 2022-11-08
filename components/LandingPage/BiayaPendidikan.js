import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HighlightText from "../HighlightText";
import WordBreak from "../WordBreak";
import BiayaCard from "./BiayaCard";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { BOOTCAMP_FOR_PUBLIC, KAMPUS_MERDEKA } from "../../utils/constant";

export default function BiayaPendidikan() {
  return (
    <Container>
      <Grid container my={6} justifyContent="center">
        <Grid item xs={12} data-aos="fade-up">
          <Stack alignItems="center">
            <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              fontWeight={700}
            >
              Biaya <HighlightText>Pendidikan</HighlightText>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              textAlign="center"
              color={"sc_gray.dark"}
            >
              Ambil langkah pertama dalam perjalananmu dengan mengikuti bootcamp{" "}
              <WordBreak />
              intensif yang kami tawarkan!
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="end"
          spacing={2}
        >
          <Grid item xs={12} md={4}>
            <BiayaCard link={KAMPUS_MERDEKA} />
          </Grid>
          <Grid item xs={12} md={4}>
            <BiayaCard
              icon={<VideoLibraryIcon />}
              title={"Bootcamp for Public"}
              price={"Rp. 20.000.000"}
              link={BOOTCAMP_FOR_PUBLIC}
              recommended={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
