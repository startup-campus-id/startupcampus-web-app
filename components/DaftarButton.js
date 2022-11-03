import React, { useState } from "react";
import AlertDialog from "./AlertDialog";
import MyButton from "./MyButton";

export default function DaftarButton({ handleClick }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MyButton onClick={handleClickOpen}>Daftar sekarang</MyButton>
      <AlertDialog open={open} handleClose={handleClose} />
    </>
  );
}
