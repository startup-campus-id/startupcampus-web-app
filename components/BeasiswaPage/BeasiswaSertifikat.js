import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyTitle from '../MyTitle';

export default function BeasiswaSertifikat() {
  return (
    <Box id="sertifikat-gcc" pt={6}>
      <AccentText variant="black">
        Sertifikat Berlisensi Google
      </AccentText>
      <MyTitle gutterBottom mt={1.5}>
        <HighlightText variant="yellow">Sertifikat </HighlightText> yang Menunjang Portofolio
      </MyTitle>
      <Grid container mt={{ xs: 4, lg: 7 }}>
        <Grid item xs={12} lg={5} alignItems="center" display="flex">
          <Typography sx={{
            fontSize: 16,
            color: "sc_gray.light",
          }}>
            Berikut merupakan contoh sertifikat yang akan kamu dapatkan apabila telah menyelesaikan
            program ini dan bisa kamu bagikan di profil LinkedIn, CV, atau dokumen lainnya untuk melamar di perusahaan impian.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={7} mt={{ xs: 4, lg: 0 }} justifyContent={{ xs: "center", lg: "flex-end" }} display="flex">
          <Box
            component="img"
            height={"auto"}
            width={"100%"}
            maxWidth={{xs: 600, lg: 450}}
            alt="Sertifikat Google"
            src="/images/sertifikat_google.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
