import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GCC_URL } from "../../sc.config";

export default function BeasiswaMengapa({ name, materi }) {
  return (
    <Box id="beasiswa-gcc" pt={6}>
      <AccentText>Beasiswa Google Career Certificate</AccentText>
      <MyTitle gutterBottom>
        Mengapa <HighlightText>Harus</HighlightText> Google Career Certificate?
      </MyTitle>
      <Grid container my={4} spacing={3} direction="row-reverse">
        <Grid item xs={12} md={6}>
          <Typography variant={"body2"}>
            Dengan dukungan{" "}
            <Link href={GCC_URL} passHref>
              <Typography variant={"body2"} component="a" color="sc_blue.main">
                Google Career Certificate(GCC){"  "}
              </Typography>
            </Link>
            , Startup Campus meluncurkan program beasiswa untuk menunjang para
            pencari kerja dan pemuda di seluruh Indonesia khususnya bagian timur
            yang kurang terakomodasi.
          </Typography>

          <Typography variant={"body2"} my={4}>
            Beasiswa tersebut mencakup dukungan berupa:
          </Typography>

          <Stack spacing={4}>
            {materi?.map((v, i) => (
              <Stack direction="row" spacing={1} key={i} alignItems="center">
                <CheckCircleIcon sx={{ color: "sc_blue.main" }} />
                <MyDesc>{v}</MyDesc>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              minHeight: 570,
              backgroundImage: "url(/images/beasiswa-why-gcc.png)",
              backgroundSize: "cover",
              overflow: "hidden",
              borderRadius: 8,
              filter: "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
