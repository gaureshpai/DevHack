import React from 'react';
import { Box, Typography, IconButton, Container, Grid } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = () => {
  const socialLinks = [
    // { icon: <Facebook />, url: '', name: 'Facebook' },
    { icon: <Instagram />, url: 'https://www.instagram.com/enigma._aj/', name: 'Instagram' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/enigma-cse-association-a1615b335/', name: 'LinkedIn' },
    { icon: <GitHub />, url: 'https://github.com/Ajiet-DevNation/', name: 'Github' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        color: '#ffffff',
        pt: { xs: 6, md: 10 },
        pb: { xs: 3, md: 5 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Blanka", sans-serif',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: 0,
                  width: '50%',
                  height: 4,
                  bgcolor: '#3B82F6',
                }
              }}
            >
              <Image
                src="/images/Dev.png"
                alt="DEVHACK Logo"
                width={200}
                height={60}
              />
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: '400px' }}>
              Empowering innovation through technology. Join us in shaping the future of coding and creativity.
            </Typography>
            <Box>
              {socialLinks.map((link, index) => (
                <IconButton
                  key={index}
                  aria-label={link.name}
                  component={Link}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    mr: 2,
                    transition: 'all 0.3s',
                    '&:hover': {
                      color: '#3B82F6',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', md: 'flex-end' },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href='mailto:info@devhack.com' className='cursor-pointer' target='_blank'>
                  Email: enigma@ajiet.edu.in
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                <Link href='tel:0000000000' className='cursor-pointer' target='_blank'>
                  Phone: +91 90 1900 3490
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                <Link href='https://ajiet.edu.in' className='cursor-pointer' target='_blank'>
                  ajiet.edu.in
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} DEVHACK. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontStyle: 'italic',
              textAlign: 'center',
              mt: 2,
              letterSpacing: 1,
              fontWeight: 500,
            }}
          >
            Made by team DevNation
             {/* <span style={{ color: '#e25555' }}>❤</span> */}
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default FooterSection;