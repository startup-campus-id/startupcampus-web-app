import { Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import HighlightText from "../HighlightText";
import MyTitle from "../MyTitle";

export default function Tools({ data }) {
  const router = useRouter();
  return (
    <Stack spacing={2}>
      <MyTitle gutterBottom>
        Platform Pembelajaran Yang Akan Kamu{" "}
        <HighlightText>Gunakan</HighlightText>
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
            mt={3}
            sx={{
              backgroundImage: `url(${e.url})`,
              minHeight: "70px",
              backgroundSize: "contain",
              backgroundPosition: {
                sm: router.asPath.match("artificial")
                  ? "center"
                  : "center left",
                xs: "center",
              },
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </Grid>
    </Stack>
  );
}
