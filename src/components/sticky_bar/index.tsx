/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { BiUser, BiLibrary, BiPhone, BiBookContent } from "react-icons/bi";
import { myFoto } from "../../images";
import "./style.css";

const LI_CONTENT = [
  {
    icon: <BiUser />,
    title: "Sobre",
  },
  {
    icon: <BiBookContent />,
    title: "Trabalhos",
  },
  {
    icon: <BiLibrary />,
    title: "Formação",
  },
  {
    icon: <BiPhone />,
    title: "Contato",
  },
];

const StickyBar: React.FC = () => {
  const [selected, setSelected] = useState<string | undefined>(
    LI_CONTENT[0].title
  );

  const markerClassName = (title: string) =>
    selected === title ? "marker" : "";

  const selectOptions = (title: string) => {
    setSelected(title);
    document.getElementById(title)?.scrollIntoView();
  };

  return (
    <div className="sticky_bar">
      <div>
        <img className="user_profile_image" src={myFoto} alt="User Profile" />
        <h1>Gustavo Ferri</h1>
        <p>Desenvolvedor web</p>
      </div>
      <ul>
        {LI_CONTENT.map((each) => (
          <li key={each.title} onClick={() => selectOptions(each.title)}>
            <div className={markerClassName(each.title)} />
            <div className="li_icons">{each.icon}</div>
            <h3>{each.title}</h3>
          </li>
        ))}
      </ul>

      <div className="sticky_bottom">@2022 Gustavo Ferri</div>
    </div>
  );
};

export default StickyBar;
