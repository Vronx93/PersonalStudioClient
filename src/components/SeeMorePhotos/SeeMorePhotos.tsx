import SocialsList from "../SocialsList/SocialsList";
import styles from "./SeeMorePhotos.module.css";

export default function SeeMorePhotos() {
  return (
    <article className={styles.container}>
      <header>
        <h2>
          Zobacz więcej <span className={styles.fancyText}>zdjęć!</span>
        </h2>
      </header>
      <p className={styles.text}>
        Więcej zdjęć znajdziesz na naszych mediach społecznościowych, więc
        wbijaj i sprawdzaj!
      </p>
      <SocialsList />
    </article>
  );
}
