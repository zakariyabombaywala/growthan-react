import React from "react";
import Hero from "../../components/Hero/Hero";
import ServiceSection from "../../components/ServiceSection/App";
import BrandSection from "../../components/BrandSection/App";
import WhySection from "../../components/WhySection/App";
import HowSection from "../../components/HowSection/App";
import TestmSection from "../../components/TestmSection/App";
import OfferSection from "../../components/OfferSection/App";
import MobileMenu from "../../components/MobileMenu/App";
import ServiceHome from "../../components/ServiceHome/App";

function Home() {
  return (
    <div>
      <Hero />
      <ServiceHome />
      {/* <ServiceSection /> */}
      <BrandSection />
      <WhySection />
      <HowSection />
      <TestmSection />
      <OfferSection />
    </div>
  );
}

export default Home;
