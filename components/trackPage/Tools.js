import { Grid, Stack } from "@mui/material";
import React from "react";
import HighlightText from "../HighlightText";
import MyTitle from "../MyTitle";

export default function Tools({ data }) {
  console.log(data);
  return (
    <Stack spacing={2}>
      <MyTitle gutterBottom>
        Tools yang Akan Kamu <HighlightText>Gunakan</HighlightText>
      </MyTitle>
      <Grid container spacing={2} mt={6}>
        {data.map((e, i) => (
          <Grid
            key={i}
            item
            xs={6}
            sm={3}
            display="flex"
            alignItems={"center"}
            sx={{
              backgroundImage: `url(${e.url})`,
              minHeight: "70px",
              backgroundSize: "contain",
              backgroundPosition: { sm: "center left", xs: "center" },
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </Grid>
    </Stack>
  );
}
