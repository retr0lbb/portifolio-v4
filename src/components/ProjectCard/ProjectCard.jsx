import styled from "./projectCard.module.css"
import {faChrome, faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card_right({src, desc, name, alt, projectSrc, deploySrc, isLeft}){

    return(
        <div className={`${styled.MainCard} ${ isLeft? styled.isLeftMain : ""}`}>
            <img className={`${styled.CardPhoto} ${isLeft? styled.isLeftPhoto : ""}`} src={src} alt={alt} />
            <div className={styled.Pdiv}>
                <h1 className={`${styled.PTitle} ${isLeft? styled.isLeftTitle : ""}`}>{name}</h1>
                <p className={`${styled.PContent} ${isLeft? styled.isLeftContent : ""}`}>
                    {desc}
                </p>
                <div className={`${styled.PButtons} ${isLeft? styled.isLeftButtons : ""}`}>
                    <a target="blank" href={projectSrc}><button className={`${styled.ButtonBlue}`}><FontAwesomeIcon icon={faGithub} color="#E5E8E8" size="4x"/></button></a>
                    <a target="blank" href={deploySrc}><button className={styled.ButtonBlue}><FontAwesomeIcon icon={faChrome} color="#E5E8E8" size="4x"/></button></a>
                    </div>
            </div>
        </div>
    )
}