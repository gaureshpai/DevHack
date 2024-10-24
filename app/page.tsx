
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ThemeSection from "./components/ThemeSection";
import ProcessFlow from "./components/ProcessFlow";
import PrizeSection from "./components/PrizeSection";
import Sponsors from "./components/SponsorsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ThemeSection />
      <ProcessFlow/>
      <PrizeSection />
      <Sponsors />
    </main>
  );
}
