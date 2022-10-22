import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccentText from "../AccentText";

export default function TentangProgram({ nick, desc }) {
  return (
    <Box id="about-program" pt={6}>
      <AccentText>Tentang Program</AccentText>
      <MyTitle gutterBottom>
        Menjadi Seorang {nick} yang <HighlightText>Berbeda</HighlightText>
      </MyTitle>
      <MyDesc>{desc}</MyDesc>

      <Grid container spacing={6} my={2}>
        <Grid item xs={6}>
          <HistoryEduIcon fontSize="large" color="sc_blue" />
          <Typography mt={2} variant="body2" fontWeight={700}>
            Instruktur yang Berpengalaman
          </Typography>
          <Typography mt={2} variant="body2" fontWeight={400}>
            Kamu akan dibimbing langsung secara intensif oleh praktisi startup
            yang tersertifikasi.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <MenuBookOutlinedIcon fontSize="large" color="sc_blue" />
          <Typography mt={2} variant="body2" fontWeight={700}>
            Kurikulum yang Dirancang oleh Experts
          </Typography>
          <Typography mt={2} variant="body2" fontWeight={400}>
            Materi dirancang oleh ahli yang terjun di startup sehingga dapat
            dipelajari siapa pun.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <WorkspacePremiumIcon fontSize="large" color="sc_blue" />
          <Typography mt={2} variant="body2" fontWeight={700}>
            Bootcamp dengan Sertifikasi Kemendikbud
          </Typography>
          <Typography mt={2} variant="body2" fontWeight={400}>
            Sertifikat resmi dari Kemendikbud setelah lulus dari Startup Campus.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <StarBorderIcon fontSize="large" color="sc_blue" />
          <Typography mt={2} variant="body2" fontWeight={700}>
            Dukungan Karier untuk Masa Depan
          </Typography>
          <Typography mt={2} variant="body2" fontWeight={400}>
            Sesi prospect karier bersama praktisi dan cara membangun portofolio.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <HandshakeIcon fontSize="large" color="sc_blue" />
          <Typography mt={2} variant="body2" fontWeight={700}>
            Jejaring dengan investor dan founder lainnya
          </Typography>
          <Typography mt={2} variant="body2" fontWeight={400}>
            Kesempatan mendapatkan modal dari investor dan koneksi dengan
            startup ternama.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CollectionsIcon fontSize="large" color="sc_blue" />
          <Typography mt={2} variant="body2" fontWeight={700}>
            Referensi yang Lengkap dan Menunjang
          </Typography>
          <Typography mt={2} variant="body2" fontWeight={400}>
            Akses materi berupa buku, video, dan referensi belajar terbaik
            lainnya untuk founders.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              height: "450px",
              width: "100%",
              backgroundImage: "url('/images/meeting2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 8,
              filter: "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
