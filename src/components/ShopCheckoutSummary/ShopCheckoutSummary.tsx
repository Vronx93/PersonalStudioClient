import styles from "./ShopCheckoutSummary.module.css";
import rightArrow from "../../assets/images/arrow-right-white.png";
import clock from "../../assets/images/clock.png";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { formatIntToPrice } from "../../utils";
import { Link, useNavigation } from "react-router-dom";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";
import useWindowWidth from "../../hooks/useWindowWidth";
import arrow from "../../assets/images/full-arrow-right.png";
import arrowDown from "../../assets/images/arrow-down.png";
import { useState } from "react";

export default function ShopCheckoutSummary() {
  const shoppingCartInterface = useShoppingCartContext();
  const { onlineTrainingPlan } = useShoppingCartTrainingPlansContext();
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  const width = useWindowWidth();
  const tabletWidth = width < 1140;
  const deliveryPrice =
    shoppingCartInterface.shoppingCart.length < 1 ? 0 : 13.99;
  const totalPrice = onlineTrainingPlan
    ? formatIntToPrice(
        shoppingCartInterface.countTotalPrice() +
          onlineTrainingPlan.price * onlineTrainingPlan.taxInPercent * 0.01 +
          onlineTrainingPlan.price
      )
    : formatIntToPrice(shoppingCartInterface.countTotalPrice());
  const navigation = useNavigation();

  return (
    <article className={styles.container}>
      {tabletWidth ? (
        <header
          className={styles.mobileHeader}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <h2 className={styles.title}>Podsumowanie</h2>
          <img
            src={arrowDown}
            className={isMobileOpen ? styles.rotateArrowUp : styles.arrowUp}
            alt="Strzałka zwiń/rozwiń."
          />
        </header>
      ) : (
        <header>
          <h2 className={styles.title}>Podsumowanie</h2>
        </header>
      )}

      {isMobileOpen && (
        <ul className={styles.priceDetailsWrapper}>
          <li className={styles.listItem}>
            <p className={styles.text}>Produkty</p>
            <div>
              <span className={styles.smallPrice}>
                {formatIntToPrice(parseInt(totalPrice))}
              </span>
              <span className={styles.smallCurrency}> zł</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <p className={styles.text}>Dostawa</p>
            <div>
              <span className={styles.smallPrice}>
                {formatIntToPrice(deliveryPrice)}
              </span>
              <span className={styles.smallCurrency}> zł</span>
            </div>
          </li>
        </ul>
      )}
      <div className={styles.totalPriceWrapper}>
        <h3 className={styles.title}>Do zapłaty</h3>
        <div>
          <span className={styles.totalPrice}>
            {formatIntToPrice(parseFloat(totalPrice) + deliveryPrice)}
          </span>
          <span className={styles.bigCurrency}> zł</span>
        </div>
      </div>
      {tabletWidth && (
        <Link className={styles.backToShopBtn} to={"/shop/trainings"}>
          <img
            className={styles.backArrow}
            src={arrow}
            alt="Strzałka w lewo."
          />
          Wróć do sklepu
        </Link>
      )}
      <button
        className={styles.btn}
        type="submit"
        disabled={navigation.state === "submitting" || parseInt(totalPrice) < 1}
      >
        {navigation.state === "submitting"
          ? "Przekierowanie do płatności"
          : "Zapłać"}
        <img src={rightArrow} alt="Strzałka w prawo." />
      </button>
      <div className={styles.bottomTextWrapper}>
        <img className={styles.clockImg} src={clock} alt="Ikona zegara." />
        <p className={styles.greyText}>
          Gdy złożysz zamówienie, skontaktujemy się z Tobą w celu rozpoczęcia
          współpracy :)
        </p>
      </div>
    </article>
  );
}
