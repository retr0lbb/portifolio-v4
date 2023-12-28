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
                    <strong className={styled.StrongHi}>{t("Hi")}</strong>,<br></br>
                    {t("Pcon")}
                    </p>
                </div>
            </div>
        </section>
    )
}