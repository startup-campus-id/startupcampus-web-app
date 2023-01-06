import { SignalCellularNullSharp } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { kelas } from '../../content/kelas';
import { useMyForm } from '../../context/FormContext';
import { byteToMb } from '../../utils/byteToMb';
import DropZone from './DropZone';
import MyCheckBox from './MyCheckBox';
import MyInput from './MyInput';
import MyKelas from './MyKelas';
import MySelect from './MySelect';

const guideFileSPTJM = [
  'Ditandatangani oleh Rektor/Warek/Direktur/Wakil Direktur Perguruan Tinggi.',
  'Diperbolehkan menggunakan tangan digital yang disertai cap.',
];
const guideFileRekom = [
  'Surat rekomendasi harus ditandatangani min. oleh Ketua Program Studi (diperkenankan tanpa cap).',
  'Diperbolehkan menggunakan tanda tangan digital yang disertai cap.',
  ' Mahasiswa calon peserta perlu melampirkan daftar program yang akan dilamar sebagai informasi kepada perguruan tinggi.',
];
const ChooseProgramForm = () => {
  const router = useRouter();
  const mkelas = kelas.map((items) => items.title);
  const { register, handleSubmit, watch, errors } = useMyForm();

  return (
    <Stack spacing={4}>
      <MyInput
        label="Email *"
        name="email"
        type={'email'}
        placeholder={'pramudya@gmail.com'}
        icon={<MailOutlineIcon />}
      />
      <MySelect
        label="Apa yang Ingin Kamu Pelajari? *"
        name="track"
        track={true}
        data={mkelas}
        {...register('track', { required: 'Pilih salah satu' })}
      />
      {router.pathname === '/daftar/form-studi-independen' && (
        <>
          <MyInput
            label="Semester Berapa *"
            name="semester"
            type={'text'}
            placeholder={'5'}
            {...register('semester', { required: 'isi dulu ya' })}
          />
          <MyInput
            label="Berasal dari universitas mana? *"
            name="universitas"
            type={'text'}
            placeholder={'Universitas'}
            {...register('universitas', { required: 'isi dulu ya' })}
          />
          <MyInput
            label="Jurusan apa? *"
            name="Jurusan"
            type={'text'}
            placeholder={'Jurusan Bahasa Perancis'}
            {...register('jurusan', { required: 'isi dulu ya' })}
          />
          <Stack spacing={3}>
            <Typography gutterBottom fontWeight={700}>
              File yang perlu disematkan *
            </Typography>
            <DropZone
              helper={guideFileSPTJM}
              desc={
                'Tarik file SPTJM kamu kesini untuk mengunggah atau klik disini'
              }
              name="sptjm"
            />
            <DropZone
              helper={guideFileRekom}
              desc={
                'Tarik file Surat Rekomendasi kamu ke sini untuk mengunggah'
              }
              name="surkom"
            />
          </Stack>
        </>
      )}
      <MyCheckBox name="agree" />
    </Stack>
  );
};

export default ChooseProgramForm;
