import styles from "./TextMe.module.css";

export default function TextMe() {
  return (
    <article className={styles.container}>
      <header>
        <h2>
          Masz pytania? <span className={styles.fancyText}>Napisz!</span>
        </h2>
      </header>
      <p className={styles.text}>
        Znajdziesz mnie na mediach społecznościowych <br />
        pod wskazanymi profilami. Nie wahaj się! <br />
        Odpowiem na każde pytanie.
      </p>
    </article>
  );
}
