import { useTranslation } from "react-i18next";
import styled from "./about.module.css";


export default function AboutPage(){
    const { t } = useTranslation()

    return(
        <section id="about" className={styled.AboutWrapper}>
            <header className={styled.AboutHeader}>
                {t("AboutMe")}
            </header>
            <div className={styled.AboutMainWrapper}>
                <div className={styled.AboutImage}>

                </div>
                <div className={styled.AboutText}>
                    <p>
                    <strong className={styled.StrongHi}>HI</strong>,<br></br>
                    my name is Henrique, im a Full stack JavaScript developer, i usually work with <strong className={styled.strongVisibility}>React</strong>, <strong className={styled.strongVisibility}>React Native</strong> and <strong className={styled.strongVisibility}>Node.js</strong>, but, i’m currently learning C, C#, and C++. I like to play video games, tabletop rpg and basketball i programm since i was 15 and love making games too.
                    </p>
                </div>
            </div>
        </section>
    )
}