import React from "react";
import { NavBar, StickyBar, About, Projects } from "./components";
import "./App.css";
import useIsMobile from "./hooks/is_mobile";
import { useState } from "react";
import { BiBookContent, BiLibrary, BiPhone, BiUser } from "react-icons/bi";

const SECTIONS_SELECTION = [
  {
    icon: <BiUser />,
    title: "Sobre",
    content: <About />,
  },
  {
    icon: <BiBookContent />,
    title: "Trabalhos",
    content: <Projects />,
  },
  {
    icon: <BiLibrary />,
    title: "Formação",
    content: (
      <div className="cards" style={{ padding: 56 }}>
        Em Construção
      </div>
    ),
  },
  {
    icon: <BiPhone />,
    title: "Contato",
    content: (
      <div className="cards" style={{ padding: 56 }}>
        Em Construção
      </div>
    ),
  },
];

function App() {
  const [selectedSection, setSelectedSection] = useState(
    SECTIONS_SELECTION[0].title
  );

  const isMobile = useIsMobile();

  const barsProps = {
    selected: selectedSection,
    setSelected: setSelectedSection,
    SECTIONS_SELECTION: SECTIONS_SELECTION,
  };

  return (
    <div className="portifolio">
      {isMobile ? <NavBar {...barsProps} /> : <StickyBar {...barsProps} />}
      <div className="sections">
        {
          SECTIONS_SELECTION.find(
            (eachSection) => eachSection.title === selectedSection
          )?.content
        }
      </div>
    </div>
  );
}

export default App;
