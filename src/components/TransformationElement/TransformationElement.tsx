import styles from "./TransformationElement.module.css";
import fireImg from "../../assets/images/fire.png";
import { TransformationProps } from "../../interfaces";
import Img from "../Img/Img";

export default function TransformationElement({
  imgBefore,
  imgAfter,
  name,
  age,
  weightLost,
}: TransformationProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imagesWrapper}>
        <div className={`${styles.imgWrapper} ${styles.radiusLeftTop}`}>
          <Img
            className={styles.imgBefore}
            imgId={imgBefore}
            alt="Zdjęcie klienta przed przemianą"
          />
        </div>
        <div className={`${styles.imgWrapper} ${styles.radiusRightTop}`}>
          <Img
            className={styles.imgAfter}
            imgId={imgAfter}
            alt="Zdjęcie klienta po przemianie"
          />
        </div>
      </div>
      <div className={styles.textContentWrapper}>
        <p data-testid="age" className={styles.age}>
          <span data-testid="name" className={styles.name}>
            {name},{" "}
          </span>
          {age} lat
        </p>
        <div className={styles.right}>
          <img src={fireImg} alt="Płomień." />
          <p>
            <span data-testid="lostWeight" className={styles.weight}>
              -{weightLost}
            </span>
            kg
          </p>
        </div>
      </div>
    </div>
  );
}
