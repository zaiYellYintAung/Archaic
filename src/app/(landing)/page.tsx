import AboutSection from "@/components/landing/about/AboutSection";
import ContentSection from "@/components/landing/about/ContentSection";
import BannerSection from "@/components/landing/banner/BannerSection";
import CompanySection from "@/components/landing/company/CompanySection";
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
    <div className="space-y-20 mb-12">
      <div className="">
        <HeroSection />
        {/* <IntroSection /> */}
        <BannerSection />
        <ContentSection />
      </div>

      <div className="container mx-auto space-y-20">
        <FeatureSection />
        <ServiceSectionTwo />
        <ServiceSectionOne />

        <AboutSection />

        <TestimonialSection />

        <IntroSection />
        {/* <FinishSection /> */}
      </div>
    </div>
  );
}
