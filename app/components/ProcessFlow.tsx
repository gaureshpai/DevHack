"use client";

import "./styles/ProcessFlow.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ProcessFlow2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const steps = [
    {
      step: 1,
      text: "A team should be formed as per Eligibility and criteria",
      img: "step_1.png",
    },
    {
      step: 2,
      text: "A theme and its corresponding problem statement is to be selected from DevHack page. Just scroll up :)",
      img: "step_2.png",
    },
    {
      step: 3,
      text: "A presentation on the problem Statement and its proposed solution should be created, based on the IDEA Template PPT (look at the Navigation Bar).",
      img: "step_3.png",
    },
    {
      step: 4,
      text: "A PDF has to be created of this PPT.",
      img: "step_4.png",
    },
    {
      step: 5,
      text: "(Optional) A consent letter in the given format has to be obtained from the Head of the Institute and submitted to in PDF format.",
      img: "step_5.png",
    },
    {
      step: 6,
      text: "Registration form should be filled (via Devfolio) from the Application Link on the DevHack page. Scroll up to the top.",
      img: "step_6.png",
    },
    {
      step: 7,
      text: "Idea Selection Round results and Intimation will be sent to the Team Lead for the selected teams for the Grand Finale Registration.",
      img: "step_7.png",
    },
    {
      step: 8,
      text: "Grand-Finale Round to be held at AJIET, where evaluations will be done in phases.",
      img: "step_8.png",
    },
    {
      step: 9,
      text: "Final Compilation of results, Announcement of winners and Prize Distribution Ceremony",
      img: "step_9.png",
    },
  ];

  return (
    <Container
      id="processflow"
      sx={{ mt: { xs: 20 }, maxWidth: { xs: "1300px" } }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { sm: "48px", xs: "38px" },
          fontFamily: "blanka",
          color: "white",
        }}
      >
        PROCESS &nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: { sm: "48px", xs: "38px" },
            fontFamily: "blanka",
            color: "#AAE6FF",
          }}
        >
          FLOW
        </Typography>
      </Typography>
      <div className="timeline">
        <div className="outer">
          {steps.map(({ step, text, img }, index) => (
            <div className="cardm" key={step}>
              {isMobile ? (
                <div className="info">
                  <h3 className="title">
                    <img
                      src={`/images/process-flow/${img}`}
                      alt={`Step ${step}`}
                      id={`img${step}`}
                    />
                  </h3>
                  <p>{text}</p>
                </div>
              ) : (
                <motion.div
                  className="info"
                  initial={{ x: index % 2 === 0 ? 350 : -350, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 70, damping:12 }}
                >
                  <h3 className="title">
                    <img
                      src={`/images/process-flow/${img}`}
                      alt={`Step ${step}`}
                      id={`img${step}`}
                    />
                  </h3>
                  <p>{text}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ProcessFlow2;
