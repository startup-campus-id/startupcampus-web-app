import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import React from "react";
import MyLink from "../MyLink";

function Board() {
  return (
    <Stack
      py={4}
      px={6}
      direction={{ xs: "column", md: "row" }}
      spacing={6}
      alignItems={{ xs: "start", md: "center" }}
      justifyContent="center"
      sx={{
        width: "fit-content",
        backgroundColor: "white",
        boxShadow: "0px 16px 40px rgba(43, 44, 39, 0.2)",
        borderRadius: "16px",
        position: "relative",
        top: "-50%",
      }}
    >
      <Stack justifyContent={"flex-start"} spacing={1}>
        <Stack direction="row" spacing={1}>
          <VideoLibraryIcon color={"sc_blue"} fontSize="small" />
          <Typography variant="body2" color={"sc_gray.dark"}>
            Bootcamp for Public
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight={700}>Januari 2023</Typography>
          <MyLink link="#kelas-terdekat">Lihat detail</MyLink>
        </Stack>
      </Stack>

      <Divider orientation={"vertical"} flexItem />

      <Stack justifyContent={"flex-start"} spacing={1}>
        <Stack direction="row" spacing={1}>
          <VideoLibraryIcon color={"sc_blue"} fontSize="small" />
          <Typography variant="body2" color={"sc_gray.dark"}>
            Studi Independen (Kampus Merdeka)
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight={700}>Februari 2023</Typography>
          <MyLink link="#studi-independen">Lihat detail</MyLink>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Board;
