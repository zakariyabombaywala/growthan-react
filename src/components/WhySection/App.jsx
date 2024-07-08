import React from "react";
import SecImg from "../../assets/mobile-cart-img.png";
import SectionHeader from "../SectionHeader/App";
import HeadIcon from "../../assets/get-the-best-icon.png";
import Button from "../Button/Button";

function WhySection() {
  return (
    <div className="container pt-20 md:pt-40">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img src={SecImg} alt="Image" />
        </div>
        <div className="space-y-7">
          <div className="border-b pb-[36px] border-gray-800">
            <SectionHeader
              icon={HeadIcon}
              display="flex"
              space="space-x-10"
              hint="GET THE BEST"
              title="Why Growthan?"
            />
          </div>
          <p className="text-[18px] text-blue-900 text-justify">
            We at Growthan provide a robust platform for wide range of
            Performance Marketing Services. We expertise in various models of
            marketing to suit our clients requirement and generate best ROI. we
            cater to clients from different business verticals including, Real
            Money Gaming, e – Commerce, Banking, Entertainment, Insurance,
            Travel, Finance, Sports, Automobile, etc. Our highly dedicated team
            of expert affiliate marketing managers provide services for our
            advertisers and publishers to mutually grow their business, revenue
            and drive successful results.
          </p>
          <div className="flex">
            <Button name="register" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySection;
