import styles from "./ShopCheckoutDeliveryOptionsList.module.css";
import deliveryCar from "../../assets/images/delivery-car.png";
import inpostImg from "../../assets/images/inpost.png";
import ShopCheckoutDeliveryOptionElement from "../ShopCheckoutDeliveryOptionElement/ShopCheckoutDeliveryOptionElement";
import { useState } from "react";

export default function ShopCheckoutDeliveryOptionsList() {
  const [activeOption, setActiveOption] = useState<string>("");
  const deliveryOptions = [
    {
      title: "Kurier (odbiór w domu)",
      id: "Kurier",
      image: deliveryCar,
      price: 13.99,
    },
    {
      title: "InPost Paczkomat® 24/7",
      id: "Paczkomat",
      image: inpostImg,
      price: 13.99,
    },
  ];
  const renderOptions = deliveryOptions.map((option) => (
    <ShopCheckoutDeliveryOptionElement
      key={crypto.randomUUID()}
      option={option}
      handleClick={handleClick}
      isActive={activeOption === option.id ? true : false}
    />
  ));

  function handleClick(id: string) {
    setActiveOption(id);
  }

  return (
    <article className={styles.container}>
      <header>
        <h3 className={styles.title}>Sposób dostawy: </h3>
      </header>
      <ul className={styles.list}>{renderOptions}</ul>
    </article>
  );
}
