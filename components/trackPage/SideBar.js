import { Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import DaftarButton from "../DaftarButton";
import MyButton from "../MyButton";

export default function SideBar({ listMenu }) {
  return (
    <Stack
      p={4}
      spacing={3}
      sx={{
        background: "#FFFFFF",
        boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
        borderRadius: "10px",
        position: "-webkit-sticky",
        position: "sticky !important",
        top: 0,
        alignSelf: "flex-start",
      }}
    >
      <Typography fontWeight={700}>Detail Program</Typography>
      <Divider />
      {listMenu?.map((item, idx) => (
        <Link href={"#" + item.link} underline="none" key={idx}>
          <Typography
            fontWeight={400}
            variant="body2"
            color={"sc_gray.dark"}
            className={item.link}
          >
            {item.name}
          </Typography>
        </Link>
      ))}
      <DaftarButton />
    </Stack>
  );
}
