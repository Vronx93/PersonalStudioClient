import { useState } from "react";
import { shoppingCartItemInterface } from "../../interfaces";
import Img from "../Img/Img";
import styles from "./ShopCheckoutListElement.module.css";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { formatIntToPrice } from "../../utils";
import useWindowWidth from "../../hooks/useWindowWidth";
import trash from "../../assets/images/trash.png";

export default function ShopCheckoutListElement({
  item,
}: {
  item: shoppingCartItemInterface;
}) {
  const width = useWindowWidth();
  const shoppingCartInterface = useShoppingCartContext();
  const [quantity, setQuantity] = useState(item.quantity);
  const primaryImg =
    item.imageDetails.find((image) => image.isPrimary === true) || null;

  if (!primaryImg) {
    return <h2>Przedmiot powinien mieć ustawione zdjęcie główne.</h2>;
  }

  if (width < 760) {
    return (
      <li className={styles.container}>
        <DeleteIcon
          customStyles={styles.delete}
          icon={trash}
          removeFunction={() =>
            shoppingCartInterface.removeFromCart(item.id, item.size)
          }
        />
        <Img
          className={styles.image}
          imgId={primaryImg && primaryImg.imageId}
          alt={`${item.name}`}
        />
        <input
          className={styles.hidden}
          type="text"
          hidden
          readOnly
          name="product"
          id="product"
          value={[item.id, quantity.toString(), item.size ? item.size : ""]}
        />
        <article className={styles.article}>
          <header>
            <h3 className={styles.title}>{item.name}</h3>
          </header>

          <div className={styles.quantityWrapper}>
            <label className={styles.workSans} htmlFor="quantity">
              Ilość:{" "}
            </label>
            <input
              required
              type="number"
              value={quantity}
              name="quantity"
              id={`${item.id},${item.size}`}
              min={1}
              onChange={(event: any) =>
                shoppingCartInterface.handleQuantityChange(
                  event,
                  item.id,
                  setQuantity,
                  item.size
                )
              }
              className={styles.input}
            />
          </div>
          <div className={styles.productDetailsWrapper}>
            {item.size && <p className={styles.workSans}>{item.size}</p>}
            <div className={styles.itemPriceWrapper}>
              <span className={styles.price}>
                {formatIntToPrice(item.price)}
              </span>
              <span className={styles.currency}> zł</span>
            </div>
          </div>
        </article>
      </li>
    );
  }

  return (
    <li className={styles.container}>
      <Img
        className={styles.image}
        imgId={primaryImg && primaryImg.imageId}
        alt={`${item.name}`}
      />
      <input
        className={styles.hidden}
        type="text"
        hidden
        readOnly
        name="product"
        id="product"
        value={[item.id, quantity.toString(), item.size ? item.size : ""]}
      />
      <article className={styles.article}>
        <header>
          <h3 className={styles.title}>
            {item.name}{" "}
            <div>
              <span className={styles.price}>
                {formatIntToPrice(item.price)}
              </span>
              <span className={styles.currency}> zł</span>
            </div>
          </h3>
        </header>
        {item.size && (
          <p className={styles.workSans}>
            Rozmiar: <span className={styles.bold}>{item.size}</span>
          </p>
        )}
        <div className={styles.quantityWrapper}>
          <label className={styles.workSans} htmlFor="quantity">
            Ilość:{" "}
          </label>
          <input
            required
            type="number"
            value={quantity}
            name="quantity"
            id={`${item.id},${item.size}`}
            min={1}
            onChange={(event: any) =>
              shoppingCartInterface.handleQuantityChange(
                event,
                item.id,
                setQuantity,
                item.size
              )
            }
            className={styles.input}
          />
        </div>
        <DeleteIcon
          removeFunction={() =>
            shoppingCartInterface.removeFromCart(item.id, item.size)
          }
        />
      </article>
    </li>
  );
}
