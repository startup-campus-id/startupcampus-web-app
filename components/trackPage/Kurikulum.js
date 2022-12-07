import { Stack } from "@mui/material";
import React from "react";
import AccentText from "../AccentText";
import BasicTabs from "../BasicTabs";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import { useRouter } from "next/router";

export default function Kurikulum({
  kurikulum,
  nickname = "NULL",
  desc = "",
  link = "#",
}) {
  const router = useRouter();
  const isUIUX = router.asPath.match("uiux")

  return (
    <Stack id="kurikulum" data-aos="fade-up">
      <AccentText>Kurikulum</AccentText>
      {
        isUIUX ?
          <MyTitle gutterBottom>
            4 Langkah Menjadi <HighlightText>{nickname}</HighlightText>
          </MyTitle>
          :
          <MyTitle gutterBottom>
            4 Tahap Menjadi <HighlightText>{nickname}</HighlightText>
          </MyTitle>

      }
      <MyDesc>{desc}</MyDesc>
      <BasicTabs data={kurikulum} link={link} />
    </Stack>
  );
}
