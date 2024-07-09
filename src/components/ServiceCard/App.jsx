import React from "react";

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="p-10 rounded-2xl space-y-6 bg-gradient-to-br from-blue-200 via-red-400 to-red-400">
      <img src={icon} className="max-h-[100px] md:max-h-[153px]" alt="icon" />
      <h2 className="text-blue font-bold text-[20px] md:text-[25px] capitalize">
        {title}
      </h2>
      <p className="text-blue-900 text-[16px] md:text-[18px]">{desc}</p>
    </div>
  );
}

export default ServiceCard;
