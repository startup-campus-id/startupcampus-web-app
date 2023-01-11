import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import BeasiswaAbout from 'components/BeasiswaPage/BeasiswaAbout';
import BeasiswaFooter from 'components/BeasiswaPage/BeasiswaFooter';
import BeasiswaHero from 'components/BeasiswaPage/BeasiswaHero';
import BeasiswaJadwal from 'components/BeasiswaPage/BeasiswaJadwal';
import BeasiswaKeterampilan from 'components/BeasiswaPage/BeasiswaKeterampilan';
import BeasiswaKriteria from 'components/BeasiswaPage/BeasiswaKriteria';
import BeasiswaKurikulum from 'components/BeasiswaPage/BeasiswaKurikulum';
import BeasiswaMengapa from 'components/BeasiswaPage/BeasiswaMengapa';
import BeasiswaSertifikat from 'components/BeasiswaPage/BeasiswaSertifikat';
import MyButton from 'components/MyButton';
import MyTitle from 'components/MyTitle';
import SideBar from 'components/trackPage/SideBar';
import { kriteria } from 'content/kriteria';
import { menuBeasiswa } from 'content/menuBeasiswa';
import { whyMustGcc } from 'content/whymustgcc';
import { db } from 'firebase/clientApp';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap/dist/gsap';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { REGIST_BEASISWA_GOOGLE_URL } from 'sc.config';

export default function BeasiswaGoogle({ beasiswa, kriteria }) {
  const app = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Target the two specific elements we have assigned the animate class
      ScrollTrigger.create({
        trigger: '.content',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.sidebar',
      });

      menuBeasiswa.map((val, idx) => {
        gsap.to('.' + val.link, {
          scrollTrigger: {
            trigger: '#' + val.link,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'restart reset restart reset',
          },
          color: '#121212',
          flexGrow: '0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 0 10px 12px',
          marginLeft: '-12px',
          borderLeft: 'solid 1.5px #fdb72b',
          backgroundColor: '#fff8eb',
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
            background: '#FFF8EB',
          }}
        >
          <Container>
            <BeasiswaHero name={beasiswa.name} />
          </Container>
        </Grid>
      </Grid>

      <Container
        ref={app}
        sx={{
          overflow: {
            xs: 'visible',
            md: 'hidden',
          },
        }}
      >
        <Grid container spacing={3} py={4}>
          <Grid
            item
            md={3}
            className="sidebar"
            display={{
              xs: 'none',
              md: 'block',
            }}
          >
            <SideBar
              variant="yellow"
              listMenu={menuBeasiswa}
              link={REGIST_BEASISWA_GOOGLE_URL}
            />
          </Grid>
          <Grid item container md={9} className="content">
            <Stack>
              <BeasiswaAbout name={beasiswa.name} materi={beasiswa.tp_materi} />
              <Divider
                sx={{
                  marginY: 0,
                }}
              />
            </Stack>
            <Stack>
              <BeasiswaKeterampilan skill={beasiswa.keterampilan} />
              <Divider
                sx={{
                  marginY: 4,
                }}
              />
            </Stack>
            <Stack>
              <BeasiswaMengapa materi={whyMustGcc} />
              <Divider
                sx={{
                  marginY: 4,
                }}
              />
            </Stack>
            <Stack>
              <BeasiswaKurikulum kurikulum={beasiswa.kurikulum} />
              <Divider
                sx={{
                  marginY: 4,
                }}
              />
            </Stack>
            <Stack width={'100%'}>
              <BeasiswaKriteria kriteria={kriteria} />
              <Divider
                sx={{
                  marginY: 4,
                  marginBottom: 10,
                }}
              />
            </Stack>
            <Stack width={'100%'}>
              <BeasiswaJadwal />
              <Divider
                sx={{
                  marginY: 6,
                }}
              />
            </Stack>
            <Stack width={'100%'} marginBottom={10}>
              <BeasiswaSertifikat />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Grid container>
        <Grid item xs={12}>
          <Container>
            <BeasiswaFooter />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export async function getStaticPaths() {
  let paths = [];
  const colRef = collection(db, 'beasiswa');
  const querySnapshot = await getDocs(colRef);

  querySnapshot.forEach((doc) => {
    const { slug } = doc.data();
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
    const colRef = collection(db, 'beasiswa');
    const q = query(colRef, where('slug', '==', params.slug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.log(e.message);
  }
  return {
    props: {
      beasiswa: data[0] ?? null,
      kriteria: kriteria[params.slug],
    },
    revalidate: 60,
  };
}
