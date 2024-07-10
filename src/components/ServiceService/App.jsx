import React from "react";
import ServiceSection from "../ServiceSection/App";
import SettingOutline from "../../assets/setting-outline-icon.png";

function ServiceService() {
  return (
    <div className="container pt-20 md:pt-40 pb-0 md:pb-20">
      <ServiceSection
        variant="vertical"
        icon={SettingOutline}
        hint="services"
        title="High-impact services to take your business to the next level"
        width="max-w-[781px]"
      />
    </div>
  );
}

export default ServiceService;
