import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Button({ onClick, name, variant, arrow }) {
  const style = {
    primary:
      "bg-blue text-white px-[39px] pt-[17px] pb-[18px] hover:bg-transparent hover:text-blue border border-blue transition-colors",
    outline:
      "bg-transparent text-blue border border-blue px-[35px] py-[17px] hover:bg-blue hover:text-white transition-colors",
    icon: "bg-blue text-white px-5 py-4 hover:bg-white hover:text-blue border border-blue transition-colors",
  };
  return (
    <button
      onClick={onClick}
      className={`${style[variant]} rounded-lg text-[18px] capitalize font-semibold cursor-pointer flex items-center space-x-10`}
    >
      {name}
      {arrow ? (
        <ChevronRightIcon className="size-5 ms-2 bg-white rounded-full text-blue p-1 transition-colors" />
      ) : null}
    </button>
  );
}

export default Button;
