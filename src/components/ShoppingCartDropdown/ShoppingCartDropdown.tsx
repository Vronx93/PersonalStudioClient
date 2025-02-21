import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";
import { useRef, useEffect } from "react";
import styles from "./ShoppingCartDropdown.module.css";
import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";
import { countTotalItemsInShopingCart, formatIntToPrice } from "../../utils";
import Button from "../Button/Button";

export default function ShoppingCartDropdown({
  isDropdownOpen,
  setIsDropdownOpen,
}: {
  isDropdownOpen: boolean;
  setIsDropdownOpen: Function;
}) {
  const shoppingCartContext = useShoppingCartContext();
  const { onlineTrainingPlan } = useShoppingCartTrainingPlansContext();
  const totalItemsInCart = countTotalItemsInShopingCart(
    shoppingCartContext.shoppingCart,
    onlineTrainingPlan ? true : false
  );
  const totalPrice = onlineTrainingPlan
    ? formatIntToPrice(
        shoppingCartContext.countTotalPrice() +
          onlineTrainingPlan.price * onlineTrainingPlan.taxInPercent * 0.01 +
          onlineTrainingPlan.price
      )
    : formatIntToPrice(shoppingCartContext.countTotalPrice());

  // close on click outside start
  const shoppingCartDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", closeDropdownOnOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
    };
  }, [shoppingCartDropdownRef, closeDropdownOnOutsideClick]);

  function closeDropdownOnOutsideClick(event: any) {
    if (
      isDropdownOpen &&
      !shoppingCartDropdownRef.current?.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  }
  // close on click outside end

  return (
    <div ref={shoppingCartDropdownRef} className={styles.container}>
      <h2 className={styles.cartTitle}>
        Koszyk (<span className={styles.numberOfItems}>{totalItemsInCart}</span>
        )
      </h2>
      <ShoppingCartList />
      <div className={styles.totalPriceWrapper}>
        <h3>Do zapłaty</h3>
        <p>
          <span className={styles.orange}>{totalPrice}</span> zł
        </p>
      </div>
      <Button
        onClick={() => setIsDropdownOpen(false)}
        link={"/checkout"}
        text={"Do kasy"}
        className={styles.btn}
        arrow
      />
    </div>
  );
}
