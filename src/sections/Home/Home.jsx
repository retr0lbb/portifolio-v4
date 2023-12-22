import styled from "./home.module.css"
import React from "react"
import initImg from "../../static/initImg.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons"

export default function Home(){
    return(
        <section className={styled.mainWrapper}>
            <nav className={styled.navWrapper}>
                <div className={styled.logo}>
                    ./H
                </div>
                <div className={styled.NavList}>
                    <ul className={styled.mainlist}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>😁</li>
                    </ul>
                </div>
            </nav>
            <div className={styled.mainBodyWrapper}>
                <div className={styled.MainTextWrapper}>
                    <p>
                    Hello! 👋,<br></br>
                    I’m Henrique Barbosa Sampaio, a<br></br>
                    <strong>Fullstack developer</strong>
                    </p>
                    <ul className={styled.linksWrapper}>
                        <li> <FontAwesomeIcon icon={faGithub} color="#181717" size="3x"/> </li>
                        <li> <FontAwesomeIcon icon={faLinkedin} color="#0A66C2" size="3x"/> </li>
                        <li> <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="3x"/> </li>
                    </ul>
                </div>
                <div className={styled.PhotoMainWrapper}>
                    <div></div>
                </div>
            </div>
        </section>
    )
}