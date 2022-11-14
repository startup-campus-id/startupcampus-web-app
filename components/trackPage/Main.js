import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { BOOTCAMP_FOR_PUBLIC, KAMPUS_MERDEKA } from "../../utils/constant";
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
      <Typography color="white">Siap #MahirDigital, Siap Jadi Ahli</Typography>
      <Typography color="white" fontWeight={700} variant="h3">
        {name}
      </Typography>
      <Typography color="white" width={"550px"}>
        {desc}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link href={KAMPUS_MERDEKA} underline="none" passHref legacyBehavior>
          <MyButton color="sc_blue">Kampus Merdeka</MyButton>
        </Link>
        <Link href={BOOTCAMP_FOR_PUBLIC} underline="none" passHref>
          <MyButton variant="outlined" color="sc_white">
            Bootcamp for Public
          </MyButton>
        </Link>
      </Stack>
    </Stack>
  );
}
