import React from "react";

function TeamCard({ children, img, name, title }) {
  return (
    <div className="px-[25px] pt-[25px] pb-[50px] border border-gray-200 rounded-[30px]">
      <div className="rounded-t-[30px]">
        <img className="rounded-t-[30px]" src={img} alt="profile-image" />
      </div>
      <div className="flex flex-col justify-center items-center mt-[30px] space-y-6">
        <div className="w-20 h-[2px] bg-blue rounded-lg"></div>
        <div className=" text-center">
          <h3 className="text-[20px] font-bold text-blue md:text-[25px]">
            {name}
          </h3>
          <p className="text-base text-blue-900 md:text-[18px]">{title}</p>
        </div>
        <div className="flex space-x-[10px]">{children}</div>
      </div>
    </div>
  );
}

export default TeamCard;
