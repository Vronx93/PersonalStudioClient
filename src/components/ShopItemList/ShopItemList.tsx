import styles from "./ShopItemList.module.css";
import { shopItemInterface } from "../../interfaces";
import ShopListElement from "../ShopListElement/ShopListElement";
import { useMemo } from "react";

export default function ShopItemList({
  shopItems,
}: {
  shopItems: shopItemInterface[] | [];
}) {
  const renderElements = useMemo(() => {
    return shopItems.map((shopItem) => (
      <ShopListElement shopItem={shopItem} key={crypto.randomUUID()} />
    ));
  }, [shopItems]);

  return renderElements?.length > 0 ? (
    <ul className={styles.list}>{renderElements}</ul>
  ) : (
    <p className={styles.noProducts}>Produkty chwilowo niedostępne.</p>
  );
}
