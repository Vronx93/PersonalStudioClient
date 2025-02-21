import styles from "./ShoppingCart.module.css";
import shoppingCartImg from "../../assets/images/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingCartDropdown from "../ShoppingCartDropdown/ShoppingCartDropdown";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";
import { countTotalItemsInShopingCart } from "../../utils";
import closeImg from "../../assets/images/close.png";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function ShoppingCart() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const shoppingCart = useShoppingCartContext();
  const onlinePlanOptions = useShoppingCartTrainingPlansContext();
  const totalItemsInCart = countTotalItemsInShopingCart(
    shoppingCart.shoppingCart,
    onlinePlanOptions.onlineTrainingPlan ? true : false
  );
  const width = useWindowWidth();

  return (
    <>
      {width < 401 ? (
        <Link to={"/checkout"} className={styles.iconWrapper}>
          <img className={styles.cart} src={shoppingCartImg} alt="Koszyk." />
          {totalItemsInCart > 0 && (
            <div className={styles.numberOfItems}>{totalItemsInCart}</div>
          )}
        </Link>
      ) : (
        <div
          className={`${styles.container} ${
            isDropdownOpen && styles.activeBackground
          }`}
        >
          {isDropdownOpen ? (
            <img
              className={styles.closeImg}
              onClick={() => setIsDropdownOpen(false)}
              src={closeImg}
              alt="Krzyżyk zamykający menu sklepu."
            />
          ) : (
            <div
              className={styles.iconWrapper}
              onClick={() => setIsDropdownOpen(true)}
            >
              <img className={styles.cart} src={shoppingCartImg} alt="Koszyk" />
              {totalItemsInCart > 0 && (
                <div className={styles.numberOfItems}>{totalItemsInCart}</div>
              )}
            </div>
          )}
          {isDropdownOpen && (
            <ShoppingCartDropdown
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          )}
        </div>
      )}
    </>
  );
}
