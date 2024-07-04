import React from "react";
import Hero from "../../components/Hero/Hero";
import ServiceSection from "../../components/ServiceSection/App";
import BrandSection from "../../components/BrandSection/App";

function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <BrandSection />
    </div>
  );
}

export default Home;
