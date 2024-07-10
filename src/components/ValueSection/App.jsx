import React from "react";
import ValueCard from "../ValueCard/App";
import Check from "../../assets/check-3d-icon.png";
import OutlineCheck from "../../assets/outline-right-icon.png";
import Chart from "../../assets/pie-chart-3d-icon.png";
import Setting from "../../assets/setting-3d-icon.png";
import SectionHeader from "../SectionHeader/App";
import Button from "../Button/Button";

function ValueSection() {
  const cardItems = [
    {
      icon: Setting,
      title: "Efficiency",
      desc: "We believe in delivering results in the most effective and efficient way possible, maximizing our resources to achieve optimal outcomes.",
    },
    {
      icon: Check,
      title: "Accountability",
      desc: "We take responsibility for our actions and hold ourselves to the highest standards of quality and performance, ensuring that our clients receive the best services.",
    },
    {
      icon: Chart,
      title: "Commitment",
      desc: "We are dedicated to delivering value and driving growth for our clients, going above and beyond to exceed their expectations and help them achieve their goals.",
    },
  ];
  return (
    <div className="container pt-20 md:pt-40 pb-0 md:pb-20">
      <div className="space-y-14">
        <SectionHeader
          icon={OutlineCheck}
          hint="our values"
          title="The core values behind our work"
          variant="vertical"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardItems.map((item) => {
            return (
              <ValueCard icon={item.icon} title={item.title} desc={item.desc} />
            );
          })}
        </div>
        <div className="flex justify-center space-x-7">
          <Button name="get in touch" variant="outline" />
          <Button name="our services" variant="icon" arrow />
        </div>
      </div>
    </div>
  );
}

export default ValueSection;
