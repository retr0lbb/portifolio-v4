import ContactCard from "../../components/ContactCard/ContactCard"
import styled from "./contact.module.css"
import {faMessage, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"

export default function Contact(){
    const { t } = useTranslation()

    return(
        <section id="contact" className={styled.ContactMain}>
            <div className={styled.ContactHeaderTitle}>{t("contact")}</div>
            <div className={styled.contactWrapper}>
                <ContactCard icon={faMessage} message={"+55 (11)999429345"} copyContent="+5511999429345" />
                <ContactCard icon={faEnvelope} message={"henrique.contato.dev@gmail.com"} copyContent="henrique.contato.dev@gmail.com"/>
                <ContactCard icon={faLinkedin} message={"Henrique Barbosa"} copyContent="link do linkedin"/>
            </div>
        </section>
    )
}