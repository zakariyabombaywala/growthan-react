import React from "react";
import ServiceSection from "../ServiceSection/App";
import SettingOutline from "../../assets/setting-outline-icon.png";

function ServiceHome() {
  return (
    <div className="container pt-20 md:pt-40 pb-0 md:pb-20">
      <ServiceSection
        icon={SettingOutline}
        variant="horizontal"
        hint="services"
        title="Services We Provide"
        children={true}
      />
    </div>
  );
}

export default ServiceHome;
