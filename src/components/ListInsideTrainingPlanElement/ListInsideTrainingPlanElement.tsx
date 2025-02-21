import styles from "./ListInsideTrainingPlanElement.module.css";

export interface ListInsideTrainingPlanElement {
  title: string;
  text: string;
}

export default function ListInsideTrainingPlanElement({
  title,
  text,
}: ListInsideTrainingPlanElement) {
  return (
    <article className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
