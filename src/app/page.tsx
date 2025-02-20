import Community from "@/components/home/Community";
import Faqs from "@/components/home/Faqs";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Implenia from "@/components/home/Implenia";
import KickBox from "@/components/home/KickBox";
import Stories from "@/components/home/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <Implenia />
      <HowItWorks />
      <KickBox />
      <Community />
      <Stories />
      <Faqs />
    </>
  );
}
