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
import { tentang } from "../../content/tentanProgram";
import { useRouter } from "next/router";

export default function TentangProgram({ nick, desc }) {
  const router = useRouter();
  return (
    <Box id="about-program" pt={6} data-aos="fade-up">
      <AccentText>Tentang Program</AccentText>
      <MyTitle gutterBottom>
        Jadilah {nick} yang <HighlightText>Berbeda</HighlightText>
      </MyTitle>
      <MyDesc>{desc}</MyDesc>

      <Grid container spacing={6} my={2}>
        {tentang(router.asPath).map((v, i) => (
          <Grid item xs={6} md={4} key={i}>
            {v.icon}
            <Typography mt={2} variant="body2" fontWeight={700}>
              {v.title}
            </Typography>
            <Typography mt={2} variant="body2" fontWeight={400}>
              {v.desc}
            </Typography>
          </Grid>
        ))}

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
