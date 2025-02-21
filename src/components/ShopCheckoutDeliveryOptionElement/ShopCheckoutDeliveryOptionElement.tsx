import useWindowWidth from "../../hooks/useWindowWidth";
import { formatIntToPrice } from "../../utils";
import styles from "./ShopCheckoutDeliveryOptionElement.module.css";

interface ShopDeliveryOptionInterface {
  title: string;
  id: string;
  image: string;
  price: number;
}

export default function ShopCheckoutDeliveryOptionElement({
  option,
  isActive,
  handleClick,
}: {
  option: ShopDeliveryOptionInterface;
  isActive: boolean;
  handleClick: Function;
}) {
  const width = useWindowWidth();
  const mobileWidth = width < 490;

  return (
    <li className={styles.container} onClick={() => handleClick(option.id)}>
      {/* if option is active create invisible input field for that option */}
      {isActive && (
        <input
          name="deliveryOption"
          id="deliveryOption"
          type="text"
          hidden
          value={option.id}
          readOnly
          className={styles.hidden}
        />
      )}
      <div className={styles.leftWrapper}>
        <div className={styles.radioBox}>
          {isActive && <div className={styles.radioChecked}></div>}
        </div>
        <h5 className={styles.text}>{option.title}</h5>
      </div>
      <div className={styles.rightWrapper}>
        {!mobileWidth && (
          <img
            className={styles.image}
            src={option.image}
            alt="Ikona przedstawiająca formę wysyłki"
          />
        )}
        <p className={styles.text}>{formatIntToPrice(option.price)} zł</p>
      </div>
    </li>
  );
}
