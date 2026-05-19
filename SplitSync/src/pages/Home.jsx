import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Home/hero";
import Features from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItWorks";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
    </MainLayout>
  );
}