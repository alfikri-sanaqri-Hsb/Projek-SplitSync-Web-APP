import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
    </MainLayout>
  );
}