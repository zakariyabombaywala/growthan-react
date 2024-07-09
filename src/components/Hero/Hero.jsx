import React from "react";
import heroImage from "../../assets/hero-img.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="bg-heroBg bg-cover bg-center bg-no-repeat min-h-[800px] h-screen">
      <div className="container">
        <div className="grid grid-cols-1 items-center place-items-center h-screen pt-24 md:gap-10 md:grid-cols-2 ">
          <div className="space-y-10 order-2 md:order-1">
            <h1 className="text-[50px] md:text-[60px] font-extrabold text-blue leading-none text-center md:text-start">
              Driving the Digital Growth by
              <span className="text-red"> Affiliate Marketing</span>
            </h1>
            <div className="flex justify-center md:justify-start mb-8 md:mb-0">
              <Button name="register" variant="primary" />
            </div>
          </div>
          <div className="order-1 ">
            <img src={heroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
