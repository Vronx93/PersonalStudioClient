import Button from "../Button/Button";
import styles from "./Hero.module.css";
import heroImg from "../../assets/images/hero-img.jpeg";
import heroImgMobile from "../../assets/images/hero-img-mobile.jpeg";
import useWindowWidth from "../../hooks/useWindowWidth";
import wavesAnimation from "../../assets/images/waves-animation.png";
import scrollDownBtn from "../../assets/images/scroll-down-btn.png";

export default function Hero() {
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
    <section className={styles.heroSection}>
      <img
        className={styles.heroImg}
        src={width < 1120 ? heroImgMobile : heroImg}
        alt="Trener podczas ćwiczeń"
      />
      <img className={styles.waves} src={wavesAnimation} alt="" />
      <img className={styles.wavesLeft} src={wavesAnimation} alt="" />
      <div className={styles.backgroundGradient}></div>
      <div className={styles.textContentWrapper}>
        <h1>
          Przekraczaj swoje <span className={styles.fancyText}>granice</span>
        </h1>
        <p>Już od dziś możesz zmienić swoje życie.</p>
        <Button
          className={styles.btn}
          link="/shop/trainings"
          text="Współpracuj ze mną"
        />
      </div>
      <button onClick={handleClick} className={styles.scrollBtn}>
        Zjedź na dół <img src={scrollDownBtn} alt="Strzałka w dół." />
      </button>
    </section>
  );
}
