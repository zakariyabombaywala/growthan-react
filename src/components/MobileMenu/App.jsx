import React, { useEffect, useState } from "react";
import MenuLInk from "../MenuLinlk/App";

function MobileMenu({ show }) {
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setMenuHeight(scrollY);
    });
  });
  return (
    <div
      className={`${menuHeight > 90 && "hidden"} ${
        show ? "block" : "hidden"
      } drop-shadow bg-white sm:w-3/4 mx-auto `}
    >
      <div className="block text-center">
        <MenuLInk variant="mobileMenuLink" />
      </div>
    </div>
  );
}

export default MobileMenu;
