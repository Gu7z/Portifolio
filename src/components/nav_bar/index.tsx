import React, { SetStateAction } from "react";
import { Dispatch } from "react";
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
    selected === title ? "mobile_marker" : "";

  const selectOptions = (title: string) => {
    setSelected(title);
    document.getElementById(title)?.scrollIntoView();
  };

  return (
    <nav className="nav_bar">
      <ul>
        {SECTIONS_SELECTION.map((each) => (
          <li key={each.title} onClick={() => selectOptions(each.title)}>
            <div className={markerClassName(each.title)} />
            <div className="li_icons">{each.icon}</div>
            <h3>{each.title}</h3>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StickyBar;
