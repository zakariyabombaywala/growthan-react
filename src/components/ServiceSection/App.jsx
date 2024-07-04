import React from "react";
import SectionHeader from "../SectionHeader/App";
import Icon from "../../assets/setting-outline-icon.png";
import PerformanceIcon from "../../assets/mobile-icon.png";
import MobileIcon from "../../assets/annouce-icon.png";
import EmailIcon from "../../assets/dashboard-icon.png";
import MediaIcon from "../../assets/boost-icon.png";
import InfluencerIcon from "../../assets/marketing-icon.png";
import ContentIcon from "../../assets/list-icon.png";
import Button from "../Button/Button";
import ServiceCard from "../ServiceCard/App";

function ServiceSection() {
  const cardItems = [
    {
      icon: PerformanceIcon,
      title: "Performance Marketing",
      desc: "Get the best results for your marketing campaigns by leveraging data-driven insights and analytics.",
    },
    {
      icon: MobileIcon,
      title: "Mobile Marketing",
      desc: "Reach your target audience wherever they are with mobile-optimized campaigns that drive engagement and conversions.",
    },
    {
      icon: EmailIcon,
      title: "Email Marketing",
      desc: "Build stronger relationships with your customers by delivering personalized content straight to their inbox.",
    },
    {
      icon: MediaIcon,
      title: "Media Buying & Planning",
      desc: "Maximize your ROI by identifying the right media channels and placements to reach your target audience.",
    },
    {
      icon: InfluencerIcon,
      title: "Influencer Marketing",
      desc: "Amplify your brand's reach and credibility by partnering with influencers who align with your brand values.",
    },
    {
      icon: ContentIcon,
      title: "Content Marketing",
      desc: "Engage your audience with high-quality and relevant content that educates, entertains, and inspires action.",
    },
  ];
  return (
    <div className="container pt-40 pb-20">
      <div className="flex justify-between items-center mb-[90px]">
        <SectionHeader
          icon={Icon}
          display="flex"
          space="space-x-10"
          hint="services"
          title="Services We Provide"
        />
        <Button
          text="Our Services"
          bg="bg-blue"
          textColor="text-white"
          rounded="rounded-md"
          hover="hover:bg-transparent hover:text-blue hover:border border-blue hover:font-semobold"
        />
      </div>
      <div className="grid grid-cols-3 gap-[72px]">
        {cardItems.map((item) => {
          return (
            <ServiceCard icon={item.icon} title={item.title} desc={item.desc} />
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSection;
