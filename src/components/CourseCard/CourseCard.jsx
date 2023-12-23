import styled from "./card.module.css";

export default function CourseCard({ title, src, desc }) {
  return (
    <div className={styled.CardWrapper}>
      <p className={styled.CardTitle}>{title}</p>
      <img src={src || "null"} className={styled.CardImg} alt="Alt da imagem" />
      <p className={styled.CardDesc}>{desc}</p>
      <button className={styled.CardButton}>Certificate</button>
    </div>
  );
}
