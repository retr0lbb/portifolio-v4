import styled from "./formation.module.css"
import CourseCard from "../../components/CourseCard/CourseCard"
import etec from "../../static/etec.jpeg"


export default function FormationsPage(){
    return(
        <section className={styled.FormationWrapper}>
            <header className={styled.FormationHeader}>
                Formation
            </header>
            <div className={styled.FormationCoursesGrid}>
                <div className={styled.gridItem}><CourseCard title ="2021/2023 - ETIM DS" src={etec} desc="In high school at Etec Uirapuru I learned coding, it was a technical course focused on Systems Development, IOT training, database management, web development and mobile development."/></div>
                <div className={styled.gridItem}><CourseCard title ="2021/2023 - ETIM DS" src={etec} desc="In high school at Etec Uirapuru I learned coding, it was a technical course focused on Systems Development, IOT training, database management, web development and mobile development."/></div>
                <div className={styled.gridItem}><CourseCard title ="2021/2023 - ETIM DS" src={etec} desc="In high school at Etec Uirapuru I learned coding, it was a technical course focused on Systems Development, IOT training, database management, web development and mobile development."/></div>
                <div className={styled.gridItem}><CourseCard title ="2021/2023 - ETIM DS" src={etec} desc="In high school at Etec Uirapuru I learned coding, it was a technical course focused on Systems Development, IOT training, database management, web development and mobile development."/></div>
                
            </div>
        </section>
    ) 
}