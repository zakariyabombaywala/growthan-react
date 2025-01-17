import React from "react";

function WorkInfo({ index, src, steps, title, desc }) {
  const isEven = (index + 1) % 2 === 0;
  return (
    <div
      className={`relative z-[1] grid grid-cols-1 justify-center place-items-center space-y-7 before:h-[203px] before:border before:border-dashed before:border-blue-900 before:top-[136px] before:z-[-1]  lg:before:content-[''] before:absolute last:before:content-[unset] before:content-[unset] lg:grid-cols-[1fr_86px_1fr]  `}
    >
      <div
        className={`flex items-center ${
          isEven ? "order-1 lg:order-3" : "order-1"
        } max-w-[260px] `}
      >
        <img src={src} alt="icon" />
      </div>
      <div className="flex justify-center items-center order-2 bg-white rounded-full w-[86px] h-[86px] border-8 border-blue-600">
        <span className="text-[30px] font-semibold text-blue mx-auto">
          {steps}
        </span>
      </div>
      <div
        className={`flex items-center ${
          isEven ? "order-3 lg:order-1 lg:text-end " : "order-3"
        } space-x-7 text-center lg:text-start`}
      >
        <div className="space-y-3 max-w-[332px] text-blue">
          <h2 className="text-[25px] font-semibold capitalize">{title}</h2>
          <p className="text-[18px] text-blue-900">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkInfo;
