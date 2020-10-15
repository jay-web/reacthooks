import React, { useState, useEffect } from "react";
import axios from 'axios';
import Accordion from "../Accordion/accordion"

const Search = () => {
    const [term, setTerm ] = useState("coding");      // First react hook
    const [result, setResult] = useState([]);

    

    useEffect(() => {               // Second react hook
        const search = async () => {
           const { data} = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        });
        setResult(data.query.search);
    }

    if(term && !result.length){
        search();
    }else{
        const timeoutId = setTimeout(() => {
            if(term){
                search();
            }
        }, 1000)
    
        return () => {
            clearTimeout(timeoutId);
        }
    }
  
   
    }, [term])

    const renderResult = () => {
        if(term){
            return (
                <Accordion items={result}/>
            )
        }
        return <div></div>
    }
    return (
       <div className="ui form">
           <div className="field">
               <label >Enter search term</label>
               <input 
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    />
           </div>
            {renderResult()}
       </div>
    )
}

export default Search;