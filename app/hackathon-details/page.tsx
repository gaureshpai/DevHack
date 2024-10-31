"use client";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Image from "next/image";

function Home() {
  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
          paddingTop: "150px",
          display: { xs: "flex" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: "clamp(3rem, 10vw, 4rem)",
            fontFamily: "blanka",
            color: "primary.light",
          }}
        >
          VENUE
        </Typography>
      </Box>
      <Box className="flex justify-center items-center mt-10 p-2">
        <Image
          className="rounded-lg min-h-[30vh] m:h-auto shadow-lg shadow-black"
          src="/images/College.jpg"
          alt="college"
          width={1000}
          height={500}
        />
      </Box>
      <Stack
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Box
          sx={{ alignSelf: "center", textAlign: "center", paddingTop: "50px" }}
        >
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "38px", xs: "28px" },
              fontFamily: "blanka",
              color: "primary.light",
            }}
          >
            AJ Institue of Engineering and technology, Mangalore
          </Typography>
        </Box>
        <Box
          sx={{
            alignSelf: "center",
            textAlign: "center",
            paddingTop: "50px",
            width: { xs: "80%" },
          }}
        >
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "24px", xs: "16px" },
              fontFamily: "blanka",
              color: "white",
              marginTop: "50px",
              width: { sm: 100 },
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            AJ Institute of Engineering & Technology,
            NH-66, Kottara Chowki,
            Mangaluru – 575006, Karnataka, India
          </Typography>
        </Box>
      </Stack>
      <Box className="flex flex-col justify-center items-center mt-10 p-2">
        <a
          rel="noopener"
          href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31111.06943415277!2d74.828766!3d12.915197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a7940000001%3A0x37b1d2f42900de85!2sAJ%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sus!4v1728167304095!5m2!1sen!2sus"
          target="_blank"
        >
          <Image
            width={400}
            height={400}
            className="rounded-lg min-h-[30vh] m:h-auto shadow-lg shadow-black"
            src="/images/Location.png"
            alt="location"
            style={{}}
          />
        </a>
        <Button
          sx={{
            marginTop: 5,
            borderRadius: 100,
            fontFamily: "Varela",
            backgroundColor: "bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6]",
          }}
          variant="contained"
          size="large"
          href="https://maps.app.goo.gl/nySAmZyCSN1Ld7at6"
          target="_blank"
        >
          Visit AJIET
        </Button>
      </Box>

      <Grid
        item
        container
        spacing={1}
        sm="auto"
        sx={{
          width: "100%",

          pt: { xs: 0, sm: 15 },
          pl: { sm: 15 },
        }}
      >
        <Grid
          item
          sx={{
            mt: { xs: 5 },
            pl: { sm: 45, xs: 90 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            src="/images/Calender.png"
            alt="About us image"
            height={100}
            width={500}
            style={{ width: "500px", height: "auto", cursor: "pointer" }}
          />
        </Grid>
        <Grid
          item
          sm="auto"
          sx={{ width: { xs: "80%", sm: "40%" }, ml: { xs: 5, sm: 20 } }}
        >
          <Stack
            spacing={2}
            sx={{
              display: { xs: "flex" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <Box
              sx={{
                alignSelf: "center",
                textAlign: "center",
                paddingTop: "50px",
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
                REGISTRATION
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "white",
                }}
              >
                AND
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "#AAE6FF",
                }}
              >
                UPDATES
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Varela",
                  color: "#1DD8FE",
                }}
              >
                Registration & Idea Submission :
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Varela",
                  color: "white",
                }}
              >
                Begins on 1st November, 2024 and ends on 15th November, 2024.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { sm: "48px", xs: "28px" },
            fontFamily: "blanka",
            color: "#AAE6FF",
            pt: "30px",
          }}
        >
          REWARDS&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "28px" },
              fontFamily: "blanka",
              color: "white",
            }}
          >
            AND&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "48px", xs: "28px" },
                fontFamily: "blanka",
                color: "#AAE6FF",
              }}
            >
              PRIZES&nbsp;
            </Typography>
          </Typography>
        </Typography>
      </Box>
      <Stack
        sx={{
          alignSelf: "center",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            alignSelf: "left",
            width: { sm: "80%", xs: "100%" },
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

        <Image
          width={400}
          height={400}
          src="/images/prizess.png"
          alt="About us image"
          style={{
            width: "1000px",
            height: "auto",
            cursor: "pointer",
            alignSelf: "center",
          }}
        />

        <Typography
          sx={{
            alignSelf: "left",
            textAlign: "center",
            width: { sm: "100%", xs: "90%" },
            mt: { xs: 3 },

            fontFamily: "Varela",
            fontSize: { sm: "22px", xs: "16px" },
            color: "white",
          }}
        >
          <ul>
            <li>
              <p>Certificate of participation for all participating team</p>
            </li>
            <li>
              <p>Certificate of Excellence to the top 3 winning teams</p>
            </li>
          </ul>
        </Typography>
      </Stack>

      <Grid
        container
        item
        spacing={1}
        sm="auto"
        sx={{
          width: "100%",

          pt: { xs: 0, sm: 15 },
          pl: { sm: 15 },
        }}
      >
        <Grid
          item
          sm="auto"
          sx={{ width: { xs: "100%", sm: "40%" }, ml: { xs: 5, sm: 20 } }}
        >
          <Stack spacing={2}>
            <Box
              sx={{
                alignSelf: "center",
                textAlign: "center",
                paddingTop: "50px",
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
                ELIGIBILITY
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { sm: "22px", xs: "16px" },
                  fontFamily: "Varela",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <p className="mt-2 text-md/relaxed ">
                  Students pursuing any of the following programme are eligible
                  to participate in the DevHack:
                </p>
                <ul className="mt-2 ml-4 text-md/relaxed text-white-400 list-disc">
                  <li>BE/ B. Tech/Diploma</li>
                  <li>MCA/BCA</li>
                  <li>ME/ M. Tech.</li>
                  <li>B.Sc./ M.Sc.</li>
                  <li>BBA/ MBA</li>
                </ul>
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{
            mt: { xs: 5 },
            pl: { sm: 45, xs: 90 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            width={400}
            height={400}
            src="/images/Hero.png"
            alt="About us image"
            style={{ width: "500px", height: "auto", cursor: "pointer" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
