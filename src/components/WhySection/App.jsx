import React from "react";

import SectionInfo from "../SectionInfo/App";

function WhySection() {
  return (
    <>
      <SectionInfo
        img="whySectionImage"
        icon="whySectionIcon"
        hint="whySectionHint"
        title="whySectionTitle"
        children={
          <>
            <p className="text-[16px] md:text-[18px] text-blue-900 text-justify">
              We at Growthan provide a robust platform for wide range of
              Performance Marketing Services. We expertise in various models of
              marketing to suit our clients requirement and generate best ROI.
              we cater to clients from different business verticals including,
              Real Money Gaming, e – Commerce, Banking, Entertainment,
              Insurance, Travel, Finance, Sports, Automobile, etc. Our highly
              dedicated team of expert affiliate marketing managers provide
              services for our advertisers and publishers to mutually grow their
              business, revenue and drive successful results.
            </p>
          </>
        }
        name="register"
        variant="primary"
      />
    </>
  );
}

export default WhySection;
