import React from "react";
import { StickyBar } from "./components";
import "./App.css";
import About from "./components/about";

function App() {
  // Render na stickybar so se for mobile
  return (
    <div className="portifolio">
      <StickyBar />
      <div className="sections">
        <About />
      </div>
    </div>
  );
}

export default App;
