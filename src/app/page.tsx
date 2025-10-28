/* eslint-disable import/no-default-export */
import { InfoSectionTwo } from "@/lib/InfoSectionTwo";
import DownloadApp from "@/lib/DownloadApp";
import { FeaturesGrid } from "@/lib/FeaturesGrid";
import { Footer } from "@/lib/Footer";
import { Hero } from "@/lib/Hero";
import HowItWorks from "@/lib/HowItWorks";
import { InfoSectionOne } from "@/lib/InfoSectionOne";
import { Navbar } from "@/lib/Navbar";
import { Orbits } from "@/lib/Orbits";

export default function HomePage() {
  return (
    <main>
      <div className="bg-gray-950">
        <Orbits />
        <Navbar />
        <Hero />
      </div>
      <FeaturesGrid id="features" />
      <InfoSectionOne id="learn" />
      <InfoSectionTwo />
      <HowItWorks id="how-it-works" />
      <DownloadApp />
      <Footer />
    </main>
  );
}
