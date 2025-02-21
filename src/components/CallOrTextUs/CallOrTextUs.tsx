import styles from "./CallOrTextUs.module.css";
import exerciseBackground from "../../assets/images/exercise2.png";
import phoneImg from "../../assets/images/phone.png";
import whatsAppImg from "../../assets/images/green-whatsapp.png";

export default function CallOrTextUs({ addClass }: { addClass?: string }) {
  return (
    <section className={`${styles.container} ${addClass}`}>
      <img
        className={styles.exerciseBackground}
        src={exerciseBackground}
        alt=""
      />
      <ul className={styles.list}>
        <li>
          <article className={styles.article}>
            <header>
              <h2 className={styles.title}>
                Masz pytania? <span className={styles.fancyText}>Zadzwoń!</span>
              </h2>
            </header>
            <p className={styles.text}>
              Odpowiemy na każde pytanie, a Twoje wątpliwości rozwiejemy jednym
              telefonem – zadzwoń i zacznij zmieniać się z nami!
            </p>
          </article>
          <ul className={styles.phoneList}>
            <li>
              <a
                className={styles.phoneNumber}
                href={`tel:${import.meta.env.VITE_REACT_APP_PHONE_HTML}`}
              >
                <img src={phoneImg} alt="Ikona przedstawiająca telefon." />

                <p>{import.meta.env.VITE_REACT_APP_PHONE}</p>
              </a>
            </li>
            <li>
              <a
                className={styles.phoneNumber}
                href={`https://api.whatsapp.com/send?phone=${
                  import.meta.env.VITE_REACT_APP_PHONE_WHATSAPP_HTML
                }`}
              >
                <img src={whatsAppImg} alt="Ikona aplikacji WhatsApp" />
                <p>{import.meta.env.VITE_REACT_APP_PHONE}</p>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <article className={styles.article}>
            <header>
              <h2 className={styles.title}>
                Nie chcesz dzwonić?{" "}
                <span className={styles.fancyText}>Napisz!</span>
              </h2>
            </header>
            <p className={styles.text}>
              Znajdziesz mnie na mediach społecznościowych pod wskazanymi
              profilami. Nie wahaj się! Odpowiem na każde pytanie.
            </p>
          </article>
        </li>
      </ul>
    </section>
  );
}
