import React from "react";
import Accordion from "./components/Accordion/accordion";
const App = (props) => {
    const items = [
        {
            title: "What is React ?",
            content: "React is javascript library"
        },
        {
            title : "Why do we use React ?",
            content : "React is front end javascript library,which is being used to create reusable ui components",
        },{
            title : "Which language do we use for React ?",
            content : "Javascript"
        }
    ]

   

    const textStyle = {
      textAlign : "center",
      padding: '1rem',
      fontSize: '2rem',
      fontWeight: '900',
      
    }
  return (
    <React.Fragment>
      <div style={textStyle}>Hooks by React</div>
      <Accordion items={items} />
    </React.Fragment>
  );
};

export default App;
