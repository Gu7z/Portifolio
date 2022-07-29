import React from "react";
import { NavBar, StickyBar, About, Projects } from "./components";
import "./App.css";
import useIsMobile from "./hooks/is_mobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="portifolio">
      {isMobile ? <NavBar /> : <StickyBar />}
      {/* <div className="sections">
        <About />
      </div> */}
      <div className="sections">
        <Projects />
      </div>
    </div>
  );
}

export default App;
