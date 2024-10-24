
"use client";


import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { useRef } from "react";

import { motion, useScroll } from "framer-motion"


const PrizeSection = () => {
  const ref = useRef<HTMLDivElement>(null)
    const{scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.66 1"]
    })

  return (
    <Container className="prizeSection" id="prizes">
      <Box
        className="text-center mt-20"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { sm: "48px", xs: "38px" },
            fontFamily: "blanka",
            color: "#AAE6FF",
            pl: { sm: 10 },
          }}
        >
          REWARDS&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "38px" },
              fontFamily: "blanka",
              color: "white",
            }}
          >
            AND&nbsp;
          </Typography>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "38px" },
              fontFamily: "blanka",
              color: "#AAE6FF",
            }}
          >
            PRIZES
          </Typography>
        </Typography>
      </Box>
      <Box
        className="text-center"
        sx={{ display: { sm: "none" }, width: "100%" }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { sm: "48px", xs: "30px" },
            fontFamily: "blanka",
            color: "white",
            pl: { sm: 17 },
          }}
        >
          REWARDS
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { sm: "48px", xs: "30px" },
            fontFamily: "blanka",
            color: "#AAE6FF",
            pl: { sm: 17 },
          }}
        >
          AND&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "30px" },
              fontFamily: "blanka",
              color: "white",
            }}
          >
            PRIZES
          </Typography>

        </Typography>
      </Box>
      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      >
        <Image
          src="/images/prizess.png"
          className="mx-auto"
          width={1000}
          height={100}
          alt="Prizes"
        />
      </motion.div>
    </Container>
  );
};

export default PrizeSection;
