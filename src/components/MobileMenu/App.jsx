import React from "react";
import MenuLInk from "../MenuLinlk/App";

function MobileMenu({ show }) {
  return (
    <div
      className={` ${
        show ? "block" : "hidden"
      } inset-x-0 drop-shadow bg-white sm:w-3/4 mx-auto `}
    >
      <div className="block text-center">
        <MenuLInk variant="mobileMenuLink" />
      </div>
    </div>
  );
}

export default MobileMenu;
