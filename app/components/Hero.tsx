"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import "@/public/fonts/font.css";
import Timer from "./Timer";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Container id="hero" sx={{ maxWidth: { xs: "1300px" } }}>
      <Stack alignContent="center" sx={{ pb: { xs: 2 }, pt: { xs: 5 } }}>
        <Grid
          className="sm:max-lg:flex sm:max-lg:justify-center sm:max-lg:text-center"
          container
          spacing={1}
          sx={(theme) => ({
            width: "100%",
            [theme.breakpoints.down("xs")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            pt: { sm: 10 },
          })}
        >
          <Grid
            item
            sm="auto"
            sx={{ width: { xs: "80%", sm: "40%" }, mt: { xs: 10, sm: 8 } }}
          >
            <Stack spacing={2}>
            <Image
                  className="flex"
                  src="/images/enigma.png"
                  alt="logo of DevHack"
                  width={400}
                  height={400}
                  style={{
                    width: "110px",
                    height: "auto",
                    cursor: "pointer",
                    marginBottom: "15px",
                  }}
                  />
              <Image
                width={400}
                height={400}
                src="/images/Dev.png"
                alt="logo of DevHack"
                style={{ width: "400px", height: "auto", cursor: "pointer", }}
              />
              <Typography
                color="white"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "Varela",
                  fontSize: "22px",
                }}
              >
                A 24-Hour Hackathon
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "popBold",
                  fontSize: "25px",
                  color: "#5DB8DE",
                }}
              >
                Initiated by Dept. CSE Enigma
                <br />in association with DevNation
              </Typography>
              <Typography
                color="white"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "Varela",
                  fontSize: "22px",
                }}
              >
               A J Institute of Engineering and Technology
              </Typography>
              <Typography
                color="white"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "Varela",
                  fontSize: "20px",
                }}
              >
                MANGALORE | KARNATAKA
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "clamp(1rem, 2vw, 2rem)",
                  fontFamily: "blanka",
                  color: "#1DD8FE",
                }}
              >
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "29th November 2024",
                    1000,
                    "Code | Create | Conquer",
                    1000,
                    "Battle of Development",
                    1000,
                    "Mark the Date",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>
              <div className="grid grid-cols-2 md:grid-cols-3 text-center">
                <Image
                  width={400}
                  height={400}
                  src="/images/ajiet.png"
                  alt="logo of DevHack"
                  className="w-[100px] h-auto cursor-pointer mb-4"
                />
                <Image
                  width={400}
                  height={400}
                  src="/images/enigma.png"
                  alt="logo of DevHack"
                  className="w-[110px] h-auto cursor-pointer mb-4"
                />
                <Image
                  width={400}
                  height={400}
                  src="/images/enigma.png"
                  alt="logo of DevHack"
                  className="w-[110px] h-auto cursor-pointer mb-4"
                />
              </div>
            </Stack>
          </Grid>
          <Grid
            className="visible max-sm:invisible"
            item
            sx={{
              pl: { xs: 50 },
              display: { xs: "none", sm: "block" },
              ml: { xs: 25 },
              mt: { sm: 5 },
              alignItems: { sm: "end" },
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <Image
                width={500}
                height={500}
                src="/images/hand.png"
                alt="hand"
                style={{
                  width: "500px",
                  height: "auto",
                  marginLeft: "10px",
                }}
              />
              <Box sx={{ ml: 6 }}>
                <Timer />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
