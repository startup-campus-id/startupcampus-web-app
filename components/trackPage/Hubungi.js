import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Hubungi({ title, link }) {
  return (
    <Stack
      direction={"row"}
      justifyContent="center"
      spacing={1}
      p={2}
      mt={3}
      sx={{
        background:
          "linear-gradient(0deg, rgba(0, 86, 210, 0.1), rgba(0, 86, 210, 0.1)), #FFFFFF",
      }}
    >
      <Typography>
        {title ?? "Punya pertanyaan seputar biaya pendidikan? "}
      </Typography>
      <Typography color={"sc_blue.main"}>
        <Link href={link ?? "#"}>Hubungi sekarang!</Link>
      </Typography>
    </Stack>
  );
}
