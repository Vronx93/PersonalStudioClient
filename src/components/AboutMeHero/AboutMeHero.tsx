import AboutMeText from "../AboutMeText/AboutMeText";
import styles from "./AboutMeHero.module.css";
import aboutMe from "../../aboutMe.json";
import aboutImg1 from "../../assets/images/about-me-1.jpeg";
import aboutImg2 from "../../assets/images/about-me-2.jpeg";
import aboutImg3 from "../../assets/images/about-me-3.jpeg";
import aboutImg4 from "../../assets/images/about-me-4.jpeg";
import aboutImg5 from "../../assets/images/about-me-5.jpeg";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function AboutMeHero() {
  const width = useWindowWidth();

  if (width < 760) {
    return (
      <section className={styles.container}>
        <img className={styles.image} src={aboutImg1} alt="Trener główny." />
        <div className={styles.textContent}>
          <AboutMeText title={aboutMe.title} text={aboutMe.firstParagraph} />
          <AboutMeText text={aboutMe.secondParagraph} />
        </div>
        <img className={styles.image} src={aboutImg2} alt="Trener główny." />
        <div className={styles.textContent}>
          <AboutMeText text={aboutMe.thirdParagraph} />
          <AboutMeText text={aboutMe.fourthParagraph} />
        </div>
        <div className={styles.bottomImgWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={aboutImg3}
              alt="Trener główny."
              loading="lazy"
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={aboutImg4}
              alt="Trener główny."
              loading="lazy"
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={aboutImg5}
              alt="Trener główny."
              loading="lazy"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.textContent}>
          <AboutMeText title={aboutMe.title} text={aboutMe.firstParagraph} />
          <AboutMeText text={aboutMe.secondParagraph} />
        </div>
        <div className={styles.topImgWrapper}>
          <img className={styles.image} src={aboutImg1} alt="Trener główny." />
          <img className={styles.image2} src={aboutImg2} alt="Trener główny." />
        </div>
      </div>
      <div className={styles.bottomDiv}>
        <div className={styles.bottomImgWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={aboutImg3}
              alt="Trener główny."
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={aboutImg4}
              alt="Trener główny."
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={aboutImg5}
              alt="Trener główny."
            />
          </div>
        </div>
        <div className={styles.textContent}>
          <AboutMeText text={aboutMe.thirdParagraph} />
          <AboutMeText text={aboutMe.fourthParagraph} />
        </div>
      </div>
    </section>
  );
}
