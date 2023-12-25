import Card_right from "../../components/ProjectCard/ProjectCard";
import styled from "./project.module.css";
import NERD from "../../static/NERD.png"
import Card_left from "../../components/ProjectCard/ProjectCardLeft";


export default function Projects(){
    return(
        <section className={styled.ProjectMain}>
            <div className={styled.ProjectTitle}>
                Projects
            </div>
            <div className={styled.ProjectGrid}>
                <Card_right src={NERD} 
                            desc={"Um e-commerce de jogos digitais, que visa diminuir o preço dos jogos criando uma plataforma totalmente nacional e prover apoio para desenvolvedores de jogos independentes"}
                            name={"NERD"}
                            alt={"Imagem da empresa NERD de jogos digitais"}
                />
                <Card_left 
                        src={NERD}
                        desc={"Um e-commerce de jogos digitais, que visa diminuir o preço dos jogos criando uma plataforma totalmente nacional e prover apoio para desenvolvedores de jogos independentes"}
                            name={"NERD"}
                            alt={"Imagem da empresa NERD de jogos digitais"}
                />
            </div>
        </section>
    )
}