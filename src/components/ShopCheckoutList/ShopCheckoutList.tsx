import { useMemo } from "react";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import ShopCheckoutListElement from "../ShopCheckoutListElement/ShopCheckoutListElement";
import styles from "./ShopCheckoutList.module.css";
import ShopCheckoutOnlinePlanElement from "../ShopCheckoutOnlinePlanElement/ShopCheckoutOnlinePlanElement";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";
import arrowBack from "../../assets/images/arrow-back.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";
import { countTotalItemsInShopingCart } from "../../utils";

export default function ShopCheckoutList() {
  const shoppingCartContext = useShoppingCartContext();
  const { onlineTrainingPlan } = useShoppingCartTrainingPlansContext();
  const totalItems = countTotalItemsInShopingCart(
    shoppingCartContext.shoppingCart,
    onlineTrainingPlan ? true : false
  );
  const width = useWindowWidth();
  const navigate = useNavigate();
  const renderCheckoutItems = useMemo(() => {
    return shoppingCartContext.shoppingCart.map((item) => (
      <ShopCheckoutListElement key={crypto.randomUUID()} item={item} />
    ));
  }, [shoppingCartContext.shoppingCart.length]);

  if (width < 760) {
    return (
      <>
        {totalItems < 1 ? (
          <p className={styles.emptyCart}>Twój koszyk jest pusty</p>
        ) : (
          <section className={styles.container}>
            <header className={styles.header}>
              <img
                src={arrowBack}
                onClick={() => navigate(-1)}
                alt="Strzałka w lewo."
                className={styles.backBtn}
              />
              <h2 className={styles.cartTitle}>
                Koszyk (
                <span className={styles.numberOfItems}>{totalItems}</span>)
              </h2>
            </header>
            <ul className={styles.list}>
              {onlineTrainingPlan && (
                <ShopCheckoutOnlinePlanElement plan={onlineTrainingPlan} />
              )}
              {renderCheckoutItems}
            </ul>
          </section>
        )}
      </>
    );
  }

  return (
    <>
      {totalItems < 1 ? (
        <p className={styles.emptyCart}>Twój koszyk jest pusty</p>
      ) : (
        <section className={styles.container}>
          <header>
            <h2 className={styles.cartTitle}>
              Koszyk (<span className={styles.numberOfItems}>{totalItems}</span>
              )
            </h2>
          </header>
          <ul className={styles.list}>
            {onlineTrainingPlan && (
              <ShopCheckoutOnlinePlanElement plan={onlineTrainingPlan} />
            )}
            {renderCheckoutItems}
          </ul>
        </section>
      )}
    </>
  );
}
