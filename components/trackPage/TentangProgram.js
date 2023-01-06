import CollectionsIcon from '@mui/icons-material/Collections';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { tentang } from '../../content/tentanProgram';
import AccentText from '../AccentText';
import HighlightText from '../HighlightText';
import MyDesc from '../MyDesc';
import MyTitle from '../MyTitle';

export default function TentangProgram({ nick, desc }) {
  const router = useRouter();
  const isDataScience = router.asPath.match('data-science');

  return (
    <Box id="about-program" pt={6} data-aos="fade-up">
      <AccentText>Tentang Program</AccentText>
      {isDataScience ? (
        <MyTitle gutterBottom>
          Jadi Ahli Data Science yang <HighlightText>Berbeda</HighlightText>
        </MyTitle>
      ) : (
        <MyTitle gutterBottom>
          Jadilah {nick} yang <HighlightText>Berbeda</HighlightText>
        </MyTitle>
      )}
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
              height: '450px',
              width: '100%',
              backgroundImage: "url('/images/meeting2.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 8,
              filter: 'drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
