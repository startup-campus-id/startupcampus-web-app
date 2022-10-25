import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { createClient } from "contentful";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { tagline } from "../content/tagline";
import { TaglineContext } from "../pages/_app";

const Footer = () => {
  const router = useRouter();
  return (
    <Grid
      container
      sx={{
        backgroundColor: router.pathname.match("/track")
          ? "white"
          : "sc_blue.main",
      }}
    >
      <Container
        sx={{
          borderBottom: `1px solid ${
            router.pathname.match("/track") ? "#BDBDBD" : "white"
          }`,
          borderTop: `1px solid ${
            router.pathname.match("/track") ? "#BDBDBD" : "white"
          }`,
        }}
      >
        <Grid item container xs={12} my={4} spacing={6}>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Box>
                <Image
                  src={
                    router.pathname.match("/track")
                      ? "/images/Startup Campus Gray Logo.svg"
                      : "/images/Startup Campus White Logo.png"
                  }
                  width={110}
                  height={36}
                />
              </Box>
              <Typography
                variant="body2"
                color={
                  router.pathname.match("/track") ? "sc_gray.dark" : "white"
                }
              >
                {tagline.footer}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                fontWeight={700}
                color={
                  router.pathname.match("/track") ? "sc_gray.dark" : "white"
                }
                sx={{ opacity: 0.5 }}
              >
                Site Map
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Program
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Blog
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Tentang Kami
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  FAQ&apos;s
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                fontWeight={700}
                color={
                  router.pathname.match("/track") ? "sc_gray.dark" : "white"
                }
                sx={{ opacity: 0.5 }}
              >
                Kontak
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  +62-856-4327-8256
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                  wrap
                >
                  {"startupcampus@ zakyfoundation.org ".toLocaleLowerCase()}
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Pejaten Barat, Jakarta Selatan, DKI Jakarta
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                fontWeight={700}
                color={
                  router.pathname.match("/track") ? "sc_gray.dark" : "white"
                }
                sx={{ opacity: 0.5 }}
              >
                Ikuti Kami
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Instagram
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  LinkedIn
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Facebook
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Tiktok
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    router.pathname.match("/track") ? "sc_gray.dark" : "white"
                  }
                >
                  Youtube
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12} py={3}>
        <Typography
          textAlign={"center"}
          variant="subtitle2"
          color={router.pathname.match("/track") ? "sc_gray.dark" : "white"}
        >
          ©Startup Campus. All right reserverd, 2022.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
