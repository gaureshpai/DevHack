import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ContactUs from './components/ContactUs';
import './globals.css';
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import NavBar from './components/Navbar';
import { Box, CssBaseline } from '@mui/material';
import Footer from './components/FooterSection';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Devhack 2024',
  description:
    'Devhack 2024 is a 24-hour hackathon at AJIET, where tech enthusiasts collaborate to solve real-world challenges and innovate together.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <Box
            sx={{
              width: '100%',
              backgroundImage: 'linear-gradient(90deg,#000000,#0a085c)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <NavBar />
            {children}
            <ContactUs />
            <Footer />
          </Box>
          {/* <Analytics /> */}
          {/* <SpeedInsights /> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
