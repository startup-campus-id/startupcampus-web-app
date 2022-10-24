import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export const biaya = [
  {
    title: "Pembayaran Dimuka",
    subtitle:
      "Pembayaran dimuka dilakukan melalui partner payment gateway kami, Xendit.",
    content: (
      <Typography>
        Pembayaran dilakukan dimuka dengan mengikuti biaya yang berlaku , yaitu
        sebesar <strong>Rp4.015.050.</strong> Metode ini berlaku untuk
        pendaftaran dengan harga normal dan harga promo.
      </Typography>
    ),
  },

  {
    title: "Cicilan Hingga 12x",
    subtitle:
      "Ada banyak opsi cicilan agar kamu bisa pelajari dan pertimbangkan.",
    content: (
      <Stack spacing={3}>
        <Typography>
          Startup Campus bekerja sama dengan Xendit untuk memberikan opsi
          pembayaran dengan metode cicilan. Pilihan pembayaran tergantung
          padamu. Jika kamu memutuskan untuk menggunakan metode cicilan,
          pastikan untuk memilih opsi yang paling sesuai untukmu."
        </Typography>
        <Typography
          sx={{ textDecoration: "underline !important" }}
          color={"sc_blue.main"}
        >
          <Link href={"#"}>
            Lihat ketentuan pembayaran dengan metode cicilan
          </Link>
        </Typography>
      </Stack>
    ),
  },
  {
    title: "Beasiswa Startup Campus",
    subtitle: "Mohon maaf, untuk saat ini beasiswa belum tersedia.",
    content: null,
  },
];
