import React from "react";

function SectionHeader({ variant, icon, hint, title, width }) {
  const style = {
    horizontal: "flex space-x-10 items-center",
    vertical: "flex flex-col space-y-10 items-center",
  };
  return (
    <div>
      <div className={`${style[variant]}`}>
        <div className={`flex`}>
          <img className="max-w-[86]" src={icon} alt="icon" />
        </div>
        <div className={`space-y-1`}>
          <p className="text-[15px] text-red">
            / /{"  "}
            <span className="text-blue-900 uppercase font-medium">{hint}</span>
          </p>
          <h3
            className={`${width} text-[20px] md:text-[40px] font-semibold text-blue`}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
