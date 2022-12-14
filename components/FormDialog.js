import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Box, Divider, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import * as React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useMyForm } from '../context/FormContext';
import { BASE_URL } from '../sc.config';
import MyButton from './MyButton';
import MyInput from './RegistPage/MyInput';

const MySwal = withReactContent(Swal);
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        my: 0,
        p: 4,
        width: 600,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'relative',
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function FormDialog({
  open,
  handleClickOpen,
  handleClose,
  kurLink,
}) {
  const router = useRouter();
  const showSwalWithLink = () => {
    MySwal.fire({
      html: <Typography>Memulai mengunduh kurikulum</Typography>,
      icon: 'success',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const showSwalError = (error_message) => {
    MySwal.fire({
      html: <Typography>{error_message}</Typography>,
      icon: 'error',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const { register, handleSubmit, watch, errors } = useMyForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        BASE_URL + '/leads',
        {
          email: data.email,
          fullname: data.fullname,
          phoneNumber: data.whatsapp,
        },
        {
          'Content-Type': 'application/json',
        },
      );
      showSwalWithLink();
      handleClose();
      router.push(kurLink);
    } catch (e) {
      showSwalError('Terjadi kesalahan');
      console.log(e);
      handleClose();
    }
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography fontWeight={700} fontSize={20}>
            Request Unduh Kurikulum{' '}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent width={600}>
          <Divider />
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} my={5}>
              <MyInput
                icon={<PermIdentityIcon />}
                label={'Nama Lengkap *'}
                name="fullname"
                placeholder={'Pramudya Aneska'}
              />
              <MyInput
                icon={<MailOutlineIcon />}
                label={'Email *'}
                type="email"
                name="email"
                placeholder={'Pramudyaneska@gmail.com'}
              />
              <MyInput
                icon={<LocalPhoneOutlinedIcon />}
                label={'No. WhatsApp *'}
                type="number"
                name="whatsapp"
                placeholder={'+62 812 3456 7890'}
              />
            </Stack>
            <Stack>
              <MyButton type="submit">Unduh Kurikulum</MyButton>
            </Stack>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
