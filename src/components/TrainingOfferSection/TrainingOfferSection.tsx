import Button from "../Button/Button";
import styles from "./TrainingOfferSection.module.css";
import waves2Img from "../../assets/images/waves2.png";
import handstandImg from "../../assets/images/handstand.png";
import whatsAppImg from "../../assets/images/whats-app.png";
import rightBackground from "../../assets/images/wavy-shape-right-box.png";
import bodyImg from "../../assets/images/body.png";
import bottomWaves from "../../assets/images/waves3.png";
import bottomMobileBackground from "../../assets/images/homepage-offer-bottom-background.png";
import mobileTopWaves from "../../assets/images/offer-top-waves.png";
import mobileBottomWaves from "../../assets/images/mobile-offer-bottom-waves.png";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function TrainingOfferSection() {
  const width = useWindowWidth();

  if (width < 820) {
    return (
      <section className={styles.container}>
        {/* start absolute images */}
        <img className={styles.topWaves} src={mobileTopWaves} alt="" />
        <img className={styles.bottomWaves} src={mobileBottomWaves} alt="" />
        {/* end absolute images */}
        <article className={styles.topArticle}>
          {/* start absolute images */}
          <img className={styles.handstand} src={handstandImg} alt="" />
          {/* end absolute images */}
          <div className={styles.textContentTopContainer}>
            <h2 className={styles.title}>
              Współpraca Online
              <img className={styles.whatsApp} src={whatsAppImg} alt="" />
            </h2>

            <p className={styles.text}>
              Oferuje spersonalizowane plany treningowe i ciągłe wsparcie
              motywacyjne przez WhatsApp, niezależnie od lokalizacji.
            </p>
          </div>
          <Button
            link={"/shop/trainings"}
            text={"Dowiedz się o Współpracy"}
            className={styles.btn}
          />
        </article>
        <article className={styles.bottomArticle}>
          {/* absolute img start */}
          <img className={styles.body} src={bodyImg} alt="" />
          <img
            className={styles.bottomMobileBackground}
            src={bottomMobileBackground}
            alt=""
          />
          {/* images end */}
          <header>
            <h2 className={styles.title}>Konsultacje w Studio</h2>
            <h3 className={styles.fancyText}>+ Treningi personalne</h3>
          </header>
          <p>
            Trenuj pod okiem doświadczonych osób w moim <br />
            studiu. Indywidualnie dostosowane programy, <br />
            które rozwijają siłę oraz kondycję.
          </p>
          <Button
            link={"/shop/trainings"}
            text={"Dowiedz się o Treningach"}
            className={styles.btn}
          />
        </article>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <img className={styles.topWaves} src={waves2Img} alt="" />
      <div className={styles.contentWrapper}>
        <div className={styles.onlineWrapper}>
          <img className={styles.handstand} src={handstandImg} alt="" />
          <img className={styles.whatsApp} src={whatsAppImg} alt="" />
          <h2 className={styles.title}>Współpraca Online</h2>
          <p>
            Oferuje spersonalizowane plany treningowe <br />
            i ciągłe wsparcie motywacyjne przez WhatsApp, <br />
            niezależnie od lokalizacji.
          </p>
          <Button link={"/shop/trainings"} text={"Dowiedz się o Współpracy"} />
        </div>
        <div className={styles.liveWrapper}>
          <img
            className={styles.rightBackground}
            src={rightBackground}
            alt=""
          />
          <img className={styles.body} src={bodyImg} alt="" />
          <h2 className={styles.title}>Konsultacje w Studio</h2>
          <h3 className={styles.fancyText}>+ Treningi personalne</h3>
          <p>
            Trenuj pod okiem doświadczonych osób w moim <br />
            studiu. Indywidualnie dostosowane programy, <br />
            które rozwijają siłę oraz kondycję.
          </p>
          <Button link={"/shop/trainings"} text={"Dowiedz się o Treningach"} />
        </div>
      </div>
      <img className={styles.bottomWaves} src={bottomWaves} alt="" />
    </section>
  );
}
