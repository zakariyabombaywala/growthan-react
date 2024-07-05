import React from "react";

function WorkInfo(props) {
  const isEven = (props.index + 1) % 2 === 0;
  return (
    <div
      className={`grid grid-cols-1 justify-center place-items-center md:grid-cols-[1fr_86px_1fr]  `}
    >
      <div
        className={`flex items-center ${
          isEven ? "order-3" : "order-1"
        } max-w-[260px]`}
      >
        <img src={props.src} alt="icon" />
      </div>
      <div className="flex justify-center items-center order-2 bg-white rounded-full w-[86px] h-[86px] border-8 border-blue-600">
        <span className="text-[30px] font-semibold text-blue mx-auto">
          {props.steps}
        </span>
      </div>
      <div
        className={`flex items-center ${
          isEven ? "order-1 text-end" : "order-3"
        } space-x-7`}
      >
        <div className="space-y-3 max-w-[332px] text-blue">
          <h2 className="text-[25px] font-semibold capitalize">
            {props.title}
          </h2>
          <p className="text-[18px] text-blue-900">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkInfo;
