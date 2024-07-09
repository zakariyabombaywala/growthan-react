import React from "react";

function Banner({ img, children }) {
  return (
    <div
      className={`${img} min-h-[605px] bg-cover bg-no-repeat bg-center flex justify-center items-center`}
    >
      <h1 className="text-blue text-[70px] font-extrabold pt-[280px]">
        {children}
      </h1>
    </div>
  );
}

export default Banner;
