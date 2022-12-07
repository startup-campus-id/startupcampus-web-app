import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { collection, getDocs, query, where } from "firebase/firestore";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { listMenu } from "../../../content/sideMenu";
import { db } from "../../../firebase/clientApp";
import Main from "../../../components/trackPage/Main";
import WordBreak from "../../../components/WordBreak";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MyButton from "../../../components/MyButton";
import Link from "next/link";
import { REGIST_BEASISWA_GOOGLE_URL } from "../../../sc.config";

export default function BeasiswaGoogle({ beasiswa }) {
  console.log(beasiswa);
  const app = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      ScrollTrigger.create({
        trigger: ".content",
        start: "top top",
        end: "bottom bottom",
        pin: ".sidebar",
      });

      listMenu.map((val, idx) => {
        gsap.to("." + val.link, {
          scrollTrigger: {
            trigger: "#" + val.link,
            start: "top center",
            end: "bottom center",
            toggleActions: "restart reset restart reset",
          },
          color: "blue",
          transition: "ease",
        });
      });
    }, app); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>{beasiswa.name} | Startup Campus</title>
      </Head>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 86, 210, 0.6) 0%, #0056D2 100%)",
          }}
        >
          <Container>
            <Stack
              spacing={4}
              height={"100vh"}
              alignItems="center"
              justifyContent="center"
            >
              <Typography fontWeight={700} color="white">
                {beasiswa.name}
              </Typography>
              <Typography
                fontWeight={800}
                variant={"h2"}
                color="white"
                textAlign="center"
              >
                Siap Kerja dengan Google <WordBreak /> Career Certificates
              </Typography>

              <Stack spacing={2}>
                <Typography color="white" textAlign="center">
                  Raih karier impianmu di bidang {beasiswa.name} hanya dalam waktu
                  3 bulan!
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  width="100%"
                  spacing={{ xs: 2, sm: 4 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack direction="row" spacing={1}>
                    <CheckCircleIcon sx={{ color: "#fff" }} />
                    <Typography color="white">
                      Tidak perlu pengalaman
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckCircleIcon sx={{ color: "#fff" }} />
                    <Typography color="white">
                      Jalur menuju karier impian
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={2} width="100%" alignItems="center">
                <Typography fontWeight={700} color={"white"} textAlign="center">
                  Batch Selanjutnya: 20 Februari 2023
                </Typography>

                <Stack
                  sx={{
                    zIndex: 1,
                    width: { xs: "90%", sm: "60%" },
                    px: 2,
                    py: 1,
                    backgroundColor: "white",
                    borderRadius: 35,
                    position: "relative",
                    "&::before": {
                      zIndex: 0,
                      top: 0,
                      left: 0,
                      content: "''",
                      position: "absolute",
                      width: "87%",
                      height: "100%",
                      backgroundColor: "sc_yellow.main",
                      borderRadius: 35,
                    },
                  }}
                >
                  <Typography fontWeight={700} zIndex={2}>
                    87% Kuota Pendaftaran Sudah Terisi
                  </Typography>
                </Stack>
              </Stack>

              <Stack>
                <Link href={REGIST_BEASISWA_GOOGLE_URL} passHref>
                  <MyButton color="sc_yellow">
                    <Typography fontWeight={700}>Daftar Beasiswa</Typography>
                  </MyButton>
                </Link>
              </Stack>
            </Stack>
          </Container>
        </Grid>
      </Grid>
      {/* <Grid container justifyContent={"center"}>
            <Grid item xs={12} display="flex" justifyContent={"center"}>
              <Board />
            </Grid>
          </Grid>

          <Container
            ref={app}
            sx={{ overflow: { xs: "visible", md: "hidden" } }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                md={3}
                className="sidebar"
                display={{ xs: "none", md: "block" }}
              >
                <SideBar />
              </Grid>
              <Grid item container md={9} className="content">
                <Grid item xs={12}>
                  <TentangProgram nick={course.nickname} desc={course.TPdesc} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Sme sme={course.SME} desc={course.sme_desc} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Kurikulum
                    kurikulum={course.kurikulum}
                    nickname={course.nickname}
                    desc={course.kur_desc}
                    link={course.kur_link}
                  />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Tools data={course.tools} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Bimbingan desc={course.bk_desc} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Biaya />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Kelas course={course.name} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Testimoni data={course.testimoni} nickname={course.name} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Portofolio nickname={course.name} karya={course.karya} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
              
              </Grid>
            </Grid>
          </Container> */}
    </>
  );
}

export async function getStaticPaths() {
  let paths = [];
  const colRef = collection(db, "beasiswa");
  const querySnapshot = await getDocs(colRef);

  querySnapshot.forEach((doc) => {
    paths.push({ params: { slug: doc.id } });
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const data = [];
  try {
    const colRef = collection(db, "beasiswa");
    const q = query(colRef, where("slug", "==", params.slug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.log(e.message);
  }
  return {
    props: { beasiswa: data[0] ?? null },
    revalidate: 1,
  };
}
