import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Link from 'next/link';
import * as React from 'react';

import { KAMPUS_MERDEKA } from '../utils/constant';
import MyButton from './MyButton';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog({ open, handleClose, comingSoon }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {comingSoon ? (
          <DialogTitle>{'Coming Soon !'}</DialogTitle>
        ) : (
          <>
            <DialogTitle>{'Pilih program yang ingin diikuti'}</DialogTitle>
            <DialogContent>
              <Stack direction="column" spacing={2}>
                <Link href="/daftar/bootcamp-public" underline="none" passHref>
                  <MyButton onClick={handleClose}>
                    Daftar Bootcamp for Public
                  </MyButton>
                </Link>
                <Link href={KAMPUS_MERDEKA} underline="none" passHref>
                  <MyButton
                    onClick={handleClose}
                    variant="outlined"
                    color="sc_blue"
                  >
                    Daftar Studi Independen Kampus Merdeka
                  </MyButton>
                </Link>
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}
