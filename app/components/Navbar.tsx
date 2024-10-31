"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import "@/public/fonts/font.css";
import Link from "next/link";
import "@/public/styles/navbar.css";

import FlyoutLink from "./FlyoutContent";
import Image from "next/image";

const logoStyle = {
  width: "100px",
  height: "auto",
  cursor: "pointer",
};

function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(10px)",
              height: "90px",
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "20px",
                px: 1,
              }}
            >
              <Box
                sx={{
                  mr: "40px",
                }}
              >
                <Link href="/">
                  <Image
                    width={400}
                    height={400}
                    onClick={() => scrollToSection("hero")}
                    src="/images/Dev.png"
                    style={logoStyle}
                    alt="logo"
                  />
                </Link>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex", ml:4 } }}>
                <MenuItem sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}>
                  <FlyoutLink href="/" FlyoutContent={MenuContent}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      Discover DEVHACK
                    </Typography>
                  </FlyoutLink>
                </MenuItem>

                <Link href="/problem-statement">
                  <MenuItem
                    sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}
                  >
                    <Typography
                      className="underline-animation font-Varela"
                      variant="body2"
                      color="white"
                      fontSize="18px"
                    >
                      Problem Statements
                    </Typography>
                  </MenuItem>
                </Link>

                <MenuItem sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}>
                  <FlyoutLink href="/executive-team" FlyoutContent={TeamContent}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      Teams
                    </Typography>
                  </FlyoutLink>
                </MenuItem>

                <Link href="/guidelines">
                  <MenuItem
                    sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}
                  >
                    <Typography
                      className="underline-animation"
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      Guidelines
                    </Typography>
                  </MenuItem>
                </Link>

                <Link href="/rules-regulations">
                  <MenuItem
                    sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}
                  >
                    <Typography
                      className="underline-animation"
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      Rules
                    </Typography>
                  </MenuItem>
                </Link>

                <Link href="/idea-template">
                  <MenuItem
                    sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}
                  >
                    <Typography
                      className="underline-animation"
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      Idea Template
                    </Typography>
                  </MenuItem>
                </Link>
                <Link href="/hackathon-details">
                  <MenuItem
                    sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}
                  >
                    <Typography
                      className="underline-animation"
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      Hackathon Details
                    </Typography>
                  </MenuItem>
                </Link>
                <Link href="/faq">
                  <MenuItem
                    sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}
                  >
                    <Typography
                      className="underline-animation"
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      FAQ
                    </Typography>
                  </MenuItem>
                </Link>
                <Link href="https://forms.gle/tf4QwvntU7xdzZBx7" target="_blank">
                  <MenuItem
                    sx={{ py: "5px", px: "10px", my: "6px", mx: "3px" }}
                  >
                    <Typography
                      className="underline-animation"
                      variant="body2"
                      color="white"
                      fontSize="18px"
                      fontFamily="Varela"
                    >
                      Register Now
                    </Typography>
                  </MenuItem>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            ></Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "50px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(4px)",
                  boxShadow:
                    "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
                }}
              >
                <Box
                  onClick={toggleDrawer(false)}
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "#0d0d0d",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/">Home</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/problem-statement">Problem Statements</Link>
                    </Typography>
                  </MenuItem>

                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/executive-team">Executive Team</Link>
                    </Typography>
                  </MenuItem>

                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/student-body">Student Body</Link>
                    </Typography>
                  </MenuItem>

                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/guidelines">Guidelines</Link>
                    </Typography>
                  </MenuItem>

                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                      variant="body2"
                    >
                      <Link href="/rules-regulations">Rules</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/idea-template">Idea Template</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/hackathon-details">Hackathon Details</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/faq">FAQ</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="https://forms.gle/tf4QwvntU7xdzZBx7" rel="noreferrer noopener" target="_blank">Register Now</Link>
                    </Typography>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const TeamContent = () => {
  return (
    <div className="w-64 p-6">
      <div className="mb-1 space-y-3">
        <h3 className="font-semibold">
          <Link href="/executive-team" className="block hover:underline">
            Executive Team
          </Link>
        </h3>
        <h3 className="font-semibold">
          <Link href="/student-body" className="block hover:underline">
            Student Body
          </Link>
        </h3>
      </div>
    </div>
  );
};

const MenuContent = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div className="w-64 p-6">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">
          <a
            onClick={() => scrollToSection("aboutus")}
            className="block hover:underline"
          >
            About DEVHACK 2024
          </a>
        </h3>
        <h3 className="font-semibold">
          <a
            onClick={() => scrollToSection("theme")}
            className="block hover:underline"
          >
            DEVHACK Themes
          </a>
        </h3>
        <h3 className="font-semibold">
          <a
            onClick={() => scrollToSection("processflow")}
            className="block hover:underline"
          >
            DEVHACK Process Flow
          </a>
        </h3>
        <h3 className="font-semibold">
          <a
            onClick={() => scrollToSection("prizes")}
            className="block hover:underline"
          >
            DEVHACK Rewards & Prizes{" "}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default NavBar;