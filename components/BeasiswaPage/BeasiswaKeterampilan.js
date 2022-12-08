import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccentText from "../AccentText";

export default function BeasiswaKeterampilan({ skill }) {
  return (
    <Stack id="keterampilan" pt={6}>
      <AccentText>Keterampilan yang akan kamu dapatkan</AccentText>
      <Grid container gap={2} my={3}>
        {skill?.map((v, i) => (
          <Grid
            item
            key={i}
            sx={{
              padding: "15px 35px",
              backgroundColor: "#E5EEFA",
              borderRadius: 10,
            }}
          >
            <Typography variant="body2">{v}</Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
