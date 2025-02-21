import styles from "./HistoryList.module.css";
import { HistoryElementInterface } from "../../interfaces";
import HistoryListElement from "../HistoryListElement/HistoryListElement";

export default function HistoryList({
  title,
  fancyTitleRight,
  historyList,
  imagesContainerStyles,
  imageStyles,
}: {
  title: string;
  fancyTitleRight: string;
  historyList: HistoryElementInterface[];
  imagesContainerStyles?: string;
  imageStyles?: string;
}) {
  const renderHistoryElements = historyList.map((element, index) => (
    <HistoryListElement
      index={index + 1}
      key={crypto.randomUUID()}
      element={element}
      imageStyles={imageStyles}
      imagesContainerStyles={imagesContainerStyles}
    />
  ));
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.fancyText}>{fancyTitleRight}</span>
        </h2>
      </header>
      <ul className={styles.list}>{renderHistoryElements}</ul>
    </section>
  );
}
