import React from "react";
import SectionInfo from "../SectionInfo/App";

function AboutSection() {
  return (
    <>
      <SectionInfo
        name="Get in touch"
        variant="outline"
        img="aboutSectionImage"
        icon="aboutSectionIcon"
        hint="aboutSectionHint"
        title="aboutSectionTitle"
        children={
          <>
            <p className="text-[16px] md:text-[18px] text-blue-900 text-justify leading-[156.5%]">
              At growthan.com, we are passionate about helping businesses
              succeed through data-driven marketing strategies. With a focus on
              performance, we work closely with our clients to develop
              customized solutions that drive growth, engagement, and ROI.
              <br />
              <br /> Our team of experienced professionals is dedicated to
              delivering results and helping you achieve your goals. Contact us
              today to learn more about how we can help take your business to
              the next level.
            </p>
          </>
        }
      />
    </>
  );
}

export default AboutSection;
