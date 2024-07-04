import React from "react";

function ServiceCard(props) {
  return (
    <div className="p-10 rounded-2xl space-y-6 bg-gradient-to-br from-blue-200 via-red-400 to-red-400">
      <img src={props.icon} alt="icon" />
      <h2 className="text-blue font-bold text-[25px] capitalize">
        {props.title}
      </h2>
      <p className="text-blue-900 text-[18px]">{props.desc}</p>
    </div>
  );
}

export default ServiceCard;
