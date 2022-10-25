import React from "react";
import { Stack, Typography } from "@mui/material";
import MyInput from "./MyInput";
import MySelect from "./MySelect";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const media = [
  "Instagram",
  "Google Search",
  "Teman/Kerabat/Saudara",
  "LinkedIn",
  "Twitter",
];

const IndentityForm = () => {
  return (
    <Stack spacing={3}>
      <Typography fontWeight={700} color={"sc_gray.dark"}>
        DATA PRIBADI
      </Typography>
      <MyInput
        label="Nama Lengkap *"
        name={"name"}
        placeholder={"Pramudya Aneska"}
        icon={<PersonOutlineOutlinedIcon />}
      />
      <MyInput
        label="Umur *"
        name={"age"}
        placeholder={"18"}
        type="number"
        max={3}
      />
      <MyInput
        label="No. Whatsapp *"
        name={"num_phone"}
        placeholder={"+62 812 3456 7890"}
        type="number"
        icon={<PhoneOutlinedIcon />}
      />
      <MySelect
        label={"Darimana Kamu Mengetahui Startup Campus?*"}
        data={media}
        name="source_info"
      />
      <MyInput
        label="Profil LinkedIn *"
        name={"linked_url"}
        placeholder={"https://www.linkedin.com/in/alifnabilana/"}
      />
      <MyInput
        label="Motivasi Kamu Mengikuti Startup Campus *"
        name={"motivasi"}
        rows={4}
        multiline
        type={"text-area"}
        placeholder={
          "Ceritakan kenapa kamu tertarik mengikuti bootcamp di Startup Campus"
        }
      />
    </Stack>
  );
};

export default IndentityForm;
