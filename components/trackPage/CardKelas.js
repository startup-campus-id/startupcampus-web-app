import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MyButton from "../MyButton";
import Link from "next/link";

const benefit = [
  "Sesi interaktif",
  "Mentoring intensif",
  "Proyek riil",
  "Persiapan kerja",
  "Komunitas alumni",
  "Modul, e-book, video belajar, dan referensi belajar lainnya.",
];

export default function CardKelas({ name, link, id }) {
  return (
    <Grid
      id={id}
      container
      p={4}
      sx={{
        background: "#FFFFFF",
        boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
        borderRadius: "5px",
      }}
    >
      <Grid item xs={4} md={4}>
        <Typography mb={1} variant="body1" color="#2B2C27" fontWeight={700}>
          {name ?? "Skills Level Up!"}
        </Typography>
        <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400}>
          Januari 2023
        </Typography>
      </Grid>
      <Grid item xs={4} md={4}>
        <Stack direction={"row"} spacing={1}>
          <CheckCircleIcon color="sc_blue" fontSize="small" />
          <Stack spacing={1}>
            <Typography variant="body1" color="#2B2C27" fontWeight={700}>
              Total Durasi
            </Typography>
            <Typography variant="body2" color="#2B2C27" fontWeight={400}>
              ±5 Bulan
            </Typography>
            <Typography variant="body2" color="#2B2C27" fontWeight={400}>
              900 jam
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4} md={4}>
        <Stack direction="row" spacing={2}>
          <Divider orientation="vertical" flexItem />
          <Stack spacing={1}>
            {benefit.map((v, i) => (
              <Stack direction="row" spacing={1} key={i}>
                <CheckCircleIcon color="sc_blue" fontSize="small" />
                <Typography
                  mb={1}
                  variant="body2"
                  color="#2B2C27"
                  fontWeight={400}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {v}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} mt={6}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Typography
            variant={"body2"}
            color={"sc_blue.main"}
            p={2}
            sx={{
              background:
                "linear-gradient(0deg, rgba(0, 86, 210, 0.1), rgba(0, 86, 210, 0.1)), #FFFFFF",
            }}
          >
            Pendaftaran ditutup pada tanggal 20 Desember 2022{" "}
          </Typography>
          <Link href={link ?? "#"}>
            <MyButton width={{ xs: "100%", md: "40%" }}>
              Daftar Sekarang
            </MyButton>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}
