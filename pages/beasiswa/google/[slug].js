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

export default function BeasiswaGoogle({ beasiswa }) {
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
            <SideBar listMenu={menuBeasiswa} />
          </Grid>
          <Grid item container md={9} className="content">
            <Stack>
              <BeasiswaAbout name={beasiswa.name} materi={beasiswa.tp_materi} />
              <Divider sx={{ marginY: 6 }} />
            </Stack>
            <Stack>
              <BeasiswaKeterampilan skill={beasiswa.keterampilan} />
              <Divider sx={{ marginY: 6 }} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
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
