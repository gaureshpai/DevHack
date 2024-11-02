import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import "@/public/fonts/font.css";
import Image from "next/image";

function AboutSection() {
  return (
    <Box id="aboutus">
      <Container>
        <Container
          sx={{
            mt: { sm: 6 },
            alignSelf: "center",
            alignContent: "middle ",
            alignItems: "center",
            textAlign: "center",
            pt: { xs: 1, sm: 2 },
            pb: { xs: 2, sm: 4 },
          }}
        >
          {/*<a href="/files/DEVHACK%272024%20Selected%20Teams.pdf" download>
            <img
              src="/images/Download finalists.png"
              alt="Download finalists"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
           <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-sm font-extrabold text-transparent lg:text-3xl p-10">
              Download results pdf
            </p> 
            
            
            To be displayed after the finalists are finalized
            
            */} 
        </Container>
      </Container>
      <Container>
        <Grid
          container
          spacing={1}
          sm="auto"
          sx={{
            width: "100%",
            pt: { xs: 0, sm: 5 },
            alignSelf: "center",
            alignContent: "middle ",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sx={{
              mt: { xs: 5 },
              pl: { xs: 90 },
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image
              src="/images/coder.png"
              alt="About us image"
              width={400}
              height={400}
              style={{ width: "400px", height: "auto", cursor: "pointer" }}
            />
          </Grid>
          <Grid
            item
            sm="auto"
            sx={{
              width: { xs: "40%", sm: "40%" },
              ml: { sm: 20 },
              display: { xs: "none", sm: "block" },
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "white",
                }}
              >
                WHAT IS
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "#AAE6FF",
                  pl: { sm: 20 },
                }}
              >
                DEVHACK
              </Typography>
              <Typography
                color="white"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "Varela",
                  fontSize: "22px",
                  pt: { xs: 5 },
                }}
              >
                DevHack is a national-level hackathon aimed at providing engineering students with the opportunity to solve real-world problems 
                that we encounter in our daily lives. The initiative fosters a culture of product innovation and promotes a mindset of real-time 
                problem solving, pushing participants to create impactful solutions at a national scale.
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "white",
                  pt: { xs: 10 },
                }}
              >
                IMPORTANT
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "#AAE6FF",
                  pl: { sm: 10 },
                }}
              >
                DATES&nbsp;
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
                  DEADLINE
                </Typography>
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "22px",
                  fontFamily: "Varela",
                  color: "#1DD8FE",
                  pt: { xs: 5 },
                }}
              >
                Registration Starts :&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: "22px",
                    fontFamily: "Varela",
                    color: "white",
                  }}
                >
                  4th November, 2024
                </Typography>
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "22px",
                  fontFamily: "Varela",
                  color: "#1DD8FE",
                }}
              >
                Registration Closed :&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: "22px",
                    fontFamily: "Varela",
                    color: "white",
                  }}
                >
                  18th November, 2024
                </Typography>
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "22px",
                  fontFamily: "Varela",
                  color: "#1DD8FE",
                }}
              >
                DevHack :&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: "22px",
                    fontFamily: "Varela",
                    color: "white",
                  }}
                >
                  29th - 30th November, 2024
                </Typography>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing={2} sx={{ display: { sm: "none" }, width: "100%" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { sm: "48px", xs: "30px" },
                fontFamily: "blanka",
                color: "white",
              }}
            >
              WHAT IS
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "48px", xs: "30px" },
                fontFamily: "blanka",
                color: "#AAE6FF",
              }}
            >
              DEVHACK
            </Typography>
          </Box>
          <Typography
            color="white"
            sx={{
              alignSelf: "center",
              width: "90%",
              fontFamily: "Varela",
              fontSize: { sm: "22px", xs: "16px" },
            }}
          >
            DEVHACK is a statewide initiative to provide engineering students
            to solve some of the common problems we face in our daily life, and
            thus inculcate a culture of product innovation and a mindset of real
            time problem solving.
          </Typography>
          <Box sx={{ textAlign: "center", pt: 5 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { sm: "48px", xs: "30px" },
                fontFamily: "blanka",
                color: "white",
                pl: { sm: 17 },
              }}
            >
              IMPORTANT&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "30px" },
                  fontFamily: "blanka",
                  color: "#AAE6FF",
                }}
              >
                DATES
              </Typography>
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
                DEADLINE
              </Typography>
            </Typography>
          </Box>
          <Stack
            sx={{
              alignSelf: "center",
              width: "90%",
              fontFamily: "Varela",
              fontSize: { sm: "22px", xs: "16px" },
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontFamily: "Varela",
                color: "#1DD8FE",
                pt: { xs: 5 },
              }}
            >
              Registration Starts :&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "22px", xs: "16px" },
                  fontFamily: "Varela",
                  color: "white",
                }}
              >
                4th November, 2024
              </Typography>
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontFamily: "Varela",
                color: "#1DD8FE",
              }}
            >
              Registration Closes :&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "22px", xs: "16px" },
                  fontFamily: "Varela",
                  color: "white",
                  marginBottom: '10px',
                }}
              >
                18th November, 2024
              </Typography>
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontFamily: "Varela",
                color: "#1DD8FE",
              }}
            >
              DevHack :&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "22px", xs: "16px" },
                  fontFamily: "Varela",
                  color: "white",
                }}
              >
                29th November, 2024
              </Typography>
            </Typography>
          </Stack>
        </Stack>
      </Container>
      ß
    </Box>
  );
}

export default AboutSection;
