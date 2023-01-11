import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Collapse,
  Container,
  Divider,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  fabClasses,
  useScrollTrigger,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';

import AlertMui from './AlertMui';
import DaftarButton from './DaftarButton';
import Dropdown from './Dropdown';

const sideMenu = [
  {
    name: 'Program',
  },
  {
    name: 'Blog',
    url: 'https://blog.startupcampus.id',
    openInNewTab: true,
  },
  {
    name: 'Testimoni',
    url: '/#testimoni',
  },
];

const program = [
  {
    name: 'The Founder',
    link: '/track/the-founder',
  },
  {
    name: 'UI/UX Design',
    link: '/track/uiux-design',
  },
  { name: 'Data Science', link: '/track/data-science' },
  {
    name: 'Artificial Intelligence',
    link: '/track/artificial-intelligence',
  },
];

const beasiswaGoogle = [
  {
    name: 'Data Analitik',
    link: '/beasiswa/google/data-analitik',
  },
  {
    name: 'UX Design',
    link: '/beasiswa/google/uiux-design',
  },
];
const Header = () => {
  const [expand, setExpand] = useState(false);
  const router = useRouter();
  const bgTrigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  const trigger = useScrollTrigger();
  const inGCCPage = router.pathname.includes('beasiswa/google');
  function NavItem({ children, isDropDown = false }) {
    return (
      <Typography
        fontSize={14}
        fontWeight={700}
        sx={{
          position: 'relative',
          color: inGCCPage ? 'sc_gray.light' : 'sc_black.main',
          '&::before': {
            transition: '.3s',
            content: "''",
            position: 'absolute',
            width: '0%',
            height: '5px',
            borderRadius: '100px',
            bottom: '-50%',
            backgroundColor: inGCCPage ? "sc_yellow.main" : 'sc_blue.main',
          },
          '&:hover::before': {
            width: isDropDown ? '0%' : '100%',
          },
        }}
      >
        {children}
      </Typography>
    );
  }

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack px={4} mt={4} spacing={2}>
        <Typography fontWeight={700}>Menu</Typography>
        <Divider />
        {sideMenu.map((text, index) =>
          text.name.match('Program') ? (
            <Fragment key={index}>
              <Stack
                direction="row"
                justifyContent={'space-between'}
                onClick={() => setExpand(!expand)}
                sx={{ cursor: 'pointer' }}
              >
                <Typography
                  sx={{
                    '&:hover': {
                      color: inGCCPage ? "sc_yellow.main" : 'sc_blue.main',
                    },
                    color: 'sc_gray.dark',
                  }}
                >
                  {text.name}
                </Typography>
                {expand ? <ExpandMore /> : <ExpandLess />}
              </Stack>
              <Collapse in={expand} timeout="auto" unmountOnExit>
                {program.map((v, i) => (
                  <List
                    component="div"
                    disablePadding
                    key={i}
                    onClick={toggleDrawer(anchor, false)}
                  >
                    <Link
                      href={v.link}
                      underline={'none'}
                      style={{ color: 'unset' }}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={v.name} />
                      </ListItemButton>
                    </Link>
                  </List>
                ))}
              </Collapse>
            </Fragment>
          ) : (
            <Link
              href={text.url}
              target={text.openInNewTab ? '_blank' : undefined}
              rel={text.openInNewTab ? 'noopener noreferrer' : undefined}
              key={index}
              underline="none"
            >
              <Typography
                onClick={toggleDrawer(anchor, false)}
                sx={{
                  '&:hover': {
                    color: inGCCPage ? "sc_yellow.main" : 'sc_blue.main',
                  },
                  color: 'sc_gray.dark',
                }}
              >
                {text.name}
              </Typography>
            </Link>
          ),
        )}
        <Stack />
      </Stack>
      <Stack px={4} onClick={toggleDrawer(anchor, false)}>
        <DaftarButton />
      </Stack>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Slide in={!trigger}>
          <AppBar
            color={
              inGCCPage ? "inherit" :
                router.pathname == '/' ?
                  (bgTrigger ? '' : 'transparent') : ''
            }
            sx={{
              transition: '.3s',
              backgroundColor: inGCCPage ? "sc_yellow.light" : undefined
            }}
            elevation={0}
            position={'static'}
          >
            <AlertMui />
            <Container>
              <Toolbar
                sx={{
                  justifyContent: { sm: 'space-between', xs: 'space-between' },
                  alignItems: 'center',
                  my: { xs: 0, sm: 1 },
                  px: '0 !important',
                }}
              >
                <Box component="div">
                  <Link href="/" aria-label="logo-startup-campus">
                    <Image
                      src={'/images/SC-Logo-Full.png'}
                      width={101}
                      height={33}
                      alt={'SC-Logo-Full'}
                    />
                  </Link>
                </Box>

                <Stack
                  direction="row"
                  spacing={4}
                  sx={{
                    flexGrow: 1,
                    zIndex: 10,
                    alignItems: 'center',
                    justifyContent:
                      router.pathname.includes("daftar") || router.pathname.includes("beasiswa/google") ? 'end' : 'center',
                    display: { md: 'flex', sm: 'none', xs: 'none' },
                  }}
                  component={'nav'}
                >
                  {/* LIST LINKS */}

                  <Dropdown list={program} inGCCPage={inGCCPage}>
                    <NavItem isDropDown={true}>Program</NavItem>
                  </Dropdown>
                  <Link href={'/#testimoni'} underline="none">
                    <NavItem>Testimoni</NavItem>
                  </Link>
                  {/* <Dropdown list={beasiswaGoogle} type="google">
                    <NavItem isDropDown={true}>Beasiswa</NavItem>
                  </Dropdown> */}
                  <Link
                    href={'https://blog.startupcampus.id/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <NavItem>Blog</NavItem>
                  </Link>
                  {/* <Dropdown */}
                  {/*   list={[ */}
                  {/*     { */}
                  {/*       name: "Tentang Startup Campus", */}
                  {/*       link: "/tentang", */}
                  {/*     }, */}
                  {/*     { */}
                  {/*       name: "Beasiswa", */}
                  {/*       link: "/beasiswa", */}
                  {/*     }, */}
                  {/*     { name: "Join Us", link: "/daftar/form-publik" }, */}
                  {/*     { */}
                  {/*       name: "Community", */}
                  {/*       link: "/comunity", */}
                  {/*     }, */}
                  {/*     { */}
                  {/*       name: "Partner", */}
                  {/*       link: "/partner", */}
                  {/*     }, */}
                  {/*   ]} */}
                  {/* > */}
                  {/*   <NavItem isDropDown={true}>Tentang Kami</NavItem> */}
                  {/* </Dropdown> */}
                </Stack>


                {inGCCPage?
                  null :
                  <Stack
                    direction="row"
                    alignItems={'center'}
                    justifyContent="center"
                    sx={{
                      flexGrow: 0,
                      display: { md: 'flex', sm: 'none', xs: 'none' },
                    }}
                  >
                    <DaftarButton />
                  </Stack>
                }

                {/* Only Mobile  */}
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'none',
                    },
                    zIndex: 300,
                  }}
                  onClick={toggleDrawer('left', true)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>
        </Slide>
      </Box>
      <Drawer
        sx={{
          display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            top: '16px',
            left: '16px',
            height: '95%',
          },
        }}
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </>
  );
};

export default Header;
