import { OnlinePlanPostOptionInterface } from "../../interfaces";
import styles from "./ShopCheckoutOnlinePlanElement.module.css";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { formatIntToPrice } from "../../utils";
import mobileImg from "../../assets/images/mobile.png";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";
import trash from "../../assets/images/trash.png";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function ShopCheckoutOnlinePlanElement({
  plan,
}: {
  plan: OnlinePlanPostOptionInterface;
}) {
  const onlineTrainingPlanInterface = useShoppingCartTrainingPlansContext();
  const width = useWindowWidth();

  if (width < 760) {
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
        <DeleteIcon
          icon={trash}
          removeFunction={onlineTrainingPlanInterface.removePlanFromCart}
        />
        <img className={styles.image} src={mobileImg} alt="Smartfon." />
        <article className={styles.article}>
          <header>
            <h3 className={styles.title}>Plan Treningowy ONLINE</h3>
          </header>
          <p className={styles.workSans}>{plan.name}</p>
          <div className={styles.itemPriceWrapper}>
            <span className={styles.price}>
              {formatIntToPrice(
                plan.price + plan.price * plan.taxInPercent * 0.01
              )}
            </span>
            <span className={styles.currency}> zł</span>
          </div>
        </article>
      </li>
    );
  }

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
      <img className={styles.image} src={mobileImg} alt="Smartfon." />
      <article className={styles.article}>
        <header>
          <h3 className={styles.title}>
            Plan Treningowy ONLINE
            <div>
              <span className={styles.price}>
                {formatIntToPrice(
                  plan.price + plan.price * plan.taxInPercent * 0.01
                )}
              </span>
              <span className={styles.currency}> zł</span>
            </div>
          </h3>
        </header>
        <p className={styles.workSans}>
          Pakiet: <span className={styles.bold}>{plan.name}</span>
        </p>
        <DeleteIcon
          removeFunction={onlineTrainingPlanInterface.removePlanFromCart}
        />
      </article>
    </li>
  );
}
