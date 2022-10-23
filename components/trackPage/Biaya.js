import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccentText from "../AccentText";
import HighlightText from "../HighlightText";
import MyDesc from "../MyDesc";
import MyTitle from "../MyTitle";
import AddIcon from "@mui/icons-material/Add";

export default function Biaya() {
  const [hover, setHover] = useState(false);
  return (
    <Stack>
      <AccentText>Biaya Pendidikan</AccentText>
      <MyTitle gutterBottom>
        Rincian Biaya <HighlightText>Pendidikan</HighlightText>
      </MyTitle>
      <MyDesc>
        Startup Campus berkomitmen untuk membuat pendidikan digital menjadi
        lebih mudah untuk diakses oleh siapa saja, komitmen pertama kami, yaitu
        mengurangi biaya pendaftaran menjadi <strong>Rp4.015.050*</strong> (
        yang semula Rp12.015.050) untuk waktu yang terbatas. Mulailah
        perjalananmu sebelum biaya pendaftaran kembali normal!
      </MyDesc>
      <Stack mt={4}>
        <Accordion
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{
            boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
            position: "relative",
            padding: "1em",
            "&::before": {
              content: "''",
              position: "absolute",
              width: "100%",
              height: "100%",
              border: hover ? "2px solid blue" : "unset",
            },
            transition: ".3s",
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" fontWeight={600}>
              dasdasd
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <Typography mt={4} variant="body2" color="sc_gray.dark">
              dasd
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
}
