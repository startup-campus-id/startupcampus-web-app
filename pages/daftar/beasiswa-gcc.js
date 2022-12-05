import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MultiStep from "../../components/MultiStep";
import MyButton from "../../components/MyButton";
import { createClient } from "contentful";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import Image from "next/image";
import MyTitle from "../../components/MyTitle";
import MyDesc from "../../components/MyDesc";
import BeasiswaGCCForm from "../../components/RegistPage/BeasiswaGCCForm";
import { useLeavePageConfirm } from "../../components/RegistPage/PromptBeforeLeave";
import BeasiswaGCCQuestionForm from "../../components/RegistPage/BeasiswaGCCQuestionForm";
import { useMyForm } from "../../context/FormContext";
import axios from "axios";
import { BASE_URL } from "../../sc.config";
import AccentText from "../../components/AccentText";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const helper = [
  "Hanya memerlukan 5 menit untuk mengisi formulir",
  "Akan dihubungi oleh tim",
];
const steps = ["Identitas Diri dan Pilih Program", "Jawab Pertanyaan"];
function Daftar({ paket, course }) {
  const router = useRouter();
  // useLeavePageConfirm(true)

  const { register, handleSubmit, watch, errors, setError: formSetError } = useMyForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState(0);

  const showSwalError = (error_message) => {
    MySwal.fire({
      html: (
        <Typography>
          {error_message}
        </Typography>
      ),
      icon: "error",
      // toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const countWords = (str) => {
    if (typeof str === "string") {
      return str.trim().split(/\s+/).length;
    }
    return 0
  }

  const setInvoice = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      const isError = false
      if (countWords(data.motivasi) > 100) {
        isError = true
      }
      if (countWords(data.mengapaMemilih) > 100) {
        isError = true
      }
      if (countWords(data.bagaimanaMendukungKarir) > 100) {
        isError = true
      }
      if (isError) {
        setLoading(false);
        setError(true);
        setState((prev) => prev - 1);
        return
      }

      let sentStatus = data.status
      if (data.status === "Lainnya") {
        sentStatus = data.statusLainnya
      }
      formData.append("nama", data.nama);
      formData.append("email", data.email);
      formData.append("whatsapp", String(data.whatsapp));
      formData.append("status", sentStatus);
      if (data.status === "Mahasiswa") {
        formData.append("fakultas", data.fakultas);
        formData.append("jurusan", data.jurusan);
        formData.append("semester", parseInt(data.semester));
      }
      if (data.status === "Pekerja") {
        formData.append("divisi", data.divisi);
        formData.append("jabatan", data.jabatan);
      }

      formData.append("instansi", data.instansi);
      formData.append("motivasi", data.motivasi);
      formData.append("mengapaMemilih", data.mengapaMemilih);
      formData.append("bagaimanaMendukungKarir", data.bagaimanaMendukungKarir);

      if (data.twibbon.path) {
        formData.append("twibbon", data.twibbon);
      }
      axios
        .post(`${BASE_URL}/gcc-scholarship/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setError(false);
          setLoading(false);
          router.push(`/success-gcc-scholarship`);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
          setState((prev) => prev - 1);
          if (err.response.status >= 400 && err.response.status < 500) {
            const data = err.response.data
            const message = data.message
            const status = err.response.status
            showSwalError(`${status} ${message}`);
          } else {
            const message = err.message
            const status = err.response.status
            showSwalError(`${status} ${message}`);
          }

        });
    } catch (e) {
      setLoading(false);
      setError(true);
      console.error(e.message);
    }
  };

  const onSubmit = (data) => {
    setState((prev) => prev + 1);
    if (state == 1) {
      setInvoice(data);
    }
  };

  const step = [
    <BeasiswaGCCForm key={0} />,
    <BeasiswaGCCQuestionForm key={1} />,
    <Stack key={2} alignItems="center" spacing={4}>
      {loading ? (
        <>
          <Typography>Menyimpan Data</Typography>
          <CircularProgress />
        </>
      ) : error ? (
        <Typography color={"red"}>Terjadi kesalahan</Typography>
      ) : (
        <>
          <Typography>Berhasil menyimpan Data</Typography>
          <CircularProgress />
        </>
      )}
    </Stack>,
  ];

  return (
    <>
      <Head>
        <title>Daftar | Startup Campus</title>
      </Head>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(173, 232, 244, 0.1) 0%, rgba(173, 232, 244, 0) 100%)",
        }}
      >
        <Container>
          <Grid mt={3} py={10} justifyContent="center" container>
            <Grid item xs={12} md={8} mb={6}>
              <MultiStep step={state} data={steps} />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{
                background: "#FFFFFF",
                border: "2px solid #BDBDBD",
                boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Grid item md={8} py={8} px={4}>
                <AccentText>Form Pendaftaran Beasiswa GCC</AccentText>
                <MyTitle gutterBottom variant="h5">
                  Daftarkan dirimu sekarang, mulailah dengan beberapa langkah
                  mudah.
                </MyTitle>
                <MyDesc>
                  Setelah mendaftar, tim kami akan segera menghubungi kamu untuk
                  informasi lebih lanjut.
                </MyDesc>

                <Stack
                  component={"form"}
                  mt={4}
                  spacing={2}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {step[state]}
                  <Box
                    display={"flex"}
                    justifyContent={state > 0 ? "space-between" : "flex-end"}
                  >
                    {state > 0 && state < 2 && (
                      <MyButton
                        variant="outlined"
                        onClick={() => setState((prev) => prev - 1)}
                      >
                        Kembali
                      </MyButton>
                    )}
                    {state >= 0 && state < 2 && (
                      <MyButton type="submit">
                        {state == 0 ? "Lanjut" : "Kirim"}
                      </MyButton>
                    )}
                  </Box>
                </Stack>
              </Grid>

              <Grid item md={4} sx={{ background: "#0056D2" }} p={4}>
                {state > 0 && (
                  <Stack mb={6} spacing={2}>
                    <Typography color="sc_white.main" fontWeight={700}>
                      Kelas yang kamu ikuti
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <ImportContactsRoundedIcon color="sc_white" />
                      <Typography color="sc_white.main">
                        {watch("track")}
                      </Typography>
                    </Stack>
                  </Stack>
                )}
                <List>
                  {helper.map((text, index) => (
                    <ListItem
                      key={index}
                      disablePadding
                      alignItems="flex-start"
                    >
                      <ListItemIcon sx={{ minWidth: "30px !important" }}>
                        <Image src={"/check.svg"} width={20} height={20} />
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ color: "white" }} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Daftar;
