import styled from "./home.module.css"
import React, { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {useTranslation } from "react-i18next"
import Swap from "../../components/swapButton/swap"

export default function Home({onHeaderPositionChange }){
    const { t } = useTranslation();
    const HeaderRef = useRef(null);

    useEffect(()=>{
        const handleScroll = () =>{
            if(HeaderRef.current){
                const { top } = HeaderRef.current.getBoundingClientRect()
                onHeaderPositionChange(top >  window.innerHeight - 300)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [onHeaderPositionChange]);




    return(
        <section id="home" className={styled.mainWrapper}>
            <nav className={styled.navWrapper}>
                <div className={styled.logo}>
                    <p>./H</p>
                </div>
                <div className={styled.NavList}>
                    <ul className={styled.mainlist}>
                        <li><a href="/#home">{t("home")}</a></li>
                        <li><a href="/#about">{t("about")}</a></li>
                        <li><a href="/#projects">{t("projects")}</a></li>
                        <li><a href="/#contact">{t("contact")}</a></li>
                        <li><Swap /></li>
                    </ul>
                </div>
            </nav>
            <div className={styled.mainBodyWrapper}>
                <div className={styled.MainTextWrapper}>
                    <p>
                        {t("HomeTextpt1")}<strong>{t("Full Stack Developer")}</strong>
                    </p>
                    <ul ref={HeaderRef} className={styled.linksWrapper}>
                        <li><a target="blank" href="https://github.com/retr0lbb"><FontAwesomeIcon icon={faGithub} color="#181717" size="3x"/></a> </li>
                        <li><a target="blank" href="#"><FontAwesomeIcon icon={faLinkedin} color="#0A66C2" size="3x"/></a> </li>
                        <li><a target="blank" href="#"><FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="3x"/></a></li>
                    </ul>
                </div>
                <div className={styled.PhotoMainWrapper}>
                    <div></div>
                </div>
            </div>
        </section>
    )
}