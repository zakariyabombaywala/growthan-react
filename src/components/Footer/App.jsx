import React from "react";
import { NavLink } from "react-router-dom";
import MenuLInk from "../MenuLinlk/App";

function Footer() {
  return (
    <div className="bg-blue text-white mt-20 md:mt-40">
      <div className="container pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10 pb-24 border-b-[0.5px]">
          <div className="">
            <h1 className="text-[25px] font-semibold mb-[30px]">Pages</h1>

            <MenuLInk variant="footerLink" />

            {/* <ul className="space-y-4 text-[18px]">
              <li className="">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `${isActive ? "text-red" : "text-white"}  hover:text-red`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-[18px]">
                <NavLink
                  to="services"
                  className={({ isActive }) =>
                    `${isActive ? "text-red" : "text-white"}  hover:text-red`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="text-[18px]">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `${isActive ? "text-red" : "text-white"}  hover:text-red`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="text-[18px]">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-red" : "text-white"}  hover:text-red`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul> */}
          </div>
          <div className="">
            <h1 className="text-[25px] font-semibold mb-[30px]">
              Social Logins
            </h1>
            <ul className="space-y-4 text-[18px]">
              <li>
                <NavLink className=" hover:text-red">Facebook</NavLink>
              </li>
              <li>
                <NavLink className=" hover:text-red">Twitter</NavLink>
              </li>
              <li>
                <NavLink className=" hover:text-red">Instagram</NavLink>
              </li>
              <li>
                <NavLink className=" hover:text-red">Skype</NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-[25px] font-semibold mb-[30px]">Location</h1>
            <ul className="space-y-4 text-[18px]">
              <li>
                <NavLink className="underline hover:text-red">
                  UNIT NO. 147, FIRST FLOOR, JMD MEGAPOLIS, Badshahpur Sohna Rd
                  Hwy, Sector 48, Gurugram, Haryana 122018 .
                </NavLink>
              </li>
              <li>
                <NavLink className="underline hover:text-red">
                  Location Map
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-[25px] font-semibold mb-[30px]">
              Get in touch with
            </h1>
            <ul className="space-y-4">
              <li>
                <NavLink className="lg:text-[25px] font-bold py-3 px-7 bg-black rounded-md">
                  +91 8617514085
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[18px] underline hover:text-red">
                  business@growthan.com
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[18px] text-center pt-2 pb-24">
          Copyright &copy; 2023 | Growthan | All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
