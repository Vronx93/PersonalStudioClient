import styles from "./JoinCommunity.module.css";
import SocialsList from "../SocialsList/SocialsList";

export default function JoinCommunity() {
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Dołącz do naszej{" "}
          <span className={styles.fancyText}>społeczności</span>!
        </h2>
        <p>
          Znajdź nas na popularnych platformach społecznościowych i dołącz do
          naszej rosnącej społeczności fitness. ale również bezpośrednio
          kontaktować się ze mną, dzieląc się swoimi pytaniami.
        </p>
      </div>
      <SocialsList />
    </article>
  );
}
