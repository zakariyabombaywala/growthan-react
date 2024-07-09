import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuLInk({ variant }) {
  const [activelink, setActiveLink] = useState("/");

  const style = {
    dekstopMenuLink: "flex flex space-x-16",
    mobileMenuLink: "flex flex-col space-y-7 block text-[1.5rem] px-6 py-4",
  };

  const location = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" },
  ];

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <ul className={`${style[variant]}`}>
      {location.map((links) => {
        return (
          <li>
            <NavLink
              to={links.path}
              className={() =>
                `${
                  activelink === links.path ? "text-red" : "text-blue"
                } text-blue text-[18px] font-medium hover:text-red`
              }
              onClick={() => handleClick(links.path)}
            >
              {links.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuLInk;
