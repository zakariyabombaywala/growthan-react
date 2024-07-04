import React from "react";

function Button(props) {
  return (
    <div
      className={`${props.bg} ${props.textColor} ${props.border} ${props.hover} ${props.rounded} px-10 py-4 text-[18px] capitalize font-semibold  cursor-pointer`}
    >
      {props.text}
    </div>
  );
}

export default Button;
