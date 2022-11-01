import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import CardPorto from "./CardPorto";

export default function Portofolio({ nickname }) {
  const router = useRouter();
  return (
    <Stack id="portofolio-alumni" data-aos="fade-up">
      <AccentText>Portofolio Alumni</AccentText>
      <MyTitle gutterBottom>
        Karya-karya <HighlightText>Alumni</HighlightText> Program {nickname}
      </MyTitle>
      <MyDesc>
        Hasil project riil alumni selama mengikuti Bootcamp UI/UX Design di
        Startup Campus {router.asPath.match("founder") ? " " : "(Coming Soon)"}
      </MyDesc>
      {router.asPath.match("founder") && (
        <Grid container spacing={2} mt={2}>
          <CardPorto />
          <CardPorto
            img={"/images/DigiHunter.png"}
            team={"Digital Hunter"}
            name={"Jhosepin V., Roland C. , & Ananda A."}
          />
          <CardPorto
            img={"/images/Magalodon.png"}
            team={"Magalodon"}
            name={"Frans R., Lisya J., Nadia E., & Agus H."}
          />
        </Grid>
      )}
    </Stack>
  );
}
