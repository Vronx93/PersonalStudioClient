import { Form } from "react-router-dom";
import styles from "./ShopCheckoutForm.module.css";
import ShopCheckoutList from "../ShopCheckoutList/ShopCheckoutList";
import ShopCheckoutDeliveryOptionsList from "../ShopCheckoutDeliveryOptionsList/ShopCheckoutDeliveryOptionsList";
import UserDataForm from "../UserDataForm/UserDataForm";
import ShopCheckoutSummary from "../ShopCheckoutSummary/ShopCheckoutSummary";

export default function ShopCheckoutForm() {
  return (
    <Form method="post" className={styles.container}>
      <div className={styles.leftSide}>
        <ShopCheckoutList />
        <h2 className={styles.title}>Płatności</h2>
        <p className={styles.greyText}>
          Uzupełnij informacje, aby dokończyć proces zakupowy.
        </p>
        <ShopCheckoutDeliveryOptionsList />
        <UserDataForm />
      </div>
      <ShopCheckoutSummary />
    </Form>
  );
}
