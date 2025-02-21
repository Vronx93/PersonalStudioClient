import styles from "./BenefitList.module.css";
import BenefitElement from "../BenefitElement/BenefitElement";
import Button from "../Button/Button";
import weight2Background from "../../assets/images/weight2-background.png";
import coachImg from "../../assets/images/coach-img.jpeg";
import useWindowWidth from "../../hooks/useWindowWidth";
import SmallDropdownList from "../SmallDropdownList/SmallDropdownList";

export interface Benefit {
  title: string;
  text: string;
}

export default function BenefitList({ benefits }: { benefits: Benefit[] }) {
  const width = useWindowWidth();
  const benefitElementsForSmallDevice = benefits.map((benefit) => (
    <SmallDropdownList
      title={benefit.title}
      listItems={[benefit.text]}
      listStyle={styles.smallDeviceBenefitDropdown}
      titleStyle={styles.smallDeviceBenefitTitle}
      orangeArrow
      key={crypto.randomUUID()}
    />
  ));

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.weightBackground}
          src={weight2Background}
          alt=""
        />
        <h2 className={styles.title}>
          Poznaj <span className={styles.fancyText}>korzyści</span> współpracy
          ze mną!
        </h2>
        <p>
          Poznaj, jak wygląda efektywna współpraca z trenerem personalnym,{" "}
          <br />
          która przekształca Twoje cele w realne wyniki poprzez <br />
          indywidualne podejście i zaangażowanie.
        </p>
      </header>
      {width < 1119 ? (
        <div className={styles.benefitListForSmallDevice}>
          {benefitElementsForSmallDevice}
        </div>
      ) : (
        <div className={styles.benefitsContainer}>
          {/* <img className={styles.coachBackground} src={coachBackgound} alt="" /> */}
          <img className={styles.coachImg} src={coachImg} alt="Trener " />
          <ul className={styles.listElements}>
            <BenefitElement benefit={benefits[0]} key={crypto.randomUUID()} />
            <BenefitElement benefit={benefits[1]} key={crypto.randomUUID()} />
          </ul>
          <ul className={styles.listElements}>
            <BenefitElement benefit={benefits[2]} key={crypto.randomUUID()} />
            <BenefitElement benefit={benefits[3]} key={crypto.randomUUID()} />
          </ul>
        </div>
      )}
      <Button
        className={styles.btn}
        link={"/shop/trainings"}
        text={"Współpracuj ze mną"}
      />
    </article>
  );
}
