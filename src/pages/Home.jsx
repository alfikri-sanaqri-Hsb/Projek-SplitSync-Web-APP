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

      <div id="why-choose-us-section" className="-mt-32 md:mt-0 bg-white dark:bg-gray-800 relative z-10">
        <Features />
      </div>

      <div id="how-it-works-section">
        <HowItWorks />
      </div>
    </MainLayout>
  );
}