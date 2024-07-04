import React from "react";

function SectionHeader(props) {
  return (
    <div>
      <div className={`${props.display} ${props.space}`}>
        <img src={props.icon} alt="icon" />
        <div className={`space-y-1`}>
          <p className="text-[15px] text-red">
            / /{" "}
            <span className="text-blue-900 uppercase font-medium">
              {props.hint}
            </span>
          </p>
          <h3 className={`text-[40px] font-semibold text-blue`}>
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
