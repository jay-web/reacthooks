import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickTitle = (index) => {
    setActiveIndex(index);
  };
  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onClickTitle(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p dangerouslySetInnerHTML={ { __html : item.snippet}}></p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
