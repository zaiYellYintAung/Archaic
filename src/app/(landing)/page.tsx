import AboutSection from "@/components/landing/about/AboutSection";
import BannerSection from "@/components/landing/banner/BannerSection";
import FeatureSection from "@/components/landing/feature/FeatureSection";
import FinishSection from "@/components/landing/finishing/FinishSection";
import HeroSection from "@/components/landing/hero/HeroSection";
import IntroSection from "@/components/landing/intro/IntroSection";
import ServiceSectionOne from "@/components/landing/service/ServiceSectionOne";
import ServiceSectionTwo from "@/components/landing/service/ServiceSectionTwo";
import TestimonialSection from "@/components/landing/testimonials/TestimonialSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-16 mb-8">
      <div className="container mx-auto space-y-16">
        <HeroSection />
        {/* <IntroSection /> */}
      </div>
      <BannerSection />
      <div className="container mx-auto space-y-16">
        <FeatureSection />
        <ServiceSectionTwo />
        <ServiceSectionOne />

        <AboutSection />

        <TestimonialSection />

        <FinishSection />
      </div>
    </div>
  );
}
