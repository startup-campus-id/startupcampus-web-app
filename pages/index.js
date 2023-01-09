import { Box, Container, Typography } from '@mui/material';
import { createClient } from 'contentful';
import { collection, getDocs } from 'firebase/firestore';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
} from '../components';
import BiayaPendidikan from '../components/LandingPage/BiayaPendidikan';
import { db } from '../firebase/clientApp';
import useStudiIndepenPopup from '../hooks/useStudiIndependenPopup';

const Home = ({ logo, testimoni, course, title7, faq }) => {
  const router = useRouter()
  const { siPopup, setSiPopup } = useStudiIndepenPopup()

  useEffect(() => {
    const daftarSIPopup = window?.location.search.includes("daftar-si")
    if (daftarSIPopup) {
      setSiPopup(true)
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          Startup Campus | Bootcamp Online & Studi Independen Kampus Merdeka
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Startup Campus adalah bootcamp online dan studi independen terbaik untuk meningkatkan kompetensi digital dan teknologi yang dibutuhkan saat ini."
        />
      </Head>
      <Container>
        <Section1 />
        <Section2 logo={logo} />
        <Section3 course={course} />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 testimoni={testimoni} title={title7} />
        <BiayaPendidikan />
        <Section9 faq={faq} />
      </Container>
      <Section10 />
    </>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { items: logo } = await client.getEntries({
    content_type: 'logoCompany',
  });
  const { items: testimoni } = await client.getEntries({
    content_type: 'testimoni',
  });

  const { items: course } = await client.getEntries({
    content_type: 'course',
  });

  const { items: title7 } = await client.getEntries({
    content_type: 'section7',
  });

  const { items: faq } = await client.getEntries({
    content_type: 'faq',
  });

  // const data = [];
  // try {
  //   const colRef = collection(db, "course");
  //   const querySnapshot = await getDocs(colRef);
  //   querySnapshot.forEach((doc) => {
  //     data.push({ id: doc.id, ...doc.data() });
  //   });
  //   console.log(data);
  // } catch (e) {
  //   console.log(e.message);
  // }

  return {
    props: {
      logo,
      testimoni,
      course,
      title7,
      faq,
    },
    revalidate: 1,
  };
};

export default Home;
