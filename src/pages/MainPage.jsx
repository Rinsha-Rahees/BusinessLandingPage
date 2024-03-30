import React from "react";
import HeroSection from "../containers/HeroSection";
import HeroSeparator from "../containers/HeroSeparator";
import MidSection from "../containers/MidSection";
import Features from "../containers/Features";
import FAQSection from "../containers/FAQSection";
import OurToolsSection from "../containers/OurToolsSection";
import CustomizableTemplates from "../containers/CustomizableTemplates";
import ServiceList from "../containers/ServiceList";
import QuoteSection from "../containers/QuoteSection";

function MainPage() {
  return (
    <div className="flex flex-col items-center w-full h-full xl:max-w-[95vw] 2xl:max-w-[70vw] px-6">
      <HeroSection />
      <HeroSeparator/>
      <MidSection/>
      <Features/>
      <OurToolsSection/>
      <CustomizableTemplates/>
      <QuoteSection/>
      <ServiceList/>
      <FAQSection/>
    </div>
  );
}

export default MainPage;
