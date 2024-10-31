import Hero from "./components/Hero";
import React from 'react';
import AboutSection from './components/AboutSection';
import ThemeSection from './components/ThemeSection';
import ProcessFlow2 from './components/ProcessFlow';
import PrizeSection from './components/PrizeSection';
import Sponsors from './components/SponsorsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <React.Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
        <ThemeSection />
        <ProcessFlow2 />
        <PrizeSection />
        <Sponsors />
      </React.Suspense>
    </main>
  );
}
