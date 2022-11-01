import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
// Link
export default function MyLink({ link = "#", children }) {
  return (
    <Typography
      component={"span"}
      color={"sc_blue.main"}
      sx={{ textDecoration: "underline" }}
    >
      <Link href={link}>{children}</Link>
    </Typography>
  );
}
