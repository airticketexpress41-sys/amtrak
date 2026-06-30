import HeroSection from "@/components/sections/HeroSection";
import FareFinder from "@/components/sections/FareFinder";
import DealsCarousel from "@/components/sections/DealsCarousel";
import ExperienceTabs from "@/components/sections/ExperienceTabs";
import WhereToNext from "@/components/sections/WhereToNext";
import TrackATrain from "@/components/sections/TrackATrain";
import JoinRewardsBanner from "@/components/sections/JoinRewardsBanner";
import CreditCardBanner from "@/components/sections/CreditCardBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FareFinder />
      <DealsCarousel />
      <ExperienceTabs />
      <WhereToNext />
      <TrackATrain />
      <JoinRewardsBanner />
      <CreditCardBanner />
    </>
  );
}
