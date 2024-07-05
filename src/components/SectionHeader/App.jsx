import React from "react";

function SectionHeader(props) {
  return (
    <div>
      <div className={`${props.display} ${props.space}`}>
        <div className={`${props.flex}`}>
          <img className="max-w-[86]" src={props.icon} alt="icon" />
        </div>
        <div className={`space-y-1`}>
          <p className="text-[15px] text-red">
            / /{"  "}
            <span className="text-blue-900 uppercase font-medium">
              {props.hint}
            </span>
          </p>
          <h3 className={`${props.width} text-[40px] font-semibold text-blue`}>
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
