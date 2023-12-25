import styled from "./projectCard.module.css"
import {faChrome, faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card_right({src, desc, name, alt}){
    return(
        <div className={styled.MainCard}>
            <img className={styled.CardPhoto} src={src} alt={alt} />
            <div className={styled.Pdiv}>
                <h1 className={styled.PTitle}>{name}</h1>
                <p className={styled.PContent}>
                    {desc}
                </p>
                <div className={styled.PButtons}>
                    <button className={styled.ButtonBlue}><FontAwesomeIcon icon={faGithub} color="#E5E8E8" size="4x"/></button>
                    <button className={styled.ButtonBlue}><FontAwesomeIcon icon={faChrome} color="#E5E8E8" size="4x"/></button>
                </div>
            </div>
        </div>
    )
}