import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AlertMui() {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);

  return (
    <Box
      sx={{ width: "100%", display: router.pathname == "/" ? "block" : "none" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        py={2}
        sx={{ backgroundColor: "sc_yellow.main" }}
      >
        <Typography textAlign="center">
          Unduh dokumen persyaratan Studi Independen (Kampus Merdeka){" "}
          <Typography
            component="span"
            fontWeight={700}
            sx={{ textDecoration: "underline" }}
          >
            <Link
              href={
                "https://drive.google.com/drive/folders/1IwFkA97s7bwXJ9TCtC9ZsrjazM-NyAmM?usp=sharing"
              }
              passHref
              legacyBehavior
            >
              <a target={"_blank"} rel="noreferrer">
                disini
              </a>
            </Link>
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
}
