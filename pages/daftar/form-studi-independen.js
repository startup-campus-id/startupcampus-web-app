import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Label } from "@mui/icons-material";
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
import WordBreak from "../../components/WordBreak";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { createClient } from "contentful";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import Image from "next/image";
import { TaglineContext } from "../_app";
import MyTitle from "../../components/MyTitle";
import MyDesc from "../../components/MyDesc";
import ChooseProgramForm from "../../components/RegistPage/ChooseProgramForm";
import { useMyForm } from "../../context/FormContext";
import IndentityForm from "../../components/RegistPage/IndentityForm";
import PaymentForm from "../../components/RegistPage/PaymentForm";
import axios from "axios";
import { useRouter } from "next/router";
import MyInput from "../../components/RegistPage/MyInput";
import MySelect from "../../components/RegistPage/MySelect";
import { kelas } from "../../content/kelas";
import DropZone from "../../components/RegistPage/DropZone";
import MyCheckBox from "../../components/RegistPage/MyCheckBox";

const helper = [
  "Hanya memerlukan 5 menit untuk mengisi formulir",
  "Akan dihubungi oleh tim",
];

function FormStudiIndependen({ paket, course = null }) {
  const { register, setValue, handleSubmit, watch, errors } = useMyForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [state, setState] = useState(0);

  const setInvoice = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/payment", {
        name: data.name,
        email: data.email,
        program: data.track,
        paket: data.paket,
        numPhone: data.num_phone,
      });
      // console.log(response);
      setLoading(false);
      const { invoice_url } = response.data;
      setTimeout(() => {
        window.location.replace(invoice_url);
      }, 1000);
    } catch (e) {
      setLoading(false);
      setError(true);
      console.error(e.message);
    }
  };

  useEffect(() => {}, [loading]);

  const onSubmit = (data) => {
    setState((prev) => prev + 1);
    router.push("/payment/success");
  };
  const mkelas = kelas.map((items) => items.title);

  const guideTwibbon = [
    <span key={0}>
      Lampirkan bukti bahwa kamu telah upload twibbon di sosial mediamu.
    </span>,
    <span key={1}>
      File twibbon dapat kamu unduh{" "}
      <a href="#" style={{ color: "blue", textDecoration: "underline" }}>
        disini.
      </a>
    </span>,
  ];

  const steps = [
    <Stack spacing={3} key={0}>
      <Typography fontWeight={700} color={"sc_gray.dark"}>
        DATA PRIBADI
      </Typography>
      <MyInput
        label="Nama Lengkap *"
        name="fullname"
        type={"text"}
        placeholder={"Pramudya Aneska"}
      />
      <MyInput
        label="E-mail *"
        name="email"
        type={"email"}
        placeholder={"Pramudyaneska@gmail.com"}
      />
      <MyInput
        label="No. Whatsapp *"
        name={"num_phone"}
        placeholder={"628XXXX"}
        type="number"
      />
      <MySelect
        label="Apa yang Ingin Kamu Pelajari? *"
        name="track"
        data={mkelas}
        {...register("track", { required: "Pilih salah satu" })}
      />
      <MyInput
        label="Perguruan Tinggi (Ditulis Tanpa Disingkat) *"
        name="ptn"
        type={"text"}
        placeholder={"Universitas Indonesia"}
        {...register("ptn", { required: "isi dulu ya" })}
      />
      <MyInput
        label="Jurusan *"
        name="jurusan"
        type={"text"}
        placeholder={"Ilmu Komunikasi"}
        {...register("jurusan", { required: "isi dulu ya" })}
      />
      <MyInput
        label="Semester *"
        name="semester"
        type={"text"}
        placeholder={"6"}
        {...register("semester", { required: "isi dulu ya" })}
      />
      <Typography fontWeight={700} color={"sc_gray.dark"}>
        INFORMASI TAMBAHAN
      </Typography>
      <Typography color={"sc_gray.dark"}>Upload Twibbon *</Typography>
      <DropZone
        helper={guideTwibbon}
        desc={"Tarik file kamu ke sini untuk mengunggah atau klik disini"}
        name="twibbon"
      />
      <MyCheckBox name="agree" />
    </Stack>,
    <Stack key={1} alignItems="center" spacing={4}>
      <Typography>Menyimpan data registrasi</Typography>
      <CircularProgress />
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
          <Grid mt={15} py={10} justifyContent="center" container>
            <Grid item xs={12} md={8} mb={6}>
              <MultiStep
                step={state}
                data={["Pilih Program", "Gabung Komunitas Startup Campus"]}
              />
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
                <MyTitle gutterBottom variant="h5">
                  Daftarkan dirimu sekarang, mulailah dengan beberapa langkah
                  mudah.
                </MyTitle>
                <MyDesc gutterBottom mb={4}>
                  Setelah mendaftar, tim kami akan segera menghubungi kamu untuk
                  informasi lebih lanjut.
                </MyDesc>

                {steps[state]}
                <Stack
                  component={"form"}
                  mt={4}
                  spacing={2}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    <MyButton type="submit">Daftar Sekarang</MyButton>
                  </Box>
                </Stack>
              </Grid>

              <Grid item md={4} sx={{ background: "#0056D2" }} p={4}>
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

export default FormStudiIndependen;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { items: paket } = await client.getEntries({
    content_type: "paketKelas",
  });

  const { items: tagline } = await client.getEntries({
    content_type: "section1",
  });

  // const response = await axios.get(process.env.BE_BASE_URL + "/coursepath");

  return {
    props: {
      paket,
      tagline,
      // course: await response.data,
    },
    revalidate: 1,
  };
}
