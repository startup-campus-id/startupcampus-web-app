import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import DaftarButton from "../DaftarButton";
import MyButton from "../MyButton";
import WordBreak from "../WordBreak";

export default function Main({ name, desc }) {
  return (
    <Stack
      height={"100vh"}
      justifyContent={"center"}
      spacing={3}
      zIndex={2}
      position="relative"
    >
      <Typography color="white">#SiapMahirDigital, Siap Jadi</Typography>
      <Typography color="white" fontWeight={700} variant="h3">
        {name}
      </Typography>
      <Typography color="white" width={"550px"}>
        {desc}
      </Typography>
      <Stack direction="row" spacing={2}>
        <DaftarButton />
        <Link href="#about-program" underline="none">
          <MyButton variant="outlined" color="sc_white">
            Lihat Detail
          </MyButton>
        </Link>
      </Stack>
    </Stack>
  );
}
