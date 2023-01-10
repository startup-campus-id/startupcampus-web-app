import { Box, Container, Typography } from '@mui/material';
import { createClient } from 'contentful';
import { collection, getDocs } from 'firebase/firestore';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

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
import PopupBanner from '../components/PopupBanner'
import { db } from '../firebase/clientApp';
import useStudiIndepenPopup from '../hooks/useStudiIndependenPopup';

const Home = ({ logo, testimoni, course, title7, faq }) => {
  const [openBanner, setOpenBanner] = useState(false)

  const { setSiPopup } = useStudiIndepenPopup()

  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  function setWithExpiry(key, value, minute) {
    const now = new Date()
    const expire = addMinutes(now, minute)

    const item = {
      value: value,
      expiry: expire,
    }
    localStorage.setItem(key, JSON.stringify(item))
  }

  function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    if (!itemStr) {
      return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()
    const expire = new Date(item.expiry)

    // compare the expiry time of the item with the current time
    if (now.getTime() > expire) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key)
      return null
    }
    return item.value
  }

  useEffect(() => {
    const daftarSIPopup = window?.location.search.includes("daftar-si")
    if (daftarSIPopup) {
      setSiPopup(true)
    }

    // Memberi jeda 5 menit setelah popup banner ditampilkan (agar tidak spam)
    const popupBannerShown = getWithExpiry("popupBannerShown")

    setTimeout(() => {
      if (!daftarSIPopup && !popupBannerShown) {
        setOpenBanner(true)

        setWithExpiry("popupBannerShown", true, 5)
      }
    }, 3000)
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
        <PopupBanner open={openBanner} handleClose={() => setOpenBanner(false)} />
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
    revalidate: 60,
  };
};

export default Home;
