import { shopItemInterface } from "../../interfaces";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import styles from "./ShopListElement.module.css";
import Img from "../Img/Img";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/full-arrow-right.png";
import { formatIntToPrice, renderSizeOptions } from "../../utils";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getShopItem } from "../../api/api";
import usePrefetchImagesFromSingleItem from "../../hooks/usePrefetchImagesFromSingleItem";

export default function ShopListElement({
  shopItem,
}: {
  shopItem: shopItemInterface;
}) {
  const queryClient = useQueryClient();
  const defaultSelectValue = Object.keys(shopItem.availableSizes)[0];
  const [size, setSize] = useState<string>(defaultSelectValue);
  const renderSelectOptions =
    shopItem.availableSizes &&
    renderSizeOptions({ optionsDictionary: shopItem.availableSizes });
  const primaryImg = shopItem.imageDetails.find(
    (img) => img.isPrimary === true
  );

  return (
    <li
      className={styles.container}
      onMouseEnter={() =>
        usePrefetchImagesFromSingleItem({
          queryClient,
          queryKey: ["products", shopItem.id],
          queryFn: () => getShopItem(shopItem.id),
          staleTimeInMinutes: 10,
        })
      }
    >
      <div className={styles.primaryImgWrapper}>
        {primaryImg && (
          <Img
            imgId={primaryImg.imageId}
            className={styles.primaryImg}
            alt={`Zdjęcie przedstawiające przedmiot możliwy do zakupu: ${shopItem.name}`}
          />
        )}
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.topContentWrapper}>
          <h2 className={styles.title}>{shopItem.name}</h2>
          <p className={styles.shortDescription}>{shopItem.shortDescription}</p>
          {renderSelectOptions.length > 0 && (
            <div className={styles.selectSizeWrapper}>
              <label htmlFor="size" className={styles.priceText}>
                Rozmiar:
              </label>
              <select
                className={styles.select}
                name="size"
                id="size"
                value={size}
                onChange={(event) => setSize(event.target.value)}
              >
                {renderSelectOptions}
              </select>
            </div>
          )}
        </div>
        <div className={styles.pricesWrapper}>
          <div className={`${styles.spaceBetween}`}>
            <p className={styles.priceText}>Cena regularna:</p>
            <div>
              <span className={styles.price}>
                {formatIntToPrice(shopItem.price)}{" "}
              </span>
              <span className={styles.currency}>zł</span>
            </div>
          </div>
          <div className={`${styles.grey} ${styles.spaceBetween}`}>
            <p className={`${styles.priceText} ${styles.grey}`}>Z dostawą:</p>
            <div>
              <span className={styles.bold}>
                {formatIntToPrice(shopItem.price + 13.99)}{" "}
              </span>
              <span className={`${styles.currency} ${styles.smallText}`}>
                zł
              </span>
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <Link
            className={styles.productLink}
            to={`/shop/products/${shopItem.id}`}
            state={shopItem}
          >
            Zobacz produkt <img src={rightArrow} alt="Strzałka w prawo" />
          </Link>
          <AddToCartBtn
            item={shopItem}
            quantity={1}
            path={`/shop/products/${shopItem.id}`}
            size={size}
          />
        </div>
      </div>
    </li>
  );
}
