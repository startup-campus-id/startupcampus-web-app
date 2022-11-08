import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CheckIcon from "@mui/icons-material/Check";
import MyDesc from "../MyDesc";
import { benefitKampusMerdeka } from "../../content/biaya";
import { KAMPUS_MERDEKA } from "../../utils/constant";
import Link from "next/link";
import MyButton from "../MyButton";

const CheckWithLabel = ({ label }) => (
  <Stack direction="row" alignItems="start" spacing={1}>
    <CheckIcon color={"sc_blue"} />
    <Typography>{label ?? "This is label"}</Typography>
  </Stack>
);

export default function BiayaCard({
  icon,
  title,
  price,
  link,
  recommended = false,
}) {
  return (
    <Stack
      sx={{ backgroundColor: recommended ? "#D9E6F8" : "unset" }}
      justifyContent="end"
      borderRadius="10px"
    >
      {recommended && (
        <Stack py={2} alignItems="center">
          <Typography fontWeight={700} color={"sc_blue.main"}>
            PILIHAN TERBAIK
          </Typography>
        </Stack>
      )}
      <Stack
        p={3}
        spacing={3}
        border={`1px solid ${recommended ? "#0056D2" : "#BDBDBD"}`}
        borderRadius="10px"
        sx={{ backgroundColor: "#FFF" }}
      >
        <Stack direction="row" width={"100%"} spacing={2} alignItems="center">
          {icon ?? <AccountBalanceIcon />}
          <Typography fontWeight={700} variant={"h6"}>
            {" "}
            {title ?? "Kampus Merdeka"}{" "}
          </Typography>
        </Stack>

        <Typography fontWeight={700} color="sc_blue.main" variant="h5">
          {price ?? "Gratis"}
        </Typography>

        <Stack spacing={2}>
          <MyDesc>Durasi Belajar</MyDesc>
          <CheckWithLabel label={"4 Bulan Intensif (900 jam)"} />
        </Stack>

        <Stack
          spacing={2}
          py={4}
          sx={{
            borderTop: "1px dashed #BDBDBD",
            borderBottom: "1px dashed #BDBDBD",
          }}
        >
          <MyDesc>Apa yang Kamu Dapat</MyDesc>
          {benefitKampusMerdeka.map((v, i) => (
            <CheckWithLabel key={i} label={v} />
          ))}
        </Stack>

        <Link href={link ?? KAMPUS_MERDEKA} passHref>
          <MyButton variant={recommended ? "contained" : "outlined"}>
            Daftar Sekarang
          </MyButton>
        </Link>
      </Stack>
    </Stack>
  );
}
