import { useEffect, useState } from "react";
import { HistoryElementInterface } from "../../interfaces";
import styles from "./HistoryListElement.module.css";
import { useInView } from "react-intersection-observer";

export default function HistoryListElement({
  element,
  imagesContainerStyles,
  imageStyles,
  index,
}: {
  element: HistoryElementInterface;
  imagesContainerStyles?: string;
  imageStyles?: string;
  index: number;
}) {
  const { ref, inView } = useInView();
  const [didAnimate, setDidAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setDidAnimate(true), 2500);
    }
  }, [inView]);

  const renderDescription = element.descriptionList.map((description) => (
    <p
      key={crypto.randomUUID()}
      className={`${styles.description} ${
        !didAnimate && inView && styles.fadeIn
      }`}
    >
      {description}
    </p>
  ));

  const renderImages = element.imagesList.map((image) => (
    <img
      src={image}
      alt={element.altForImages}
      className={`${styles.image} ${imageStyles} ${
        !didAnimate && inView && index % 2 && styles.slideInFromRight
      } ${!didAnimate && inView && !(index % 2) && styles.slideInFromLeft}`}
      key={crypto.randomUUID()}
      loading="lazy"
    />
  ));

  return (
    <li className={`${styles.container}`} ref={ref}>
      <article className={`${styles.article}`}>
        <header>
          <h3 className={styles.title}>{element.title}</h3>
        </header>
        <div className={styles.descriptionContainer}>{renderDescription}</div>
      </article>
      <div
        className={`${styles.imagesContainer} ${
          imagesContainerStyles && imagesContainerStyles
        }`}
      >
        {renderImages}
      </div>
    </li>
  );
}
