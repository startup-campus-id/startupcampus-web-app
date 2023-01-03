import { Box, Grid, Stack, Avatar } from "@mui/material";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router"
import HTMLParser from "../HTMLParser";

export default function BeasiswaKriteria({ kriteria }) {
  const router = useRouter()
  const isUX = router.asPath.match("ux-design")

  return (
    <Box id="kriteria" pt={6}>
      <AccentText>Kriteria Calon Peserta</AccentText>
      <MyTitle gutterBottom>
        Siapa Saja yang Bisa <HighlightText margin-left="8px">Bergabung ?</HighlightText>
      </MyTitle>
      <Grid container my={4} spacing={3}>
        <Grid item xs={12} md={isUX ? 12 : 5} mb={isUX ? 4 : undefined}>
          {isUX ?
            <Grid container xs={12} spacing={3}>
              {kriteria?.map((v, i) => (
                <Grid item xs={6} md={3} key={i}>
                  <Stack spacing={1}>
                    <Avatar src={v.icon} sx={{ height: "50px", width: "50px" }} />
                    <MyDesc variant="body1" color="sc_black" sx={{ fontWeight: 500 }}>
                      <HTMLParser>{v.content}</HTMLParser>
                      <MyDesc sx={{ fontWeight: 400 }}>{v.description}</MyDesc>
                    </MyDesc>
                  </Stack>
                </Grid >
              ))
              }
            </Grid>
            :
            <Stack spacing={2}>
              {kriteria?.map((v, i) => (
                <Stack direction="row" spacing={1} key={i}>
                  <CheckCircleIcon sx={{ color: "sc_blue.main" }} />
                  <MyDesc><HTMLParser>{v.content}</HTMLParser></MyDesc>
                </Stack>
              ))}
            </Stack>
          }
        </Grid>
        <Grid item xs={12} md={isUX ? 12 : 7}>
          <Box
            sx={{
              width: "100%",
              minHeight: 390,
              backgroundImage: "url(/images/kriteria.png)",
              backgroundSize: "cover",
              overflow: "hidden",
              borderRadius: 4,
              filter: "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
