/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { BiUser, BiLibrary, BiPhone, BiBookContent } from "react-icons/bi";
import "./style.css";

const LI_CONTENT = [
  {
    icon: <BiUser />,
    title: "About",
  },
  {
    icon: <BiLibrary />,
    title: "Resume",
  },
  {
    icon: <BiBookContent />,
    title: "Works",
  },
  {
    icon: <BiPhone />,
    title: "Contact",
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
        <img
          className="user_profile_image"
          src="https://avatars.githubusercontent.com/u/48556195?v=4"
          alt="User Profile"
        />
        <h1>Gustavo Ferri</h1>
        <p>web Developer</p>
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
