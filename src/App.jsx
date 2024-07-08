import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/App";
import { useEffect, useState } from "react";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
  }, []);
  return (
    <div>
      <div
        className={`fixed top-0 inset-x-0 z-[999] ${
          scrollHeight > 92 ? "bg-white drop-shadow-xl" : "bg-transparent"
        }`}
      >
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
