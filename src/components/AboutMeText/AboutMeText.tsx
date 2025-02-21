import styles from "./AboutMe.module.css";

export default function AboutMeText({
  title,
  text,
}: {
  title?: string;
  text: string;
}) {
  return (
    <div>
      <h1 className={`${styles.fancyText} ${styles.title}`}>{title}</h1>
      <p className={styles.text} data-testid="text">
        {text}
      </p>
    </div>
  );
}
