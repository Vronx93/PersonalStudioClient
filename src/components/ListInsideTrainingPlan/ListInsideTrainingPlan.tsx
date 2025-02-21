import ListInsideTrainingPlanElement from "../ListInsideTrainingPlanElement/ListInsideTrainingPlanElement";
import styles from "./ListInsideTrainingPlan.module.css";

export default function ListInsideTrainingPlan({
  title,
  listItems,
}: {
  title: string;
  listItems: { title: string; text: string }[];
}) {
  const renderListItems = listItems.map((item) => (
    <ListInsideTrainingPlanElement
      title={item.title}
      text={item.text}
      key={crypto.randomUUID()}
    />
  ));
  return (
    <article className={styles.container}>
      <h4 className={styles.title}>{title}:</h4>
      <ul className={styles.list}>{renderListItems}</ul>
    </article>
  );
}
