import React from "react";
import Banner from "../../components/Banner/App";
import ServiceSection from "../../components/ServiceSection/App";
import SettingOutline from "../../assets/setting-outline-icon.png";
import ServiceService from "../../components/ServiceService/App";

function Services() {
  return (
    <>
      <Banner img="bg-banner_service" children={<>Services</>} />
      <ServiceService />
    </>
  );
}

export default Services;
