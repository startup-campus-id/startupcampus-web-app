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
} from '@mui/material';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap/dist/gsap';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

import Biaya from '../../components/trackPage/Biaya';
import Bimbingan from '../../components/trackPage/Bimbingan';
import Board from '../../components/trackPage/Board';
import Faq from '../../components/trackPage/Faq';
import Kelas from '../../components/trackPage/Kelas';
import Kurikulum from '../../components/trackPage/Kurikulum';
import Main from '../../components/trackPage/Main';
import Portofolio from '../../components/trackPage/Portofolio';
import SideBar from '../../components/trackPage/SideBar';
import Sme from '../../components/trackPage/Sme';
import TentangProgram from '../../components/trackPage/TentangProgram';
import Testimoni from '../../components/trackPage/Testimoni';
import Tools from '../../components/trackPage/Tools';
import { listMenu } from '../../content/sideMenu';
import { db } from '../../firebase/clientApp';

export default function Track({ course }) {
  console.log(course);
  const app = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      ScrollTrigger.create({
        trigger: '.content',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.sidebar',
      });

      listMenu.map((val, idx) => {
        gsap.to('.' + val.link, {
          scrollTrigger: {
            trigger: '#' + val.link,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'restart reset restart reset',
          },
          color: 'blue',
          transition: 'ease',
        });
      });
    }, app); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>{course.name} | Startup Campus</title>
      </Head>
      {!course ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                position: 'relative',
                '&::before': {
                  zIndex: '0',
                  content: "''",
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(111.55deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(68.45deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%)',
                },
              }}
            >
              <Container>
                <Main name={course.name} desc={course.description} />
              </Container>
            </Grid>
          </Grid>
          <Grid container justifyContent={'center'}>
            <Grid item xs={12} display="flex" justifyContent={'center'}>
              <Board />
            </Grid>
          </Grid>

          <Container
            ref={app}
            sx={{ overflow: { xs: 'visible', md: 'hidden' } }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                md={3}
                className="sidebar"
                display={{ xs: 'none', md: 'block' }}
              >
                <SideBar listMenu={listMenu} />
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
                {/* <Grid item xs={12} mb={3}>
                  <Faq nickname={course.nickname} />
                </Grid> */}
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
  const colRef = collection(db, 'course_backup');
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
    const colRef = collection(db, 'course_backup');
    const q = query(colRef, where('slug', '==', params.slug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.log(e.message);
  }
  return {
    props: { course: data[0] ?? null },
    revalidate: 60,
  };
}
