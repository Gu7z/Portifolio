/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Dispatch, SetStateAction } from "react";
import { myFoto } from "../../images";
import "./style.css";
interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  SECTIONS_SELECTION: { icon: JSX.Element; title: string }[];
}

const StickyBar: React.FC<Props> = ({
  selected,
  setSelected,
  SECTIONS_SELECTION,
}) => {
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
        {SECTIONS_SELECTION.map((each) => (
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
