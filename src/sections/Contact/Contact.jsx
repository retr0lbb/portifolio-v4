import ContactCard from "../../components/ContactCard/ContactCard"
import styled from "./contact.module.css"

export default function Contact(){
    return(
        <section className={styled.ContactMain}>
            <div className={styled.ContactHeaderTitle}>Contact</div>
            <div className={styled.contactWrapper}>
                <ContactCard />
            </div>
        </section>
    )
}