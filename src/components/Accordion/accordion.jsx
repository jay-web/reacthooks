import React, { useState } from "react";
import "./accordion.styles.css";
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickTitle = (index) => {
    setActiveIndex(index);
  };
  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    const bgTitle = index === activeIndex ? "bgTitle" : "";
    const bgContent = index === activeIndex ? "bgContent" : "";
    return (
      <React.Fragment key={item.title} >
       
       <div className={`title ${active} ${bgTitle}`} onClick={() => onClickTitle(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active} ${bgContent}`}>
          <p dangerouslySetInnerHTML={{ __html: item.snippet }} className="contentP"></p>
          <span className="readButton">
          <a 
            className="ui button primary"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            >Read</a>
        </span>
        </div>
      
       
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
