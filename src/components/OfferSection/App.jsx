import React from "react";
import SectionHeader from "../SectionHeader/App";
import Star from "../../assets/star-outline-icon.png";
import Statistic from "../../assets/statistic-img.png";
import Button from "../Button/Button";

function OfferSection() {
  return (
    <div className="pt-40">
      <div className="container">
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <img src={Statistic} alt="image" />
          </div>
          <div className="space-y-8">
            <div className="pb-8 border-b border-b-gray-800 ">
              <SectionHeader
                icon={Star}
                display="flex"
                hint="GET THE BEST"
                space="space-x-10"
                title="We Offer Reliable Solution To Increase Brand Visibility"
              />
            </div>
            <p className="text-[18px] text-justify text-blue-900">
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
              <Button
                text="register"
                bg="bg-blue"
                textColor="text-white"
                hover="hover:bg-transparent hover:text-blue hover:border border-blue hover:font-semobold"
                rounded="rounded-md"
                padding="px-10 py-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
