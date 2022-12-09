import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { kriteria } from "../../content/kriteria";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function BeasiswaKriteria() {
  return (
    <Box id="kriteria" pt={6}>
      <AccentText>Kriteria Calon Peserta</AccentText>
      <MyTitle gutterBottom>
        Siapa Saja yang Bisa <HighlightText>Bergabung ?</HighlightText>
      </MyTitle>
      <Grid container my={4} spacing={3}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            {kriteria?.map((v, i) => (
              <Stack direction="row" spacing={1} key={i}>
                <CheckCircleIcon sx={{ color: "sc_blue.main" }} />
                <MyDesc>{v}</MyDesc>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              minHeight: 390,
              backgroundImage: "url(/images/kriteria.png)",
              backgroundSize: "cover",
              overflow: "hidden",
              borderRadius: 8,
              filter: "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
