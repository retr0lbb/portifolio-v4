import Card_right from "../../components/ProjectCard/ProjectCard";
import styled from "./project.module.css";
import NERD from "../../static/NERD.png"
import DOWNLOAD from "../../static/download.jpeg"
import { useTranslation } from "react-i18next";


export default function Projects(){
    const { t } = useTranslation()

    return(
        <section id="projects" className={styled.ProjectMain}>
            <div className={styled.ProjectTitle}>
                {t("projects")}
            </div>
            <div className={styled.ProjectGrid}>
                <Card_right src={NERD} 
                            desc={t("projectDescNERD")}
                            name={"NERD"}
                            alt={"Imagem da empresa NERD de jogos digitais"}
                            projectSrc={"https://github.com/retr0lbb/N.E.R.D"}
                            deploySrc={"https://github.com/retr0lbb/N.E.R.D"}
                            

                />

                <Card_right 
                src={DOWNLOAD}
                desc={t("coming soon")}
                name={t("coming soon")}
                alt={"Imagem com fundo preto escrito em preve com uma fonte em branco"}
                
                isLeft={true}
                />
                
            </div>
        </section>
    )
}