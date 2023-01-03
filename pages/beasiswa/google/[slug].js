import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { collection, getDocs, query, where } from "firebase/firestore";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { listMenu } from "../../../content/sideMenu";
import { db } from "../../../firebase/clientApp";
import BeasiswaHero from "../../../components/BeasiswaPage/BeasiswaHero";
import SideBar from "../../../components/trackPage/SideBar";
import { menuBeasiswa } from "../../../content/menuBeasiswa";
import BeasiswaAbout from "../../../components/BeasiswaPage/BeasiswaAbout";
import BeasiswaKeterampilan from "../../../components/BeasiswaPage/BeasiswaKeterampilan";
import BeasiswaMengapa from "../../../components/BeasiswaPage/BeasiswaMengapa";
import { whyMustGcc } from "../../../content/whymustgcc";
import BeasiswaKurikulum from "../../../components/BeasiswaPage/BeasiswaKurikulum";
import { REGIST_BEASISWA_GOOGLE_URL } from "../../../sc.config";
import BeasiswaKriteria from "../../../components/BeasiswaPage/BeasiswaKriteria";
import BeasiswaJadwal from "../../../components/BeasiswaPage/BeasiswaJadwal";
import MyTitle from "../../../components/MyTitle";
import WordBreak from "../../../components/WordBreak";
import MyButton from "../../../components/MyButton";
import Link from "next/link";
import { kriteria } from "../../../content/kriteria";

export default function BeasiswaGoogle({ beasiswa, kriteria }) {
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

      menuBeasiswa.map((val, idx) => {
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
            <BeasiswaHero name={beasiswa.name} />
          </Container>
        </Grid>
      </Grid>

      <Container ref={app} sx={{ overflow: { xs: "visible", md: "hidden" } }}>
        <Grid container spacing={3} py={4}>
          <Grid
            item
            md={3}
            className="sidebar"
            display={{ xs: "none", md: "block" }}
          >
            <SideBar
              listMenu={menuBeasiswa}
              link={REGIST_BEASISWA_GOOGLE_URL}
            />
          </Grid>
          <Grid item container md={9} className="content">
            <Stack>
              <BeasiswaAbout name={beasiswa.name} materi={beasiswa.tp_materi} />
              <Divider sx={{ marginY: 4 }} />
            </Stack>
            <Stack>
              <BeasiswaKeterampilan skill={beasiswa.keterampilan} />
              <Divider sx={{ marginY: 4 }} />
            </Stack>
            <Stack>
              <BeasiswaMengapa materi={whyMustGcc} />
              <Divider sx={{ marginY: 4 }} />
            </Stack>
            <Stack>
              <BeasiswaKurikulum kurikulum={beasiswa.kurikulum} />
              <Divider sx={{ marginY: 4 }} />
            </Stack>
            <Stack width={"100%"}>
              <BeasiswaKriteria kriteria={kriteria} />
              <Divider sx={{ marginY: 4 }} />
            </Stack>
            <Stack width={"100%"}>
              <BeasiswaJadwal />
              <Divider sx={{ marginY: 4 }} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Stack
        sx={{ background: "rgba(0, 86, 210, 0.05)" }}
        py={8}
        my={5}
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Stack>
          <MyTitle textAlign="center" color="sc_blue.main">
            Mulai Kariermu di Sini!
          </MyTitle>
          <MyTitle textAlign="center" color="sc_blue.main">
            Daftar Kelas Google Sekarang!
          </MyTitle>
        </Stack>
        <Link href={REGIST_BEASISWA_GOOGLE_URL} passHref>
          <MyButton color="sc_yellow">
            <Typography fontWeight={700}>Daftar Sekarang</Typography>
          </MyButton>
        </Link>
      </Stack>
    </>
  );
}

export async function getStaticPaths() {
  let paths = [];
  const colRef = collection(db, "beasiswa");
  const querySnapshot = await getDocs(colRef);

  querySnapshot.forEach((doc) => {
    const { slug } = doc.data()
    paths.push({ params: { slug } });
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
    props: { beasiswa: data[0] ?? null, kriteria: kriteria[params.slug] },
    revalidate: 1,
  };
}
