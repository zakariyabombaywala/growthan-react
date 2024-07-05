import React from "react";
import SectionHeader from "../SectionHeader/App";
import LadderIcon from "../../assets/ladder-icon.png";
import Marketing from "../../assets/market-Icon.png";
import Analyse from "../../assets/analyse-icon.png";
import Target from "../../assets/target-icon.png";
import Update from "../../assets/update-icon.png";
import WorkInfo from "../WorkInfo/App";

function HowSection() {
  const data = [
    {
      img: Marketing,
      steps: 1,
      title: "Market Research",
      desc: "We conduct thorough research to identify key opportunities and trends.",
    },
    {
      img: Analyse,
      steps: 2,
      title: "Analysis",
      desc: "We analyze your performance metrics, consumer behavior and trends.",
    },
    {
      img: Target,
      steps: 3,
      title: "Targeting",
      desc: "We develop customized strategies that reach your target audience.",
    },
    {
      img: Update,
      steps: 4,
      title: "Update Result",
      desc: "We provide regular updates and reports to keep you informed.",
    },
  ];
  return (
    <div className="container pt-40 ">
      <div className="bg-gradient-to-br from-blue-200 via-red-400 to-yellow-300 p-20 space-y-16">
        <div className=" flex justify-center text-center">
          <SectionHeader
            icon={LadderIcon}
            hint="Process"
            title="How we work"
            space="space-y-8"
            display="flex flex-col"
            flex="flex justify-center"
          />
        </div>
        <div className="space-y-24">
          {data.map((item, index) => {
            return (
              <WorkInfo
                src={item.img}
                steps={item.steps}
                title={item.title}
                desc={item.desc}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowSection;
