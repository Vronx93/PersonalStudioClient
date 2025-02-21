import { useQueryClient } from "@tanstack/react-query";
import { getCoaches } from "../../api/api";
import usePrefetchImagesFromItemsList from "../../hooks/usePrefetchImagesFromItemsList";
import Button from "../Button/Button";
import ListInsideTrainingPlan from "../ListInsideTrainingPlan/ListInsideTrainingPlan";
import styles from "./TrainingPackageLive.module.css";

export default function TrainingPackageLive() {
  const queryClient = useQueryClient();
  const listItems = [
    {
      title: "🤝 Treningi indywidualne w studiu:",
      text: "Możliwość uczestniczenia w sesjach treningowych bezpośrednio w studiu treningowym trenera, gdzie każdy ruch jest monitorowany i korygowany na bieżąco.",
    },
    {
      title: "🏢 Dostęp do studia treningowego: ",
      text: "Skorzystaj z wysokiej jakości sprzętu i przestrzeni treningowej.",
    },
    {
      title: "📈 Bezpośrednia ocena postępów:",
      text: "Osobiste spotkania z trenerem, które pozwalają na dokładniejszą analizę i dostosowanie planu treningowego.",
    },
  ];
  return (
    <li
      className={styles.container}
      onMouseEnter={() =>
        usePrefetchImagesFromItemsList({
          queryClient: queryClient,
          queryKey: ["coachesList"],
          queryFn: getCoaches,
          staleTimeInMinutes: 10,
        })
      }
      onTouchStart={() =>
        usePrefetchImagesFromItemsList({
          queryClient: queryClient,
          queryKey: ["coachesList"],
          queryFn: getCoaches,
          staleTimeInMinutes: 10,
        })
      }
    >
      <article className={styles.article}>
        <header className={styles.header}>
          <h2 className={styles.title}>Konsultacja Indywidualna</h2>
          <h3 className={styles.title2}>+ Treningi Indywidualne w Studio</h3>
        </header>
        <p className={styles.text}>
          Idealny dla: Osób poszukujących osobistego kontaktu i treningów pod
          okiem trenera, a także korzyści płynących z treningu online.
        </p>
        <span className={`${styles.fancyText} ${styles.fancy}`}>
          Zawiera to, co w Plan Treningowy Online!
        </span>
        <div className={styles.listWrapper}>
          <ListInsideTrainingPlan
            title={"Rozszerzony pakiet o"}
            listItems={listItems}
          />
        </div>
      </article>
      <Button
        link="/coaches"
        text="Wybierz Swojego Trenera"
        arrow
        className={styles.btn}
      />
    </li>
  );
}
