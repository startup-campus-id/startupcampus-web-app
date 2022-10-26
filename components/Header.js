import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Stack,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import { ExpandMoreRounded, ShoppingCartOutlined } from "@mui/icons-material";
import MyButton from "./MyButton";
import Dropdown from "./Dropdown";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/router";

const sideMenu = [
  {
    name: "Program",
    url: "/#program",
  },
  {
    name: "Testimoni",
    url: "/#testimoni",
  },
  {
    name: "Blog",
    url: "/#",
  },
  {
    name: "Tentang Kami",
    url: "/#",
  },
];

const Header = () => {
  const router = useRouter();
  const bgTrigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  const trigger = useScrollTrigger();
  function NavItem({ children, isDropDown = false }) {
    return (
      <Typography
        fontSize={14}
        fontWeight={700}
        color="sc_black.main"
        sx={{
          position: "relative",
          "&::before": {
            transition: ".3s",
            content: "''",
            position: "absolute",
            width: "0%",
            height: "5px",
            borderRadius: "100px",
            bottom: "-50%",
            backgroundColor: "sc_blue.main",
          },
          "&:hover::before": {
            width: isDropDown ? "0%" : "100%",
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
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack px={4} mt={4} spacing={2}>
        <Typography fontWeight={700}>Menu</Typography>
        <Divider />
        {sideMenu.map((text, index) => (
          <Link href={text.url} key={index} underline="none">
            <Typography
              sx={{
                "&:hover": {
                  color: "sc_blue.main",
                },
                color: "sc_gray.dark",
              }}
            >
              {text.name}
            </Typography>
          </Link>
        ))}
        <Stack />
      </Stack>
      <Stack px={4}>
        <Link href={"/daftar/form-publik"} underline="none">
          <MyButton>Daftar sekarang</MyButton>
        </Link>
      </Stack>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Slide in={!trigger}>
          <AppBar
            color={
              router.pathname == "/" ? (bgTrigger ? "" : "transparent") : ""
            }
            sx={{ transition: ".3s" }}
            elevation={router.pathname == "/" ? (bgTrigger ? 3 : 0) : 3}
            position="fixed"
          >
            <Container>
              <Toolbar
                sx={{
                  justifyContent: { sm: "space-between", xs: "space-between" },
                  alignItems: "center",
                  my: { xs: 0, sm: 1 },
                  px: "0 !important",
                }}
              >
                <Box component="div">
                  <Link href="/">
                    <Image
                      src={"/images/SC-Logo-Full.png"}
                      width={101}
                      height={33}
                    />
                  </Link>
                </Box>

                <Stack
                  direction="row"
                  spacing={4}
                  sx={{
                    flexGrow: 1,
                    alignItems: "center",
                    justifyContent:
                      router.pathname != "/daftar" ? "center" : "end",
                    display: { md: "flex", sm: "none", xs: "none" },
                  }}
                  component={"nav"}
                >
                  {/* LIST LINKS */}

                  <Dropdown
                    list={[
                      {
                        name: "The Founder",
                        link: "/track/the-founder",
                      },
                      {
                        name: "UI/UX Design",
                        link: "/track/uiux-design",
                      },
                      { name: "Data Science", link: "/track/data-science" },
                      {
                        name: "Backend Engineer",
                        link: "/track/backend-engineer",
                      },
                      {
                        name: "Artificial Intelligence",
                        link: "/track/artificial-intelligence",
                      },
                    ]}
                  >
                    <NavItem isDropDown={true}>Program</NavItem>
                  </Dropdown>
                  <Link href={"#testimoni"} underline="none">
                    <NavItem>Testimoni</NavItem>
                  </Link>
                  <Link href={"#blog"} underline="none">
                    <NavItem>Blog</NavItem>
                  </Link>
                  <Dropdown
                    list={[
                      {
                        name: "Tentang Startup Campus",
                        link: "/tentang",
                      },
                      {
                        name: "Beasiswa",
                        link: "/beasiswa",
                      },
                      { name: "Join Us", link: "/daftar/form-publik" },
                      {
                        name: "Community",
                        link: "/comunity",
                      },
                      {
                        name: "Partner",
                        link: "/partner",
                      },
                    ]}
                  >
                    <NavItem isDropDown={true}>Tentang Kami</NavItem>
                  </Dropdown>
                </Stack>

                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent="center"
                  sx={{
                    flexGrow: 0,
                    display: { md: "flex", sm: "none", xs: "none" },
                  }}
                >
                  {router.pathname != "/daftar" && (
                    <Link href={"/daftar/form-publik"} underline="none">
                      <MyButton>Daftar sekarang</MyButton>
                    </Link>
                  )}
                </Stack>

                {/* Only Mobile  */}
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ display: { xs: "block", sm: "block", md: "none" } }}
                  onClick={toggleDrawer("left", true)}
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
            xs: "block",
            sm: "block",
            md: "none",
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            top: "16px",
            left: "16px",
            height: "95%",
          },
        }}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
};

export default Header;
