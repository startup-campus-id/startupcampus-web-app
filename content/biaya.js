import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export const biaya = [
  {
    title: "100 %Pembayaran Dimuka",
    subtitle: (
      <span>
        Pembayaran <i>bootcamp</i> secara penuh melalui partner{" "}
        <i>payment gateway</i> Xendit
      </span>
    ),
    content: (
      <Typography>
        Pembayaran dilakukan dimuka dengan mengikuti biaya yang berlaku , yaitu
        sebesar <strong>Rp4.000.000.</strong>
      </Typography>
    ),
  },

  {
    title: "Cicilan",
    subtitle: (
      <span>
        Kamu bisa mencicil pembayaran menggunakan layanan <i>paylaters</i>
      </span>
    ),
    content: " ",
  },
  {
    title: "Beasiswa Startup Campus",
    subtitle: "Nantikan informasi kami selanjutnya!",
    content: " ",
  },
];
