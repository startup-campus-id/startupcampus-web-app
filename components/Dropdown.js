import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { Box, Stack, Typography, Link } from "@mui/material";
// import Link from "next/link";
// import Founder from './'

const NavItem = ({ children, notHover }) => (
  <Typography
    variant="body2"
    fontWeight={500}
    onMouseEnter={(e) =>
      notHover ? null : (e.currentTarget.style.color = "#0056D2")
    }
    onMouseLeave={(e) =>
      notHover ? null : (e.currentTarget.style.color = "unset")
    }
    sx={{ cursor: notHover ? null : "pointer" }}
  >
    {children}
  </Typography>
);

const Dropdown = ({ children, list }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Button
        disableRipple
        sx={{
          textTransform: "capitalize",
          position: "relative",
          "&::before": {
            zIndex: 2,
            transition: ".3s",
            content: "''",
            position: "absolute",
            width: open ? "100%" : "0%",
            height: "5px",
            borderRadius: "100px",
            bottom: "-20%",
            backgroundColor: "sc_blue.main",
          },

          "&:hover": {
            backgroundColor: "unset",
          },
        }}
        endIcon={
          open ? (
            <ExpandLessRounded color="sc_black" />
          ) : (
            <ExpandMoreRounded color="sc_black" />
          )
        }
      >
        {children}
      </Button>
      <Stack
        spacing={2}
        sx={{
          position: "relative",
          width: "268px",
          mt: 1,
          p: 3,
          display: open ? "block" : "none",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
          "&::before": {
            position: "absolute",
            content: "''",
            background: "transparent",
            width: "100%",
            height: "20px",
            transform: "translateY(-100%)",
            top: 0,
            left: 0,
          },
        }}
      >
        {/* <Typography variant="body1" color="#BDBDBD" fontWeight={700}>
          Program Intensif
        </Typography> */}
        {list?.map((item, idx) => (
          <Stack spacing={2} key={idx}>
            <Link
              href={
                item.link.match("/track/backend-engineer") ? null : item.link
              }
              key={idx}
              underline="none"
              style={{
                color: item.link.match("/track/backend-engineer")
                  ? "#69686B"
                  : "unset",
              }}
            >
              <NavItem notHover={!!item.link.match("/track/backend-engineer")}>
                {item.name}
              </NavItem>
            </Link>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Dropdown;
