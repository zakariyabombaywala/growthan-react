import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function TestmCard(props) {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-100 to-blue-100 py-8 px-6">
        <div className="bg-white py-12 px-8 rounded-lg drop-shadow-md">
          <div className="flex justify-between border-b border-gray-100 pb-9">
            <div className="flex">
              <img src={props.src} alt="icon" />
              <h3 className="text-[25px] font-bold capitalize">
                {props.title}
              </h3>
            </div>
            <div className="flex">
              <StarIcon className="size-8 text-yellow" />
              <StarIcon className="size-8 text-yellow" />
              <StarIcon className="size-8 text-yellow" />
              <StarIcon className="size-8 text-yellow" />
              <StarIcon className="size-8 text-yellow" />
            </div>
          </div>
          <p className="pt-5 text-[18px] text-blue-900">{props.desc}</p>
        </div>
        <div className="flex items-center space-x-3 pt-9">
          <img src={props.profile} alt="profileImage" />
          <div className="">
            <h3 className=" text-[20px] font-bold text-blue">
              {props.profileTitle}
            </h3>
            <p className="text-gray text-[18px]">{props.profileDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestmCard;
