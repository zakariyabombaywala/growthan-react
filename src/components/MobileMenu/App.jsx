import React from "react";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MenuLInk from "../MenuLinlk/App";

function MobileMenu({ show, onClick }) {
  return (
    <div
      className={`${
        show ? "translate-x-0" : "-translate-x-full"
      } fixed lg:hidden top-0 left-0 w-full  lg:w-4/12 md:w-1/2 h-full grid grid-rows-[auto_1fr_auto] space-y-4 bg-white  `}
    >
      <div className="flex justify-between items-center px-6 py-4 ">
        <img className="w-3/4" src={Logo} alt="logo" />
        <Button
          onClick={onClick}
          name={<XMarkIcon className="size-8 text-blue" />}
        />
      </div>
      {/* Links */}
      <MenuLInk variant="mobileMenuLink" />
    </div>
  );
}

export default MobileMenu;
