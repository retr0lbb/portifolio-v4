import styled from "./formation.module.css"
import CourseCard from "../../components/CourseCard/CourseCard"
import etec from "../../static/etec.jpeg"
import { useTranslation } from "react-i18next"


export default function FormationsPage(){

    const { t }= useTranslation()

    return(
        <section className={styled.FormationWrapper}>
            <header className={styled.FormationHeader}>
                {t("Formation")}
            </header>
            <div className={styled.FormationCoursesGrid}>

                <div className={styled.gridItem}><CourseCard 
                    title ="2021/2023 - ETIM DS" 
                    src={etec} 
                    desc={t("ETECDESC")}/>
                      </div>

            </div>
        </section>
    ) 
}