import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
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
} from '@mui/material';
import axios from 'axios';
import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import AccentText from '../../components/AccentText';
import MultiStep from '../../components/MultiStep';
import MyButton from '../../components/MyButton';
import MyDesc from '../../components/MyDesc';
import MyTitle from '../../components/MyTitle';
import DropZone from '../../components/RegistPage/DropZone';
import MyCheckBox from '../../components/RegistPage/MyCheckBox';
import MyInput from '../../components/RegistPage/MyInput';
import MySelect from '../../components/RegistPage/MySelect';
import { kelas } from '../../content/kelas';
import { useMyForm } from '../../context/FormContext';
import { BASE_URL } from '../../sc.config';

const helper = [
  'Hanya memerlukan 5 menit untuk mengisi formulir',
  'Akan dihubungi oleh tim',
  <Typography component="span" key={3}>
    {
      'Persyaratan yang perlu dipersiapkan, yaitu surat SPTJM dan surat rekomendasi dapat diunduh'
    }{' '}
    <Typography component="span" sx={{ textDecoration: 'underline' }}>
      <Link
        href={
          'https://drive.google.com/drive/folders/1IwFkA97s7bwXJ9TCtC9ZsrjazM-NyAmM?usp=sharing'
        }
        passHref
        legacyBehavior
      >
        <a target={'_blank'} rel="noreferrer">
          di sini.
        </a>
      </Link>
    </Typography>
  </Typography>,
];

const media = [
  'Website Kampus Merdeka',
  'Telegram',
  'Faceboook',
  'Instagram @startcampus.id',
  'Influencer/Komunitas',
];

function FormStudiIndependen() {
  const router = useRouter();
  const { register, setValue, handleSubmit, watch, errors } = useMyForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState(0);

  const onSubmit = (data) => {
    setState((prev) => prev + 1);
    setLoading(true);
    try {
      const formData = new FormData();
      if (data.twibbon.path) {
        formData.append('twibbon', data.twibbon);
      }
      formData.append('status', 'kampusmerdeka');
      formData.append('email', data.email);
      formData.append('fullname', data.name);
      formData.append('phoneNumber', String(data.num_phone));
      formData.append('coursePathId', parseInt(data.track));
      formData.append('university', data.ptn);
      formData.append('major', data.jurusan);
      formData.append('semester', data.semester);
      formData.append('informationSource', data.source_info);
      formData.append('nim', data.nim);
      formData.append('recommendation', data.recommendation);

      axios
        .post(`${BASE_URL}/users`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          setLoading(false);
          router.push(`/success?token=${res.data.data.token}`);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
          console.error(err.message);
        });
    } catch (e) {
      setLoading(false);
      setError(true);
      console.error(e.message);
    }
  };
  const mkelas = kelas.map((items) => items.title);

  const guideTwibbon = [
    <span key={0}>
      Lampirkan bukti bahwa kamu telah upload twibbon di sosial mediamu.
    </span>,
    <span key={1}>
      File twibbon dapat kamu unduh{' '}
      <a
        href="https://drive.google.com/drive/folders/142TyE0rOvdzGywEbwrTDPxHT0pzSMBoC"
        target={'_blank'}
        rel="noreferrer"
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        disini.
      </a>
    </span>,
  ];

  const steps = [
    <Stack spacing={3} key={0}>
      <Typography fontWeight={700} color={'sc_gray.dark'}>
        DATA PRIBADI
      </Typography>
      <MyInput
        label="Nama Lengkap *"
        name={'name'}
        placeholder={'Pramudya Aneska'}
        icon={<PersonOutlineOutlinedIcon />}
      />
      <MyInput
        label="Email *"
        name="email"
        type={'email'}
        placeholder={'pramudya@gmail.com'}
        icon={<MailOutlineIcon />}
      />
      <MyInput
        label="No. Whatsapp *"
        name={'num_phone'}
        placeholder={'081234567890'}
        type="number"
        max={15}
        icon={<PhoneOutlinedIcon />}
      />
      <MySelect
        label="Apa yang Ingin Kamu Pelajari? *"
        name="track"
        track={true}
        data={mkelas}
        {...register('track', { required: 'Pilih salah satu' })}
      />
      <MyInput
        label="Perguruan Tinggi (Ditulis Tanpa Disingkat) *"
        name="ptn"
        type={'text'}
        placeholder={'Universitas Indonesia'}
        {...register('ptn', { required: 'isi dulu ya' })}
      />
      <MyInput
        label="Jurusan *"
        name="jurusan"
        type={'text'}
        placeholder={'Ilmu Komunikasi'}
        {...register('jurusan', { required: 'isi dulu ya' })}
      />
      <MyInput
        label="Semester *"
        name="semester"
        type={'number'}
        max={2}
        placeholder={'6'}
        {...register('semester', { required: 'isi dulu ya' })}
      />
      <MyInput
        label="NIM *"
        name="nim"
        type={'text'}
        placeholder={'1923XXX'}
        {...register('nim', { required: 'isi dulu ya' })}
      />
      <Typography fontWeight={700} color={'sc_gray.dark'}>
        INFORMASI TAMBAHAN
      </Typography>

      <MySelect
        label={'Darimana Kamu Mengetahui Startup Campus?*'}
        data={media}
        name="source_info"
      />

      <MyInput
        label={
          <span>
            Nama dan Nomor WA rekan Anda yang ingin Anda rekomendasikan dalam
            Program Startup Campus *<br />
            <Typography variant="caption">
              Contoh : Mariana (0812345678), Silvana (081212121212), Fernando
              (08123123123)
            </Typography>
          </span>
        }
        name="recommendation"
        type={'text'}
        placeholder={''}
        {...register('recommendation', { required: 'isi dulu ya' })}
      />

      <Typography color={'sc_gray.dark'}>Upload Twibbon (Opsional)</Typography>
      <DropZone
        helper={guideTwibbon}
        desc={'Tarik file kamu ke sini untuk mengunggah atau klik disini'}
        name="twibbon"
      />
      <MyCheckBox name="agree" />
    </Stack>,
    <Stack key={1} alignItems="center" spacing={4}>
      {loading ? (
        <>
          <Typography>Menyimpan Data</Typography>
          <CircularProgress />
        </>
      ) : error ? (
        <Typography color={'red'}>Terjadi kesalahan</Typography>
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
            'linear-gradient(180deg, rgba(173, 232, 244, 0.1) 0%, rgba(173, 232, 244, 0) 100%)',
        }}
      >
        <Container>
          <Grid mt={3} py={10} justifyContent="center" container>
            <Grid item xs={12} md={8} mb={6}>
              <MultiStep
                step={state}
                data={['Pilih Program', 'Gabung Komunitas Startup Campus']}
              />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{
                background: '#FFFFFF',
                border: '2px solid #BDBDBD',
                boxShadow: '0px 16px 40px rgba(112, 144, 176, 0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <Grid item md={8} py={8} px={4}>
                <AccentText>Form Studi Independen Kampus Merdeka</AccentText>
                <MyTitle gutterBottom variant="h5">
                  Daftarkan dirimu sekarang, mulailah dengan beberapa langkah
                  mudah.
                </MyTitle>
                <MyDesc gutterBottom mb={4}>
                  Setelah mendaftar, tim kami akan segera menghubungi kamu untuk
                  informasi lebih lanjut.
                </MyDesc>

                <Stack
                  component={'form'}
                  mt={4}
                  spacing={2}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {steps[state]}
                  <Box
                    display={state == 0 ? 'flex' : 'none'}
                    justifyContent={'flex-end'}
                  >
                    <MyButton type="submit">Daftar Sekarang</MyButton>
                  </Box>
                </Stack>
              </Grid>

              <Grid item md={4} sx={{ background: '#0056D2' }} p={4}>
                <List>
                  {helper.map((text, index) => (
                    <ListItem
                      key={index}
                      disablePadding
                      alignItems="flex-start"
                    >
                      <ListItemIcon sx={{ minWidth: '30px !important' }}>
                        <Image src={'/check.svg'} width={20} height={20} />
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ color: 'white' }} />
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
