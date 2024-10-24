"use client";
import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const Sponsors = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/sponsor.jpg"
          width={isSmallScreen ? 200 : 400}
          height={20}
          alt="Sponsors here"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/sponsor.jpg"
          width={isSmallScreen ? 200 : 400}
          height={20}
          alt="Sponsors here"
        />
      </Box>
      {/**<Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/1.png"
          width={isSmallScreen ? 400 : 800}
          height={20}
          alt="Gold Sponsors"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: isSmallScreen ? 2 : 20, mb: 20, flexWrap: isSmallScreen ? 'wrap' : 'nowrap' }}>

      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/4.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/5.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>
      <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    gap: isSmallScreen ? 1 : 6,
    mb: 20,
    flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
  }}
>
  {['acm', 'aicte', 'iic', 'moe', 'eds', 'ieee'].map((img, index) => (
    <Box
      key={index}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // White color with transparency
        padding: 1,
        borderRadius: 10,
      }}
    >
      <Image
        src={`/images/${img}.png`}
        width={isSmallScreen ? 100 : 150} // Smaller width
        height={15} // Smaller height
        alt={img}
        style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
      />
    </Box>
  ))}
</Box>



      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/2.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/3.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>*/}
    </Box>
  );
};

export default Sponsors;
