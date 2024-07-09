import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 inset-x-0 z-[999] ${
          scrollHeight > 92 ? "bg-white drop-shadow-xl" : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>
    </>
  );
}

export default Header;
