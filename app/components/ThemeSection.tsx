"use client";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { themes } from "./ThemesList";
import Link from "next/link";
import "./fonts/font.css";

function ThemeSection() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container id="theme" sx={{ mt: { xs: 10 }, maxWidth: { xs: "1300px" } }}>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { sm: "48px", xs: "38px" },
            fontFamily: "blanka",
            color: "#AAE6FF",
          }}
        >
          THEMES
        </Typography>
        <Typography
          sx={{
            alignSelf: "left",
            width: { sm: "100%", md: "100%" },
            mt: { xs: 5 },
            mb: { xs: 5 },
            fontFamily: "Varela",
            fontSize: { sm: "22px", xs: "16px" },
            color: "white",
          }}
        >
          No problem is too big... No idea is too small
        </Typography>
      </Box>
      <div className="slider-container">
        <Slider {...settings}>
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="group relative block  rounded-xl bg-black sm:max-lg:mx-3 lg:mx-7 lg:my-10">
                <img
                  alt={theme.title}
                  src={theme.image}
                  className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8 justify-center">
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="flex flex-wrap justify-center"
                      style={{
                        borderRadius: "999px",
                        backgroundColor: "rgba(0, 112.5, 112.5, 0.3)",
                        backdropFilter: "blur(5px)",
                        height: "50px",
                      }}
                    >
                      <p
                        className="text-xl font-bold text-white text-center sm:text-2xl mt-2"
                        style={{ fontFamily: "blanka" }}
                      >
                        {theme.title}
                      </p>
                    </div>
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex justify-center mt-2">
                      <Link
                        href={theme.link}
                        className="group inline-block rounded-full bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] p-[2px] hover:text-[#0F337F] focus:outline-none focus:ring active:text-opacity-75"
                      >
                        <span
                          className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                          style={{ fontFamily: "Varela" }}
                        >
                          Know more
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            alignSelf: "left",
            width: { sm: "100%", md: "100%" },
            mt: { xs: 3 },
            fontFamily: "Varela",
            fontSize: { sm: "22px", xs: "16px" },
            color: "white",
          }}
        >
          Participants can submit their innovative ideas according to their
          choice of concerned theme irrespective of the already present problem
          statements.
        </Typography>
      </Box>
    </Container>
  );
}

export default ThemeSection;
