import React from "react";
import SectionHeader from "../SectionHeader/App";
import HeadIcon from "../../assets/chat-icon.png";
import BrandIcobFirst from "../../assets/brand-icon-1.png";
import BrandIcobSecond from "../../assets/brand-icon-2.png";
import Jhon from "../../assets/profile-jhon.png";
import Peeter from "../../assets/propfile-peeter.png";
import Button from "../Button/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import TestmCard from "../TestmCard/App";

function TestmSection() {
  // Card data
  const data = [
    {
      icon: BrandIcobFirst,
      brand: "company",
      brandDesc:
        "Working with growthan.com has been a game-changer for our business. Their strategies have led to significant growth and a boost in revenue.",
      profileImg: Jhon,
      profileTitle: "John Carter",
      profileDesc: "Marketing Lead at Google",
    },
    {
      icon: BrandIcobSecond,
      brand: "company",
      brandDesc:
        "I'm extremely impressed with the level of expertise and dedication that the team at Growthan brings to every project. They consistently deliver great results.",
      profileImg: Peeter,
      profileTitle: "Peeter pawl",
      profileDesc: "Designer",
    },
  ];

  // customers data
  const customers = [
    {
      count: "100",
      text: "HAPPY CLIENTS",
      textColor: "text-blue-500",
    },
    {
      count: "500",
      text: "PUBLISHERS",
      textColor: "text-red-700",
    },
    {
      count: "25,000",
      text: "DAILY CONVERSIONS",
      textColor: "text-yellow-700",
    },
    {
      count: "150",
      text: "CAMPAIGNS DELIVERED",
      textColor: "text-green-700",
    },
  ];
  return (
    <div className="pt-40 ">
      <div className="container">
        <div className="flex justify-between items-center mb-[90px]">
          <SectionHeader
            icon={HeadIcon}
            hint="Testimonial"
            title="We work with customers across all industries"
            display="flex"
            space="space-x-10"
            width="w-[600px]"
          />
          <div className="flex items-center space-x-4">
            <Button
              text={<ChevronLeftIcon className="size-9 text-white" />}
              rounded="rounded-full"
              bg="bg-blue"
              padding="p-4"
            />
            <Button
              text={<ChevronRightIcon className="size-9 text-blue" />}
              rounded="rounded-full border border-blue"
              bg="bg-white"
              padding="p-4"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          {data.map((item) => {
            return (
              <TestmCard
                src={item.icon}
                title={item.brand}
                desc={item.brandDesc}
                profile={item.profileImg}
                profileTitle={item.profileTitle}
                profileDesc={item.profileDesc}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-subscribe bg-no-repeat bg-cover bg-center  mt-[120px] p-36">
        <div className="container gap-12 grid grid-cols-2 place-items-center justify-center  ">
          {customers.map((item) => {
            return (
              <div className="flex space-x-4 items-center">
                <h3 className="text-white text-[50px] font-semibold">
                  {item.count}
                  <span className={`${item.textColor}`}>+</span>
                </h3>
                <div className="max-w-[155px]">
                  <p className="text-[20px] text-gray-300 font-medium ">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TestmSection;
