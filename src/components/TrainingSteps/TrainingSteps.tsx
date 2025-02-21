import styles from "./TrainingSteps.module.css";
import TrainingStepElement from "../TrainingStepElement/TrainingStepElement";
import Button from "../Button/Button";
import orangeShoppingCartImg from "../../assets/images/orange-shopping-cart.png";
import orangeContactImg from "../../assets/images/orange-contact.png";
import orangeWeightImg from "../../assets/images/orange-weight.png";
import orangeShieldImg from "../../assets/images/orange-shield.png";
import tricepsBackgroundImg from "../../assets/images/triceps.png";

export default function TrainingSteps() {
  const steps = [
    {
      title: "Zakup",
      imgUrl: orangeShoppingCartImg,
    },
    {
      title: "Kontakt i wywiad",
      imgUrl: orangeContactImg,
    },
    {
      title: "Stworzenie planu",
      imgUrl: orangeWeightImg,
    },
    {
      title: "Praca i wsparcie",
      imgUrl: orangeShieldImg,
    },
  ];

  const renderElements = steps.map((step) => (
    <TrainingStepElement
      key={step.title}
      title={step.title}
      icon={step.imgUrl}
    />
  ));

  return (
    <section className={styles.container}>
      <img className={styles.triceps} src={tricepsBackgroundImg} alt="" />
      <h2 className={styles.title}>
        Jak wyglądają <span className={styles.fancyText}>początki</span> naszej
        przygody?
      </h2>
      <p className={styles.text}>
        Zobacz, jakie proste kroki prowadzą do rozpoczęcia transformacyjnej{" "}
        <br />
        współpracy z trenerem personalnym.
      </p>
      <ul className={styles.list}>{renderElements}</ul>
      <Button
        link={"/shop/trainings"}
        text={"Dowiedz się więcej"}
        className={styles.btn}
      />
    </section>
  );
}
