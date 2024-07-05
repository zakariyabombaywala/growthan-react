import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="container flex justify-between items-center py-4 ">
      <div>
        <img className="mx-w-[352px]" src={Logo} alt="logo" />
      </div>
      <div className="hidden lg:flex ">
        <Link>
          <ul className="flex space-x-16">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red" : "text-blue"
                  } text-blue text-[18px] font-medium hover:text-red`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red" : "text-blue"
                  } text-blue text-[18px] font-medium hover:text-red`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red" : "text-blue"
                  } text-blue text-[18px] font-medium hover:text-red`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red" : "text-blue"
                  } text-blue text-[18px] font-medium hover:text-red`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </Link>
      </div>
      <div>
        <Button
          text="register"
          bg="bg-blue"
          textColor="text-white"
          hover="hover:bg-transparent hover:text-blue hover:border border-blue hover:font-semobold"
          rounded="rounded-md"
          padding="px-10 py-4"
          hidden="hidden lg:block"
        />

        <Button
          text={<Bars3Icon className="size-6" />}
          bg="bg-white"
          textColor="text-black"
          hover="hover:bg-transparent hover:text-blue hover:border border-blue hover:font-semobold"
          rounded="rounded-md"
          padding="px-10 py-4"
          hidden="block lg:hidden"
        />
      </div>
    </div>
  );
}

export default Navbar;
