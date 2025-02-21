import styles from "./TransformationsText.module.css";
import exerciseBackgroundImg from "../../assets/images/exercise.png";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function TransformationsText() {
  const width = useWindowWidth();
  return (
    <section className={styles.container}>
      {width >= 1020 && (
        <img
          className={styles.exerciseBackground}
          src={exerciseBackgroundImg}
          alt=""
        />
      )}
      <h2 className={styles.title}>
        Transformacje, które <span className={styles.fancyText}>motywują</span>
      </h2>
      <p className={styles.text}>
        Odkryj inspirujące metamorfozy moich podopiecznych, które odmieniły ich
        życie dzięki współpracy i dedykowanemu treningowi kalisteniki.
      </p>
    </section>
  );
}
