import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MenuLInk from "../MenuLinlk/App";
import MobileMenu from "../MobileMenu/App";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <div className="container flex justify-between items-center py-4 ">
        <div className="max-h-[64px]">
          <NavLink to="">
            <img className="h-full" src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="hidden lg:flex ">
          <MenuLInk variant="dekstopMenuLink" />
        </div>

        <div>
          <div className="hidden lg:block">
            <Button name="register" variant="primary" />
          </div>

          <div className=" lg:hidden">
            <Bars3Icon
              className="size-10 text-white bg-blue rounded-md p-1 hover:bg-white hover:border hover:border-blue hover:text-blue"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <MobileMenu show={showMobileMenu} />
      </div>
    </div>
  );
}

export default Navbar;
