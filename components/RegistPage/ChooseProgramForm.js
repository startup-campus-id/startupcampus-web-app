import React, { Fragment } from "react";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { kelas } from "../../content/kelas";
import { useMyForm } from "../../context/FormContext";
import MyCheckBox from "./MyCheckBox";
import MyInput from "./MyInput";
import MyKelas from "./MyKelas";
import MySelect from "./MySelect";
import { useRouter } from "next/router";

const ChooseProgramForm = ({ paket }) => {
  const router = useRouter();
  console.log(router.pathname);
  const mkelas = kelas.map((items) => items.title);
  const { register, handleSubmit, watch, errors } = useMyForm();
  return (
    <Stack spacing={4}>
      <MyInput
        label="Email *"
        name="email"
        type={"email"}
        placeholder={"alifnabilaaa@gmail.com"}
      />
      <MySelect
        label="Apa yang Ingin Kamu Pelajari? *"
        name="track"
        data={mkelas}
        {...register("track", { required: "Pilih salah satu" })}
      />
      <MyKelas paket={paket} name="paket" />
      {router.pathname === "/daftar/form-studi-independen" && (
        <>
          <MyInput
            label="Semester Berapa *"
            name="semester"
            type={"text"}
            placeholder={"5"}
          />
          <MyInput
            label="Berasal dari universitas mana? *"
            name="univeristas"
            type={"text"}
            placeholder={"Universitas"}
          />
          <MyInput
            label="Jurusan apa? *"
            name="Jurusan"
            type={"text"}
            placeholder={"Jurusan Bahasa Perancis"}
          />
          <Stack>
            <Typography gutterBottom fontWeight={700}>
              File yang perlu disematkan *
            </Typography>
            <Stack
              p={6}
              border={"2px dashed #BDBDBD"}
              borderRadius={"5px"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography fontWeight={700}>.PDF, .DOC, (3MB)</Typography>
              <Typography variant="body2" color="#69686B">
                Tarik file SPTJM kamu kesini untuk mengunggah atau browse
              </Typography>
            </Stack>
            <ul>
              <li style={{ color: "#69686B" }}>
                <Typography variant="body2">
                  Ditandatangani oleh Rektor/Warek/Direktur/Wakil Direktur
                  Perguruan Tinggi.
                </Typography>
              </li>
              <li style={{ color: "#69686B" }}>
                <Typography variant="body2">
                  Diperbolehkan menggunakan tangan digital yang disertai cap.
                </Typography>
              </li>
            </ul>

            <Stack
              mt={3}
              p={6}
              border={"2px dashed #BDBDBD"}
              borderRadius={"5px"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography fontWeight={700}>.PDF, .DOC, (3MB)</Typography>
              <Typography variant="body2" color="#69686B">
                Tarik file Surat Rekomendasi kamu kesini untuk mengunggah atau
                browse
              </Typography>
            </Stack>
            <ul>
              <li style={{ color: "#69686B" }}>
                <Typography variant="body2">
                  Surat rekomendasi harus ditandatangani min. oleh Ketua Program
                  Studi (diperkenankan tanpa cap).
                </Typography>
              </li>
              <li style={{ color: "#69686B" }}>
                <Typography variant="body2">
                  Diperbolehkan menggunakan tanda tangan digital yang disertai
                  cap.
                </Typography>
              </li>
              <li style={{ color: "#69686B" }}>
                <Typography variant="body2">
                  Mahasiswa calon peserta perlu melampirkan daftar program yang
                  akan dilamar sebagai informasi kepada perguruan tinggi.
                </Typography>
              </li>
            </ul>
          </Stack>
        </>
      )}
      <MyCheckBox name="agree" />
    </Stack>
  );
};

export default ChooseProgramForm;
