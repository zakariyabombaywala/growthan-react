import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MenuLInk from "../MenuLinlk/App";
import MobileMenu from "../MobileMenu/App";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="container flex justify-between items-center py-4 ">
      {!showSidebar && (
        <>
          <div className="max-h-[64px]">
            <NavLink to="">
              <img className="h-full" src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="hidden lg:flex ">
            <MenuLInk variant="dekstopMenuLink" />
          </div>
        </>
      )}

      <div>
        {!showSidebar && (
          <>
            <div className="hidden lg:block">
              <Button name="register" variant="primary" />
            </div>

            <div className=" lg:hidden">
              <Button
                name={<Bars3Icon className="size-10" />}
                variant="toggle"
                onClick={toggleSidebar}
              />
            </div>
          </>
        )}
      </div>
      {showSidebar && <MobileMenu show={showSidebar} onClick={toggleSidebar} />}
    </div>
  );
}

export default Navbar;
