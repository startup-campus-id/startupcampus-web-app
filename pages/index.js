import { useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
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
} from "../components";
import BubbleChat from "../components/BubbleChat";
import { createClient } from "contentful";

const Home = ({ logo, testimoni, course, tagline, title7, faq }) => {
  return (
    <>
      <Head>
        <title>
          Startup Campus | Siap Berkarya, Siap #MahirDigital Bersama Startup
          Campus
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Raih karier impianmu sebagai founder, UI/UX designer, data scientist, backend engineer, atau AI specialist"
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
        <Section8 />
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
    content_type: "logoCompany",
  });
  const { items: testimoni } = await client.getEntries({
    content_type: "testimoni",
  });

  const { items: course } = await client.getEntries({
    content_type: "course",
  });

  const { items: title7 } = await client.getEntries({
    content_type: "section7",
  });

  const { items: faq } = await client.getEntries({
    content_type: "faq",
    order: "sys.createdAt",
  });

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
