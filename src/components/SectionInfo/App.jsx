import React from "react";
import SectionHeader from "../SectionHeader/App";
import MobileCart from "../../assets/mobile-cart-img.png";
import GetBest from "../../assets/get-the-best-icon.png";
import Star from "../../assets/star-outline-icon.png";
import Statistic from "../../assets/statistic-img.png";
import AboutImage from "../../assets/about-img.png";
import Button from "../Button/Button";

function SectionInfo({ icon, hint, title, img, children, variant, name }) {
  const icons = {
    whySectionIcon: GetBest,
    offerSectionIcon: Star,
    aboutSectionIcon: GetBest,
  };
  const images = {
    whySectionImage: MobileCart,
    offerSectionImage: Statistic,
    aboutSectionImage: AboutImage,
  };
  const hints = {
    whySectionHint: "GET THE BEST",
    offerSectionHint: "GET THE BEST",
    aboutSectionHint: "About Us",
  };
  const titles = {
    whySectionTitle: "Why Growthan?",
    offerSectionTitle:
      "We Offer Reliable Solution To Increase Brand Visibility",
    aboutSectionTitle: "The #1 digital marketing services company",
  };

  return (
    <div className="container pt-20 md:pt-40">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img src={images[img]} alt="Image" />
        </div>
        <div className="space-y-7">
          <div className="border-b pb-[36px] border-gray-800">
            <SectionHeader
              icon={icons[icon]}
              variant="horizontal"
              hint={hints[hint]}
              title={titles[title]}
            />
          </div>
          <div>{children}</div>

          <div className="flex justify-center md:justify-start">
            <Button name={name} variant={variant} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInfo;
