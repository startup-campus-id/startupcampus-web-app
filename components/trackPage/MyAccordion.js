import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";

export default function MyAccordion({ title, subtitle, content, type, idx }) {
  const [hover, setHover] = useState(false);
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Stack mt={4}>
      <Accordion
        disabled={!content ? true : false}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
          position: "relative",
          padding: "1em",
          zIndex: 1,
          borderRadius: "10px",
          "&::after": {
            zIndex: -1,
            top: 0,
            left: 0,
            content: "''",
            borderRadius: "10px",
            position: "absolute",
            width: "100%",
            height: "100%",
            border:
              (hover || expanded === "panel1") && content
                ? "2px solid blue"
                : "unset",
            transition: ".1s",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls={"panel1a-content-" + idx}
          id={"panel1a-header-" + idx}
        >
          <Stack
            direction={type == "icon" ? "row" : "column"}
            spacing={1}
            alignItems={type == "icon" ? "center" : "start"}
          >
            {type == "icon" && (
              <Image src={"/images/ic_folder.svg"} width={30} height={30} />
            )}
            <Typography
              variant="body1"
              fontWeight={600}
              color={
                (hover || expanded === "panel1") && content
                  ? "sc_blue.main"
                  : ""
              }
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              fontWeight={600}
              gutterBottom
              color={"sc_gray.dark"}
            >
              {subtitle}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Typography mt={4} variant="body2" color="sc_gray.dark">
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
