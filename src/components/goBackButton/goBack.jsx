import styled from "./goBack.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"

export default function goBack({showButton}){
   
   
    const handleClick = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Isso adiciona uma animação suave à rolagem
          });
    }

    return showButton? (
        <div className={styled.GoBack}>
            <button onClick={handleClick} className={styled.GoBackButton}><FontAwesomeIcon color="#17202A" icon={faArrowUp} size="3x"/></button>
        </div>
    ): null
}