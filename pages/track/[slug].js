import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import MyButton from "../../components/MyButton";

import { listMenu } from "../../content/sideMenu";
import Main from "../../components/trackPage/Main";
import Board from "../../components/trackPage/Board";
import SideBar from "../../components/trackPage/SideBar";
import TentangProgram from "../../components/trackPage/TentangProgram";
import Head from "next/head";
import { convertName } from "../../utils/byteToMb";
import { useState } from "react";
import { db } from "../../firebase/clientApp";
import { collection, getDocs, query, where } from "firebase/firestore";
import Sme from "../../components/trackPage/Sme";
import Kurikulum from "../../components/trackPage/Kurikulum";

export default function Track({ course }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(course);
  return (
    <>
      <Head>
        <title>{convertName(slug)} | Startup Campus</title>
      </Head>
      {!course ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                backgroundImage: `url(${course.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                position: "relative",
                "&::before": {
                  zIndex: "0",
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(111.55deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(68.45deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%)",
                },
              }}
            >
              <Container>
                <Main name={course.name} desc={course.description} />
              </Container>
            </Grid>
          </Grid>

          <Container>
            <Grid container justifyContent={"center"}>
              <Grid item xs={10}>
                <Board />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={3}>
                <SideBar />
              </Grid>
              <Grid item container md={9}>
                <Grid item xs={12}>
                  <TentangProgram nick={course.nickname} desc={course.TPdesc} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Sme sme={course.SME} />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
                <Grid item xs={12}>
                  <Kurikulum
                    kurikulum={course.kurikulum}
                    nickname={course.nickname}
                  />
                  <Divider sx={{ marginY: 6 }} />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

export async function getStaticPaths() {
  let paths = [];
  const colRef = collection(db, "course");
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
  const colRef = collection(db, "course");
  const q = query(colRef, where("slug", "==", params.slug));
  const querySnapshot = await getDocs(colRef);
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return {
    props: { course: data[0] },
  };
}
