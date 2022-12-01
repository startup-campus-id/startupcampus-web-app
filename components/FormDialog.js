import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MyInput from './RegistPage/MyInput';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Stack } from '@mui/material';
import MyButton from './MyButton';
import { useMyForm } from '../context/FormContext';
import axios from 'axios';
import { BASE_URL } from '../sc.config';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, width: 600 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
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

export default function FormDialog({open, handleClickOpen, handleClose}) {
    const showSwalWithLink = () => {
        MySwal.fire({
          html: (
            <Typography>
              Terima kasih telah bergabung dengan newsletter kami
            </Typography>
          ),
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      };
      const showSwalError = (error_message) => {
        MySwal.fire({
          html: (
            <Typography>
              {error_message}
            </Typography>
          ),
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      };
    const { register, handleSubmit, watch, errors } = useMyForm();
    const onSubmit = async (data) =>{
        try {
            const res = await axios.post(BASE_URL + "/leads",{
                email: data.email,
                fullname: data.fullname,
                phoneNumber: data.whatsapp
            },{    
                "Content-Type" : 'application/json'
            })
            showSwalWithLink()
           handleClose()
        } catch (e) {
            showSwalError("Terjadi kesalahan")
            console.log(e)
            handleClose()
        }
       
    }
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography fontWeight={700} fontSize={20}>Request Download Kurikulum </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers  width={600}>
            <Stack spacing={3} component="form"  onSubmit={handleSubmit(onSubmit)}>
            <MyInput icon={<PermIdentityIcon/>} label={'Nama Lengkap *'} name="fullname" placeholder={'Pramudya Aneska'}/>
            <MyInput icon={<MailOutlineIcon/>} label={'Email *'} type="email" name="email" placeholder={'Pramudyaneska@gmail.com'}/>
            <MyInput icon={<LocalPhoneOutlinedIcon/>} label={'No. WhatsApp *'} type="number" name="whatsapp" placeholder={'+62 812 3456 7890'}/>
            <MyButton type="submit">Unduh Kurikulum</MyButton>
            </Stack>
        </DialogContent>
      
      </BootstrapDialog>
    </div>
  );
}
