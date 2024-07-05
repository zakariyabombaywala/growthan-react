import React from "react";
import Hero from "../../components/Hero/Hero";
import ServiceSection from "../../components/ServiceSection/App";
import BrandSection from "../../components/BrandSection/App";
import WhySection from "../../components/WhySection/App";

function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <BrandSection />
      <WhySection />
    </div>
  );
}

export default Home;
