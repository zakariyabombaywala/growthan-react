import React from "react";
import SectionHeader from "../SectionHeader/App";
import Star from "../../assets/star-outline-icon.png";
import Statistic from "../../assets/statistic-img.png";
import Button from "../Button/Button";

function OfferSection() {
  return (
    <div className="pt-20 md:pt-40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="">
            <img src={Statistic} alt="image" />
          </div>
          <div className="space-y-8">
            <div className="pb-8 border-b border-b-gray-800 ">
              <SectionHeader
                icon={Star}
                variant="horizontal"
                hint="GET THE BEST"
                title="We Offer Reliable Solution To Increase Brand Visibility"
              />
            </div>
            <p className="text-[16px] md:text-[18px] text-justify text-blue-900">
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
            <div className="flex">
              <Button name="register" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
