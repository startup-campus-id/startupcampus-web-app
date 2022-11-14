import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { BOOTCAMP_FOR_PUBLIC, KAMPUS_MERDEKA } from "../../utils/constant";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import BiayaCard from "../LandingPage/BiayaCard";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import CardKelas from "./CardKelas";
import Hubungi from "./Hubungi";
import MyAccordion from "./MyAccordion";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const syarat = [
  "Mahasiswa S1 min. semester 5.",
  " Berasal dari kampus di bawah naungan Kemendikbud Ristekdikti. Berasal dari program studi apapun.",
  " Tidak mengikuti kegiatan lainnya seperti magang atau kuliah lain yang dapat bentrok dengan jadwal studi independen.",
  "WAJIB menguasai Bahasa Inggris dasar (terutama kemampuan membaca).",
  "Surat Rekomendasi, format bisa didapatkan disini.",
  "Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) , format bisa didapatkan disini.",
];

const keterangan = [
  {
    name: "Surat Rekomendasi",
    isi: [
      "Surat rekomendasi harus ditandatangani min. oleh Ketua Program Studi (diperkenankan tanpa cap).",
      "Diperbolehkan menggunakan tanda tangan digital yang disertai cap.",
      "Mahasiswa calon peserta perlu melampirkan daftar program yang akan dilamar sebagai informasi kepada perguruan tinggi.",
    ],
  },
  {
    name: "SPTJM",
    isi: [
      "Ditandatangani oleh Rektor/ Warek/ Direktur/ Wakil Direktur Perguruan Tinggi.",
      "Diperbolehkan menggunakan tanda tangan digital yang disertai cap.",
    ],
  },
];

const content = (
  <Stack>
    <Typography>
      Untuk calon peserta program founder studi independen, terdapat beberapa
      persyaratan yang harus dipersiapkan, sebagai berikut:
    </Typography>
    <Stack component="ol" spacing={1}>
      {syarat.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </Stack>
    <Typography>Keterangan:</Typography>
    <Stack spacing={2}>
      {keterangan.map((e, i) => (
        <Stack key={i} spacing={1}>
          <Typography fontWeight={700}>{e.name}</Typography>
          <Stack component={"ul"}>
            {e.isi.map((v, j) => (
              <Box component="li" key={j}>
                {v}
              </Box>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  </Stack>
);

export default function Kelas() {
  return (
    <Stack id="kelas-terdekat" data-aos="fade-up">
      <AccentText>Kelas Terdekat</AccentText>
      <MyTitle gutterBottom>
        Kelas yang Dapat Kamu <HighlightText>Ikuti</HighlightText>
      </MyTitle>
      {/* <MyDesc mb={3}>
        Dapatkan penawaran promo dari{" "}
        <span style={{ textDecoration: "line-through" }}>Rp20.000.000,-</span>{" "}
        menjadi <strong>Rp4.000.000,-</strong> untuk Bootcamp for Public.
      </MyDesc> */}
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        alignItems="end"
        spacing={4}
      >
        <Grid item xs={6}>
          <BiayaCard link={KAMPUS_MERDEKA} />
        </Grid>
        <Grid item xs={6}>
          <BiayaCard
            icon={<VideoLibraryIcon />}
            title={"Bootcamp for Public"}
            price={"Rp. 20.000.000"}
            link={BOOTCAMP_FOR_PUBLIC}
            recommended={true}
          />
        </Grid>
      </Grid>
      <MyAccordion
        title={"Persyaratan Peserta Studi Independen (Kampus Merdeka)"}
        type={"icon"}
        content={content}
        idx={"syarat-studi"}
      />
      <Hubungi
        title={
          "Punya pertanyaan seputar jadwal kelas atau persyaratan studi independen?"
        }
        link={"#"}
      />
    </Stack>
  );
}
