import PropTypes from 'prop-types';
import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MyButton from '../components/MyButton'
import Slide from '@mui/material/Slide';
import BusinessIcon from '@mui/icons-material/Business';
import DevicesIcon from '@mui/icons-material/Devices';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';


import useStudiIndepenPopup from '../hooks/useStudiIndependenPopup';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PopupStudiIndependen({ children, ...other }) {
  const { siPopup, setSiPopup } = useStudiIndepenPopup()
  const handleClose = () => {
    setSiPopup(false)
  }

  const tracks = [
    {
      "label": "The Founder",
      "link": "https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/a2445b79-54e3-11ed-9629-c6d15e70b51f",
      "description": "Ciptakan startup-mu, pelajari cara membangun startup dari awal hingga menjadi produk yang siap diluncurkan ke pasar!",
      "icon": <BusinessIcon sx={{ color: "sc_blue.main" }} />,
    },
    {
      "label": "UI/UX Design",
      "link": "https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/b908fca1-54ea-11ed-9629-c6d15e70b51f",
      "description": "Pelajari cara membuat aplikasi yang interaktif dan ramah pengguna mulai dari dasar hingga intermediate.",
      "icon": <DevicesIcon sx={{ color: "sc_blue.main" }} />,
    },
    {
      "label": "Data Science",
      "link": "https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/67c155d5-54ea-11ed-9629-c6d15e70b51f",
      "description": "Persiapkan dirimu menjadi talenta siap kerja di bidang Data Science dari dasar hingga siap memecahkan tantangan bisnis.",
      "icon": <BarChartIcon sx={{ color: "sc_blue.main" }} />,
    },
    {
      "label": "Artificial Intelligence",
      "link": "https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/31a0f4e0-c962-4148-aec1-2fe942dea789/311b6585-54eb-11ed-9629-c6d15e70b51f",
      "description": "Menjadi mahir di bidang Artificial Intelligence (AI) melalui berbagai pendekatan dan model Artificial Intelligence dengan spesifikasi Computer Vision.",
      "icon": <PsychologyIcon sx={{ color: "sc_blue.main"}} />,
    },
  ]

  return (
    <Dialog
      onClose={handleClose}
      open={siPopup}
      // open={true}
      fullWidth={true}
      maxWidth={'sm'}
      TransitionComponent={Transition}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        <Typography variant={"h5"} fontWeight={800} textAlign="center" sx={{ color: "sc_blue.main" }}>Pilih trek yang kamu nginkan!</Typography>
      </DialogTitle>
      <DialogContent >
        <List>
          {tracks.map((v, i) => (
            <ListItem alignContent="center" key={i}>
              <ListItemButton divider component="a" href={v.link}>
                <ListItemIcon>
                  <Box component="div" sx={{backgroundColor: "#B4CEFB", padding:1.25, borderRadius:"50%"}}>
                    {v.icon}
                  </Box>
                </ListItemIcon>
                <ListItemText  secondary={v.description} sx={{marginLeft: 2}}>
                  <Typography fontWeight={500}>{v.label}</Typography>
                </ListItemText >
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions sx={{ display: { md: "none" } }}>
        <MyButton width="100%" onClick={handleClose}>
          <Typography fontWeight={600}>
            Tutup
          </Typography>
        </MyButton>
      </DialogActions>
    </Dialog>
  );
}

export default PopupStudiIndependen
