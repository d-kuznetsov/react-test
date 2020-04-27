import React, { useState } from "react";

interface Props {
  tabs: Array<React.ReactElement>;
  names: string[];
}

function Tabs(props: Props) {
  const { names, tabs } = props;
  const [curTab, setCurTab] = useState(0);
  return (
    <div className="Tabs">
      <nav>
        <ul className="Tabs-Nav">
          {names.map((name, index) => (
            <li
              className={`Tabs-NavItem ${
                curTab === index ? "Tabs-NavItem__curItem" : ""
              }`}
              key={name}
              data-id={index}
              // @ts-ignore
              onClick={(e) => setCurTab(+e.target.dataset.id)}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
      <section>{tabs[curTab]}</section>
    </div>
  );
}

export default Tabs;
