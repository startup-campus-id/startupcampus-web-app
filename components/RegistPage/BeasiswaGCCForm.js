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
  " Mahasiswa calon peserta perlu melampirkan daftar program yang akan dilamar sebagai informasi kepada perguruan tinggi.",
];
const BeasiswaGCCForm = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useMyForm();

  return (
    <Stack spacing={4}>
      <MyInput
        label="Nama *"
        name="nama"
        type={"text"}
        placeholder={"Agus Prambudi"}
        icon={<Person2OutlinedIcon />}
      />
      <MyInput
        label="Email *"
        name="email"
        type={"email"}
        placeholder={"pramudya@gmail.com"}
        icon={<MailOutlineIcon />}
      />
      <MyInput
        label="Nomor Whatsapp *"
        name="whatsapp"
        type={"phone"}
        placeholder={"08123456789"}
        icon={<WhatsAppIcon />}
      />
      <MySelect
        label="Status *"
        name="status"
        data={gccStatus}
        {...register("status", { required: "Pilih salah satu" })}
      />
      {watch("status") === "Lainnya"?
    <>
      <MyInput
        label="Sebutkan Status Anda *"
        name="statusLainnya"
        type={"text"}
      />
    </>: null}
      <MyInput
        label="Instansi *"
        name="instansi"
        type={"text"}
        placeholder={watch("status") === "Mahasiswa" ? "Universitas Indonesia" : "Nama perusahaan anda"}
        icon={<BusinessOutlinedIcon />}
      />
      {watch("status") === "Mahasiswa" ?
        <>
          <MyInput
            label="Fakultas *"
            name="fakultas"
            type={"text"}
            placeholder={"Matematika dan Ilmu Pengetahuan Alam"}
          />
          <MyInput
            label="Jurusan *"
            name="jurusan"
            type={"text"}
            placeholder={"Kimia"}
          />
          <MyInput
            label="Semester (per Februari 2023) *"
            name="semester"
            type={"number"}
            placeholder={"5"}
          />
        </> : watch("status") === "Pekerja" ?
          <>
            <MyInput
              label="Divisi *"
              name="divisi"
              type={"text"}
              placeholder={"Technology dan Informasi"}
            />
            <MyInput
              label="Jabatan *"
              name="jabatan"
              type={"text"}
              placeholder={"Junior Backend Developer"}
            />
          </>
          : null}
      <MySelect
        label="Pilihan spesialisasi GCC x Startup Campus? *"
        name="track"
        data={gccClass}
        {...register("track", { required: "Pilih salah satu" })}
      />
    </Stack>
  );
};

export default BeasiswaGCCForm;
