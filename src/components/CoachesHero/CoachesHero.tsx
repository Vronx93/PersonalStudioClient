import styles from "./CoachesHero.module.css";
import heroImg from "../../assets/images/coaches-hero.jpeg";
import mobileHeroImg from "../../assets/images/coaches-hero.jpeg";
import scrollDownBtn from "../../assets/images/scroll-down-btn.png";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function CoachesHero() {
  const width = useWindowWidth();
  const vh = window.innerHeight * 0.9;
  const handleClick = () => {
    window.scrollBy({
      top: vh,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className={styles.container}>
      <img
        className={styles.img}
        src={width < 520 ? mobileHeroImg : heroImg}
        alt="Wspólne zdjęcie trenerów."
      />
      <article className={styles.textContent}>
        <h1 className={styles.title}>
          Poznaj team{" "}
          <span className={styles.fancyText}>#StudioKalisteniki</span>
        </h1>
        <p className={styles.text}>
          W naszym zespole znajdziesz wyłącznie pasjonatów i profesjonalistów{" "}
          {width > 600 && <br />}z dziedziny kalisteniki, z doświadczeniem oraz
          wiedzą zdobywaną podczas
          {width > 600 && <br />}
          treningów i ciągłego doskonalenia swoich umiejętności.
        </p>
      </article>
      <button onClick={handleClick} className={styles.btn}>
        Zjedź na dół <img src={scrollDownBtn} alt="Strzałka w dół." />
      </button>
    </section>
  );
}
