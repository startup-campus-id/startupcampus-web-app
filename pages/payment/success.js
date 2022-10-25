import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyButton from "../../components/MyButton";
import MyDesc from "../../components/MyDesc";
import WordBreak from "../../components/WordBreak";

export default function Success() {
  return (
    <Container>
      <Head>
        <title>Success | Startup Campus</title>
      </Head>
      <Stack
        mt={4}
        sx={{ height: "100vh" }}
        justifyContent="center"
        data-aos="fade-down"
      >
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Selamat kamu telah berhasil mendaftar
          <WordBreak /> di Startup Campus!{" "}
        </Typography>

        <Stack position={"relative"} alignItems="center">
          <Stack height={300} sx={{ transform: "scale(1.9)" }}>
            <Image
              src={"/images/rocket.svg"}
              width={863 - 400}
              height={936 - 400}
            />
          </Stack>
        </Stack>

        <Stack spacing={1} alignItems="center">
          <MyDesc textAlign="center">
            Kamu bisa bergabung dengan komunitas kami untuk mengetahui informasi
            lebih lengkap
            <WordBreak /> dengan klik tombol di bawah ini!
          </MyDesc>
          <Link href={"https://t.me/grupstartupcampus"}>
            <MyButton>Gabung dengan Komunitas</MyButton>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
