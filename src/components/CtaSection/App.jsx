import React from "react";
import Button from "../Button/Button";

function CtaSection() {
  return (
    <div>
      <div className="container pt-20 lg:pt-[120px] lg:pb-[88px]">
        <div className="bg-cta_bg min-h-[400px] bg-cover bg-no-repeat bg-right rounded-2xl">
          <div className="space-y-14 px-[70px] py-[90px]">
            <h2 className="text-[35px] md:text-[45px] font-extrabold max-w-[588px] leading-[110.5%] text-blue">
              Get in touch and <span className="text-red">start growing</span>
              your startup today
            </h2>
            <div className="flex  items-center flex-col space-y-7 md:flex-row md:space-y-0 md:space-x-7">
              <Button name="get in touch" variant="primary" />
              <Button name="get started" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
