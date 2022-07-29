import React from "react";
import { NavBar, StickyBar } from "./components";
import "./App.css";
import About from "./components/about";
import useIsMobile from "./hooks/is_mobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="portifolio">
      {isMobile ? <NavBar /> : <StickyBar />}
      <div className="sections">
        <About />
      </div>
    </div>
  );
}

export default App;
