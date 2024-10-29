import dynamic from 'next/dynamic';
import Hero from "./components/Hero";
import React from 'react';

const AboutSection = dynamic(() => import('./components/AboutSection'), { suspense: true });
const ThemeSection = dynamic(() => import('./components/ThemeSection'), { suspense: true });
const ProcessFlow = dynamic(() => import('./components/ProcessFlow'), { suspense: true });
const PrizeSection = dynamic(() => import('./components/PrizeSection'), { suspense: true });
const Sponsors = dynamic(() => import('./components/SponsorsSection'), { suspense: true });

export default function Home() {
  return (
    <main>
      <Hero />
      <React.Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
        <ThemeSection />
        <ProcessFlow />
        <PrizeSection />
        <Sponsors />
      </React.Suspense>
    </main>
  );
}
