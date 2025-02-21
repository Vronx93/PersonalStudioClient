import { OnlinePlanPostOptionInterface } from "../../interfaces";
import styles from "./ShoppingCartDropdownListPlanElement.module.css";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { formatIntToPrice } from "../../utils";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";
import trash from "../../assets/images/trash.png";

export default function ShoppingCartDropdownListPlanElement({
  plan,
}: {
  plan: OnlinePlanPostOptionInterface;
}) {
  const onlineTrainingPlanInterface = useShoppingCartTrainingPlansContext();

  return (
    <li className={styles.container}>
      <input
        type="text"
        readOnly
        required
        hidden
        className={styles.hidden}
        name="onlineOptionName"
        id="onlineOptionName"
        value={plan.name}
      />
      <article className={styles.article}>
        <header className={styles.header}>
          <h3 className={styles.title}>Plan Treningowy ONLINE</h3>
          <DeleteIcon
            icon={trash}
            removeFunction={onlineTrainingPlanInterface.removePlanFromCart}
          />
        </header>
        <div className={styles.detailsWrapper}>
          <p className={styles.text}>{plan.name}</p>
          <div className={styles.itemPriceWrapper}>
            <p className={styles.text}>
              {formatIntToPrice(
                plan.price + plan.price * plan.taxInPercent * 0.01
              )}{" "}
              zł
            </p>
          </div>
        </div>
      </article>
    </li>
  );
}
