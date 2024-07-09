import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/App";
import MobileMenu from "./components/MobileMenu/App";

function App() {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
