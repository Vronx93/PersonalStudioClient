import styles from "./StudioHeroImg.module.css";
import heroImg from "../../assets/images/studio-hero.jpeg";

export default function StudioHeroImg() {
  return (
    <section className={styles.heroImgWrapper}>
      <img className={styles.img} src={heroImg} alt="Zdjęcie studia." />
    </section>
  );
}
