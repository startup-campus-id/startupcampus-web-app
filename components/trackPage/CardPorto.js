import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function CardPorto({ img, name, team }) {
  return (
    <Grid item xs={12} md={4}>
      <Stack
        sx={{
          filter: "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))",
          background: "#FFFFFF",
          borderRadius: "5px",
          overflow: "hidden",
          height: 252 + 86,
          position: "relative",
          "&:hover > .expand": {
            transform: "translateY(-150px)",
          },
        }}
      >
        <Stack
          sx={{
            height: 252,
            background: `url(${img ?? "/images/Aksel.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Stack
          p={3}
          className="expand"
          sx={{
            transformOrigin: "bottom center",
            background: "#FFF",
            borderRadius: "5px 5px 0 0",
            transition: ".3s",
            position: "absolute",
            top: 252,
            width: "100%",
          }}
        >
          <Typography fontWeight={700}>{team ?? "Aksel"}</Typography>
          <Typography variant={"caption"} color={"sc_gray.dark"}>
            {name ?? "Gabrille Shanne L. & Arel Eugene R."}
          </Typography>
          <Typography
            className="desc"
            variant={"caption"}
            color={"sc_gray.dark"}
            mt={2}
          >
            Ini adalah Deskripsi Ini adalah Deskripsi Ini adalah Deskripsi Ini
            adalah Deskripsi Ini adalah Deskripsi Ini adalah Deskripsi Ini
            adalah Deskripsi Ini adalah Deskripsi Ini adalah Deskripsi Ini
            adalah Deskripsi Ini adalah Deskripsi Ini adalah Deskripsi Ini
            adalah Deskripsi Ini adalah Deskripsi Ini adalah Deskripsi Ini
            adalah Deskripsi
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
