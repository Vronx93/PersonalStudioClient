// import { ChangeEvent, useState } from "react"
import styles from "./ShopItem.module.css";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { shopItemInterface } from "../../interfaces";
import { useLocation } from "react-router-dom";
import ProductImagesList from "../ProductImagesList/ProductImagesList";
import SmallDropdownList from "../SmallDropdownList/SmallDropdownList";
import { renderSizeOptions } from "../../utils";
import { useState } from "react";
import SizesTable from "../SizesTable/SizesTable";
// import useWindowWidth from "../../hooks/useWindowWidth";
// import arrowLeft from "../../assets/images/arrow-back.png";

interface ShopItemProps {
  item: shopItemInterface;
}

export default function ShopItem({ item }: ShopItemProps) {
  // const navigate = useNavigate();
  // const width = useWindowWidth();
  const path = useLocation().pathname;
  const defaultSelectValue = Object.keys(item.availableSizes)[0];
  const [size, setSize] = useState<string>(defaultSelectValue);
  const renderSelectOptions =
    item.availableSizes &&
    renderSizeOptions({
      optionsDictionary: item.availableSizes,
      optionStyles: styles.optionStyles,
    });

  return (
    <section className={styles.container}>
      <ProductImagesList images={item.imageDetails} />
      <div className={styles.textContentWrapper}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.shortDescription}>{item.shortDescription}</p>
        <h2 className={styles.price} data-testid="price">
          {item.price.toFixed(2).replace(".", ",")}{" "}
          <span className={styles.currency}>zł</span>
        </h2>
        {renderSelectOptions.length > 0 && (
          <div className={styles.sizesWrapper}>
            <div className={styles.spaceBetween}>
              <label className={styles.sizeLabel} htmlFor="size">
                Wybierz rozmiar
              </label>
              <SizesTable />
            </div>
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
        <AddToCartBtn
          item={item}
          quantity={1}
          path={path}
          size={size}
          buttonStyle={styles.btn}
        />
        <p className={styles.description}>{item.description}</p>
        {/* product details placeholder */}
        <SmallDropdownList
          titleStyle={styles.dropdownListTitle}
          isOpen={true}
          title={"Szczegóły produktu"}
          listItems={[
            "100% Poliester",
            "Można prać w pralce",
            "Produkt importowany",
          ]}
        />

        {/* delivery options placeholder */}
        <SmallDropdownList
          titleStyle={styles.dropdownListTitle}
          isOpen={true}
          title={"Sposoby dostawy"}
          listItems={["InPost", "PocztaPolska", "Odbiór osobisty"]}
        />

        <SmallDropdownList
          titleStyle={styles.dropdownListTitle}
          isOpen={true}
          title={"Dostawy i zwroty"}
          listStyle={styles.noStyleList}
          listItems={[
            "Zamówione produkty można zwrócić bezpłatnie w ciągu 30 dni.",
          ]}
        />
      </div>
    </section>
  );
}
