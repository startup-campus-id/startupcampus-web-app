import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DaftarButton from "../DaftarButton";
import HighlightText from "../HighlightText";
import MyButton from "../MyButton";
import WordBreak from "../WordBreak";

function Section8() {
  return (
    <Grid container my={6}>
      <Grid item xs={12} data-aos="fade-up">
        <Stack spacing={4} alignItems="center">
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              fontWeight={700}
            >
              <HighlightText>Siapkan</HighlightText> Langkahmu Sekarang!
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color={"sc_gray.dark"}
            >
              Awali karier menakjubkan dengan bootcamp intensif yang kami
              tawarkan.
            </Typography>
          </Box>
          <DaftarButton />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Section8;
