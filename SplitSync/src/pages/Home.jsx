import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Home/hero";
import Features from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItWorks";

export default function Home() {
  return (
    <MainLayout>
 
      <div id="hero-section">
        <Hero />
      </div>

      <div id="why-choose-us-section">
        <Features />
      </div>

      <div id="how-it-works-section">
        <HowItWorks />
      </div>
    </MainLayout>
  );
}