import "flag-icon-css/css/flag-icons.css";
import styled from "./flagSwap.module.css"
import { useState } from "react";
import i18next from "i18next";

export default function(){
    let flag;
    if(i18next.language == "en"){
        flag = "us"
    }else{
        flag = "br"
    }

    const [flagState, setCurrentFlagState] = useState(flag)


  

    const handleClick =() =>{
        if(i18next.language === "en"){
            setCurrentFlagState("br")
            i18next.changeLanguage("pt")
        }else{
            setCurrentFlagState("us")
            i18next.changeLanguage("en")
        }
    }

    return(
        <div 
            onClick={handleClick} 
            className={`flag-icon-${flagState} ${styled.flagIcon}`}>
                
        </div>
    )
}