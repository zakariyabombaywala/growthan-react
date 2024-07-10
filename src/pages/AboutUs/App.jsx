import React from "react";
import Banner from "../../components/Banner/App";
import SubscribeBanner from "../../components/SubscribeBanner/App";
import AboutSection from "../../components/AboutSection/App";
import ValueSection from "../../components/ValueSection/App";
import TeamSection from "../../components/TeamSection/App";

function About() {
  return (
    <>
      <Banner
        img="bg-banner_about"
        children={
          <>
            About <span className="text-red"> Us</span>
          </>
        }
      />
      <SubscribeBanner variant="about" />
      <AboutSection />
      <ValueSection />
      <TeamSection />
    </>
  );
}

export default About;
