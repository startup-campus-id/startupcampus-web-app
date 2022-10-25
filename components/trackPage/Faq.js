import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import MyAccordion from "./MyAccordion";

export default function Faq({ nickname }) {
  return (
    <Stack id="faq" data-aos="fade-up">
      <AccentText>Frequently Asked Question’s</AccentText>
      <MyTitle gutterBottom>
        Punya Pertanyaan Seputar Program{" "}
        <HighlightText>{nickname} ?</HighlightText>
      </MyTitle>
      <MyDesc>
        Berikut adalah kumpulan pertanyaan yang sering diajukan untuk membantu
        kamu lebih memahami program ini.
      </MyDesc>
      <MyAccordion
        title={`FAQ’s Program ${nickname}`}
        subtitle={
          "Kami telah membuat daftar pertanyaan-pertanyaan yang sering ditanyakan seputar Startup Campus dan Program Founder."
        }
        content={
          <Typography
            color={"sc_blue.main"}
            sx={{ textDecoration: "underline" }}
          >
            <Link href={"#"}>Lebih Lanjut Seputar FAQ’s</Link>
          </Typography>
        }
      />
    </Stack>
  );
}
