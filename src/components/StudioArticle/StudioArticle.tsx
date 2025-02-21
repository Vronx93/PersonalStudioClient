import styles from "./StudioArticle.module.css";

export default function StudioArticle({
  newLineTextList,
  containerStyle,
}: {
  newLineTextList: string[];
  containerStyle?: string;
}) {
  const renderText = newLineTextList.map((text) => (
    <p className={styles.text} key={crypto.randomUUID()}>
      {text}
    </p>
  ));

  return (
    <article className={`${styles.container} ${containerStyle}`}>
      {renderText}
    </article>
  );
}
