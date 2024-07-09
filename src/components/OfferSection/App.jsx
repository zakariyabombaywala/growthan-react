import React from "react";
import SectionInfo from "../SectionInfo/App";

function OfferSection() {
  return (
    <>
      <SectionInfo
        img="offerSectionImage"
        icon="offerSectionIcon"
        hint="offerSectionHint"
        title="offerSectionTitle"
        children={
          <>
            <p className="text-[16px] md:text-[18px] text-blue-900 text-justify">
              We help brands to advertise on Web & Mobile medium. We help brands
              to select best medium with optimum module in order to maximize
              their ROI. Our experienced Media Buying & Planning team help
              brands to achieve their desired results through optimum inventory.
              We help brands of different verticals to choose best module with
              best medium to work on in order to acquire quality customers.
              <br /> Our Ad operations and development team help advertisers in
              optimizing the creatives and landing pages for the increase
              in-conversion rate
            </p>
          </>
        }
        variant="primary"
        name="register"
      />
    </>
  );
}

export default OfferSection;
