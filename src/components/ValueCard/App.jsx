import React from "react";

function ValueCard({ icon, title, desc }) {
  return (
    <div className="p-10 rounded-2xl bg-gradient-to-br from-blue-200 via-red-400 to-red-400">
      <div className="flex flex-col items-center justify-center space-y-6">
        <img
          className=" max-h-[100px] md:max-h-[153px]"
          src={icon}
          alt="card-icon"
        />
        <h2 className="text-[25px] text-blue font-semibold">{title}</h2>
        <p className="text-center text-[18px] text-blue-900 md:line-clamp-4">
          {desc}
        </p>
      </div>
      <div className="w-20 h-[2px] rounded-lg mt-12 mx-auto bg-blue"></div>
    </div>
  );
}

export default ValueCard;
