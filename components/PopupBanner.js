import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as React from 'react';

import MyButton from '../components/MyButton';

function PopupBanner({ children, open, handleClose, ...other }) {
  return (
    <Dialog
      sx={{ overflow: 'visible' }}
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: 'transparent',
        },
      }}
      open={open}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          backgroundColor: 'rgba(18,18,18,.20)',
          borderRadius: 0,
        }}
      >
        <CloseIcon color={'black'} fontWeight={900} />
      </IconButton>
      <Box
        component="img"
        maxHeight={600}
        maxWidth={600}
        sx={{
          margin: 0,
          marginBottom: 2,
          padding: 0,
          borderRadius: 5,
          boxShadow:
            '0 19px 38px rgba(0,0,0,0.15), 0 15px 12px rgba(0,0,0,0.22)',
        }}
        alt="Promo startup campus"
        src="/images/promo.jpg"
      />
      <Link href={'#startup-campus-track'} passHref sx={{ margin: 0 }}>
        <MyButton
          color="sc_yellow"
          textColor={'sc_black.dark'}
          width="100%"
          borderRadius={3}
          hover={{
            backgroundColor: '#B67A02',
            color: '#FFFFFF',
          }}
          onClick={handleClose}
        >
          <Typography
            fontWeight={500}
            fontSize={17}
            fontStyle={'normal'}
            marginRight={1}
          >
            Cek Berbagai Kelasnya!
          </Typography>
        </MyButton>
      </Link>
    </Dialog>
  );
}

export default PopupBanner;
