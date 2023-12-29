import React, { useState } from "react";
import styled from "./contactCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function ContactCard({ icon, message, copyContent }) {
  const [isActive, setIsActive] = useState(false);

  const { t }= useTranslation()

  const handleClick = () => {
    setIsActive(true);

    navigator.clipboard.writeText(copyContent);
    setTimeout(() => {
        setIsActive(false)
    }, 2000);

  };
  

  return (
    <div className={styled.ContactMainWrapper}>
      <div>
        <FontAwesomeIcon icon={icon} size="10x" color="#E5E8E8" />
      </div>
      <p className={styled.ContactText}>{message}</p>
      <button
        className={`${styled.ContactButton} ${isActive? styled.active: ""}`}
        onClick={handleClick}
        disabled={isActive}
        id="copyButton"
      >
        <div className={styled.buttonContent}>

        {isActive? <FontAwesomeIcon icon={faCheck} /> : t("copy")}
        </div>
      </button>
    </div>
  );
}
