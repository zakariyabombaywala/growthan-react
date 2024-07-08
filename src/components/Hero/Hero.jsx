import React from "react";
import heroImage from "../../assets/hero-img.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="bg-heroBg bg-cover bg-center bg-no-repeat min-h-[800px] h-screen">
      <div className="container">
        <div className="grid grid-cols-1 items-center place-items-center h-screen pt-24 gap-10 md:grid-cols-2 ">
          <div className="space-y-10">
            <h1 className="text-[60px] font-extrabold text-blue leading-none text-center md:text-start">
              Driving the Digital Growth by
              <span className="text-red"> Affiliate Marketing</span>
            </h1>
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
          <div>
            <img src={heroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
