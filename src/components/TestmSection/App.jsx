import React, { useState } from "react";
import SectionHeader from "../SectionHeader/App";
import HeadIcon from "../../assets/chat-icon.png";
import BrandIcobFirst from "../../assets/brand-icon-1.png";
import BrandIcobSecond from "../../assets/brand-icon-2.png";
import Jhon from "../../assets/profile-jhon.png";
import Peeter from "../../assets/propfile-peeter.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import TestmCard from "../TestmCard/App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SubscribeBanner from "../SubscribeBanner/App";

function TestmSection() {
  const [active, setActive] = useState(0);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
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

  return (
    <div className="pt-20 md:pt-40 ">
      <div className="container">
        <div className="flex justify-between items-center mb-[90px]">
          <SectionHeader
            icon={HeadIcon}
            hint="Testimonial"
            title="We work with customers across all industries"
            variant="horizontal"
            width="max-w-[595px]"
          />
          <div className="hidden lg:flex items-center space-x-4">
            <ChevronLeftIcon
              onClick={() => setActive(0)}
              ref={navigationPrevRef}
              className={`${
                active === 0
                  ? "bg-blue text-white"
                  : "bg-white text-blue drop-shadow-md"
              } border  rounded-full size-20 p-4 `}
            />

            <ChevronRightIcon
              id="right"
              onClick={() => setActive(1)}
              ref={navigationNextRef}
              className={`${
                active === 1
                  ? "bg-blue text-white"
                  : "bg-white text-blue drop-shadow-md"
              } border rounded-full size-20  p-4 text-blue`}
            />
          </div>
        </div>

        <div className="">
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{}}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide>
                  <TestmCard
                    src={item.icon}
                    title={item.brand}
                    desc={item.brandDesc}
                    profile={item.profileImg}
                    profileTitle={item.profileTitle}
                    profileDesc={item.profileDesc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <SubscribeBanner variant="home" />
    </div>
  );
}

export default TestmSection;
