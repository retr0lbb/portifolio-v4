import ContactCard from "../../components/ContactCard/ContactCard"
import styled from "./contact.module.css"
import {faMessage, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Contact(){
    return(
        <section id="contact" className={styled.ContactMain}>
            <div className={styled.ContactHeaderTitle}>Contact</div>
            <div className={styled.contactWrapper}>
                <ContactCard icon={faMessage} message={"+55 (11)999429345"} copyContent="+5511999429345" />
                <ContactCard icon={faEnvelope} message={"henrique.contato.dev@gmail.com"} copyContent="henrique.contato.dev@gmail.com"/>
                <ContactCard icon={faLinkedin} message={"Henrique Barbosa"} copyContent="link do linkedin"/>
            </div>
        </section>
    )
}