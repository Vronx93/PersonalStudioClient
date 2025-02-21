import { ReactNode } from "react";
import styles from "./NavArticle.module.css";
import exercise1 from "../../assets/images/exerciseBackground.png";
import exercise2 from "../../assets/images/exercise2.png";

export interface NavArticleInterface {
  title: string;
  fancyTitleLeft?: string;
  fancyTitleRight?: string;
  text: ReactNode;
}

export default function NavArticle({
  title,
  fancyTitleLeft,
  fancyTitleRight,
  text,
}: NavArticleInterface) {
  return (
    <article className={styles.container}>
      <img className={styles.imageRight} src={exercise1} alt="" />
      <img className={styles.imageLeft} src={exercise2} alt="" />
      <h1 className={styles.title}>
        {fancyTitleLeft && (
          <span className={styles.fancyText}>{fancyTitleLeft} </span>
        )}
        {title}
        {fancyTitleRight && (
          <span className={styles.fancyText}> {fancyTitleRight}</span>
        )}
      </h1>
      <div className={styles.textWrapper}>{text}</div>
    </article>
  );
}
