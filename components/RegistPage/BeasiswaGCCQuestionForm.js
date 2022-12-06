
import React, { Fragment, useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { gccStatus } from "../../content/gccStatus.js";
import { gccClass } from "../../content/gccClass.js";
import { useMyForm } from "../../context/FormContext";
import MyCheckBox from "./MyCheckBox";
import MyInput from "./MyInput";
import MyKelas from "./MyKelas";
import MySelect from "./MySelect";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { byteToMb } from "../../utils/byteToMb";
import { SignalCellularNullSharp } from "@mui/icons-material";
import DropZone from "./DropZone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

const guideFileSPTJM = [
  "Ditandatangani oleh Rektor/Warek/Direktur/Wakil Direktur Perguruan Tinggi.",
  "Diperbolehkan menggunakan tangan digital yang disertai cap.",
];
const guideFileRekom = [
  "Surat rekomendasi harus ditandatangani min. oleh Ketua Program Studi (diperkenankan tanpa cap).",
  "Diperbolehkan menggunakan tanda tangan digital yang disertai cap.",
  "Mahasiswa calon peserta perlu melampirkan daftar program yang akan dilamar sebagai informasi kepada perguruan tinggi.",
];
const BeasiswaGCCForm = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useMyForm();
  const guideTwibbon = [
    <span key={0}>
      Lampirkan bukti bahwa kamu telah upload twibbon di sosial mediamu.
    </span>,
    <span key={1}>
      File twibbon dapat kamu unduh{" "}
      <a
        href="https://drive.google.com/drive/folders/1m2JZGXrrHIihiSrJR8eoEr1TyCPtRC1c?usp=share_link"
        target={"_blank"}
        rel="noreferrer"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        disini.
      </a>
    </span>,
  ];

  return (
    <Stack spacing={4}>
      <MyInput
        label="Jelaskan motivasi kamu mendaftar pada program GCC x Startup Campus! (maksimal 100 kata) *"
        name="motivasi"
        rows={4}
        multiline
        type={"text-area"}
        max={100}
        maxType="word"
        showWordCount={true}
      />
      <MyInput
        label="Apa yang membuat kami harus memilihmu sebagai peserta pada program GCC x Startup Campus! (maksimal 100 kata) *"
        name="mengapaMemilih"
        rows={4}
        multiline
        type={"text-area"}
        max={100}
        maxType="word"
        showWordCount={true}
      />
      <MyInput
        label="Bagaimana program GCC x Startup Campus dapat mendukung rencana karirmu di masa yang akan datang? (maksimal 100 kata) *"
        name="bagaimanaMendukungKarir"
        rows={4}
        multiline
        type={"text-area"}
        max={100}
        maxType="word"
        showWordCount={true}
      />
      <Typography color={"sc_gray.dark"}>Upload Twibbon (Opsional)</Typography>
      <DropZone
        helper={guideTwibbon}
        desc={"Tarik file kamu ke sini untuk mengunggah atau klik disini"}
        name="twibbon"
      />
      <MyCheckBox name="agree" text="Saya menyatakan bahwa data yang saya isi adalah benar" />
    </Stack>
  );
};

export default BeasiswaGCCForm;
