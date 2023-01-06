import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';

export const biaya = [
  {
    icon: <PaymentsOutlinedIcon color="sc_blue" fontSize="large" />,
    title: '100% Pembayaran di Muka',
    desc: 'Pembayaran bootcamp secara penuh  melalui partner payment gateway Xendit.',
  },

  {
    icon: <CreditCardOutlinedIcon color="sc_blue" fontSize="large" />,
    title: 'Cicilan',
    desc: 'Kamu bisa mencicil pembayaran menggunakan layanan paylater.',
  },
  {
    icon: <StarsOutlinedIcon color="sc_blue" fontSize="large" />,
    title: 'Beasiswa Startup Campus',
    desc: 'Nantikan Informasi kami selanjutnya!',
  },
];

export const benefitKampusMerdeka = [
  'Sesi Interaktif dengan expert',
  'Mentoring intensif',
  'Proyek riil',
  'Persiapan karier',
  'Komunitas alumni',
  'Modul, e-book, video belajar, dan referensi belajar lainnya',
];
