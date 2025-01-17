import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MenuLInk from "../MenuLinlk/App";
import MobileMenu from "../MobileMenu/App";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
  }, []);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div
        className={`fixed top-0 inset-x-0 z-[999] ${
          scrollHeight > 92 ? "bg-white drop-shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center py-4 ">
          <div className="">
            <NavLink to="">
              <img
                className="max-h-[32px] md:max-h-[64px]"
                src={Logo}
                alt="logo"
              />
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
                className="size-8 md:size-10 text-white bg-blue rounded-md p-1 hover:bg-white hover:border hover:border-blue hover:text-blue"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden absolute w-full">
          <MobileMenu show={showMobileMenu} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
