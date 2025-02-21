import { CoachInterface } from "../../interfaces";
import Button from "../Button/Button";
import styles from "./CoachesListElement.module.css";
import Img from "../Img/Img";
import { useMemo } from "react";

export default function CoachesListElement({
  listItem,
}: {
  listItem: CoachInterface;
}) {
  const firstName = listItem.name.split(" ")[0];
  const secondName = listItem.name.split(" ")[1];
  const coachImages = useMemo(() => {
    return listItem.imageDetails.map((image) => (
      <li key={crypto.randomUUID()} className={styles.imageWrapper}>
        <Img
          alt={`Zdjęcie przedstawiające trenera ${listItem.name}`}
          imgId={image.imageId}
          className={styles.image}
        />
      </li>
    ));
  }, [listItem.imageDetails]);

  return (
    <li className={styles.container}>
      <article className={styles.textContentWrapper}>
        <header>
          <h2 className={styles.title}>
            {firstName} <span className={styles.orange}>{secondName}</span>
          </h2>
        </header>
        <div className={styles.description}>
          {listItem.description.split("\n").map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <Button
          link={`/coaches/contact/${listItem.id}`}
          text={`Wybierz Trenera`}
          arrow
          className={styles.btn}
        />
      </article>
      <ul className={styles.imagesWrapper}>
        {listItem.imageDetails && coachImages}
      </ul>
    </li>
  );
}
