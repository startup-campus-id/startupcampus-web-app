import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
import CloseIcon from '@mui/icons-material/Close';
import DevicesIcon from '@mui/icons-material/Devices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

import MyButton from '../components/MyButton';
import useStudiIndepenPopup from '../hooks/useStudiIndependenPopup';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PopupStudiIndependen({ children, ...other }) {
  const { siPopup, setSiPopup } = useStudiIndepenPopup();
  const handleClose = () => {
    setSiPopup(false);
  };

  const tracks = [
    {
      label: 'The Founder',
      link: 'https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/a2445b79-54e3-11ed-9629-c6d15e70b51f',
      description:
        'Pelajari cara membangun startup-mu dari awal hingga menjadi produk yang siap diluncurkan.',
      icon: <BusinessIcon sx={{ color: 'sc_blue.main' }} />,
    },
    {
      label: 'UI/UX Design',
      link: 'https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/b908fca1-54ea-11ed-9629-c6d15e70b51f',
      description:
        'Pelajari cara membuat aplikasi yang interaktif dan ramah pengguna mulai dari dasar.',
      icon: <DevicesIcon sx={{ color: 'sc_blue.main' }} />,
    },
    {
      label: 'Data Science',
      link: 'https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/67c155d5-54ea-11ed-9629-c6d15e70b51f',
      description:
        'Menjadi talenta siap kerja di bidang DS mulai dari dasar hingga siap memecahkan tantangan bisnis.',
      icon: <BarChartIcon sx={{ color: 'sc_blue.main' }} />,
    },
    {
      label: 'Artificial Intelligence',
      link: 'https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/311b6585-54eb-11ed-9629-c6d15e70b51f',
      description:
        'Mahir di bidang AI melalui berbagai pendekatan dan model AI dengan spesifikasi Computer Vision.',
      icon: <PsychologyIcon sx={{ color: 'sc_blue.main' }} />,
    },
  ];

  return (
    <Dialog
      onClose={handleClose}
      open={siPopup}
      fullWidth={true}
      maxWidth={'sm'}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          marginBottom: { xs: 10, md: undefined },
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        <Typography
          variant={'h5'}
          fontWeight={800}
          textAlign="center"
          sx={{ color: 'sc_blue.main' }}
        >
          Pilih Trek yang Kamu Inginkan!
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ padding: { xs: 0, md: undefined } }}>
        <List>
          {tracks.map((v, i) => (
            <ListItem alignContent="center" key={i}>
              <ListItemButton
                divider={i !== tracks.length - 1}
                component="a"
                href={v.link}
              >
                <ListItemIcon>
                  <Box
                    component="div"
                    sx={{
                      backgroundColor: '#B4CEFB',
                      padding: 1.25,
                      borderRadius: '50%',
                    }}
                  >
                    {v.icon}
                  </Box>
                </ListItemIcon>
                <ListItemText sx={{ marginLeft: 2 }}>
                  <Typography fontWeight={500}>{v.label}</Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {v.description}
                  </Typography>
                  <Link
                    href={v.link}
                    sx={{
                      margin: 0,
                      fontWeight: 400,
                      fontSize: '0.875rem',
                    }}
                  >
                    Daftar sekarang!
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions
        sx={{ display: { md: 'none' }, padding: { xs: 0, md: undefined } }}
      >
        <MyButton width="100%" onClick={handleClose}>
          <Typography fontWeight={600}>Tutup</Typography>
        </MyButton>
      </DialogActions>
    </Dialog>
  );
}

export default PopupStudiIndependen;
