import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { AddToCartBtnProps } from "../../interfaces";
import styles from "./AddToCart.module.css";
import whiteShoppingCart from "../../assets/images/white-shopping-cart.png";
import { useState } from "react";

export default function AddToCartBtn({
  item,
  quantity,
  path,
  size,
  buttonStyle,
}: AddToCartBtnProps) {
  const { addToCart } = useShoppingCartContext();
  const [isDisabled, setIsDisabled] = useState(false);
  const [btnText, setBtnText] = useState<string>("Dodaj do koszyka");
  function handleClick() {
    setIsDisabled(true);
    setBtnText("Dodaję..");
    addToCart(item, quantity, path, size);
    setTimeout(() => setBtnText("Dodano"), 300);
    setTimeout(() => setIsDisabled(false), 1000);
    setTimeout(() => setBtnText("Dodaj do koszyka"), 800);
  }
  return (
    <button
      data-testid="add-to-cart-btn"
      onClick={handleClick}
      className={`${styles.button} ${buttonStyle}`}
      disabled={isDisabled}
    >
      <p className={`${styles.btnText} ${isDisabled && styles.textAnimation}`}>
        {btnText}
      </p>
      <img
        className={`${styles.cartIcon} ${isDisabled && styles.cartAnimation}`}
        src={whiteShoppingCart}
        alt="Koszyk na zakupy"
      />
    </button>
  );
}
