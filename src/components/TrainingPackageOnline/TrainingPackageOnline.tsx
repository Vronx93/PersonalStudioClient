import { useState } from "react";
import { OnlinePlanGetOptionInterface } from "../../interfaces";
import { formatIntToPrice } from "../../utils";
import Button from "../Button/Button";
import ListInsideTrainingPlan from "../ListInsideTrainingPlan/ListInsideTrainingPlan";
import styles from "./TrainingPackageOnline.module.css";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";

export default function TrainingPackageOnline({
  options,
}: {
  options: OnlinePlanGetOptionInterface[];
}) {
  const [currentOption, setCurrentOption] =
    useState<OnlinePlanGetOptionInterface>(options[0]);
  const ShoppingCartTrainingPlanInterface =
    useShoppingCartTrainingPlansContext();
  if (options.length < 1) {
    return <></>;
  }
  const renderOptions = options.map((option) => (
    <option key={crypto.randomUUID()} value={option.name}>
      {option.name}
    </option>
  ));

  function handleOptionChange(event: any) {
    setCurrentOption(
      options.find(
        (option) => option.name === event.target.value
      ) as OnlinePlanGetOptionInterface
    );
  }

  const listItems = [
    {
      title: "📱 Nieograniczony kontakt przez WhatsApp:",
      text: "Bezpośrednia komunikacja z trenerem, dostosowywanie planów i motywacja w zasięgu ręki.",
    },
    {
      title: "🔄 Spersonalizowany plan treningowy:",
      text: "Indywidualnie dopasowany do Twoich celów i możliwości, z regularnymi aktualizacjami",
    },
    {
      title: "📊 Monitoring postępów:",
      text: "Analiza wyników i dostosowywanie planu w odpowiedzi na Twój rozwój",
    },
    {
      title: "️‍🏋️‍♂️ Instrukcje wideo:",
      text: "Dostęp do biblioteki video z ćwiczeniami, zapewniających prawidłową technikę i maksymalne efekty.",
    },
  ];

  return (
    <li>
      <article className={styles.article}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Plan Treningowy <span className={styles.orange}>ONLINE</span>
          </h2>
          <p className={styles.text}>
            Idealny dla: Osób szukających elastyczności i wsparcia w treningu
            zdalnym, z dowolnego miejsca na świecie.
          </p>
        </header>
        <ListInsideTrainingPlan title={"Zawiera"} listItems={listItems} />
        <div className={styles.priceWrapper}>
          <p className={styles.text}>
            Cena:{" "}
            <span className={styles.price}>
              {formatIntToPrice(currentOption.price / currentOption.monthCount)}
            </span>
            <span className={styles.currency}> zł</span>
            <span className={styles.month}> (+ VAT) / miesiąc</span>
          </p>
        </div>
        <select
          value={currentOption.name}
          className={styles.select}
          name="onlinePlanOptionName"
          id="onlinePlanOptionName"
          onChange={(event) => handleOptionChange(event)}
        >
          {renderOptions}
        </select>
      </article>
      <Button
        link="/checkout"
        onClick={() =>
          ShoppingCartTrainingPlanInterface.addPlanToCart(currentOption)
        }
        text={"Wybierz Plan Online"}
        className={styles.btn}
        arrow
      />
    </li>
  );
}
