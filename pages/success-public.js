import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import gsap from "gsap/dist/gsap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useEffect } from "react";
import MyButton from "../components/MyButton";
import MyDesc from "../components/MyDesc";
import WordBreak from "../components/WordBreak";
import { BASE_URL } from "../sc.config";

export default function SuccessPublic() {
  const app = useRef();
  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1, yoyo: true });
    const ctx = gsap.context(() => {
      tl.to(".img", { x: 10, y: -10, duration: 1 });
      gsap.from(".title", {
        y: -100,
        transition: "ease",
      });

      gsap.from(".desc", {
        y: 100,
        transition: "ease",
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <Container ref={app}>
      <Head>
        <title>Success | Startup Campus</title>
      </Head>
      <Stack
        mt={4}
        sx={{ height: "100vh" }}
        justifyContent="center"
        data-aos="fade-down"
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          className="title"
        >
          Selamat kamu telah berhasil mendaftar
          <WordBreak /> di Startup Campus!{" "}
        </Typography>

        <Stack position={"relative"} alignItems="center" className="img">
          <Stack height={300} sx={{ transform: "scale(1.9)" }}>
            <Image
              src={"/images/rocket.svg"}
              width={863 - 400}
              height={936 - 400}
            />
          </Stack>
        </Stack>

        <Stack spacing={1} alignItems="center" className="desc">
          <MyDesc textAlign="center">
            Terimakasih!, Tim Kami akan segera menghubungi kamu untuk langkah
            selanjutnya
          </MyDesc>
        </Stack>
      </Stack>
    </Container>
  );
}

export async function getServerSideProps({ query }) {
  const { token } = query;
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  let invalid = false;
  if (token) {
    try {
      await axios.get(`${BASE_URL}/users/validate?token=${token}`);
    } catch (e) {
      invalid = true;
    }
  }

  if (invalid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
