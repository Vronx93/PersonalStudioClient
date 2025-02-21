import { Form } from "react-router-dom";
import styles from "./AddPlanOptionForm.module.css";
import { useState } from "react";

export default function AddPlanOptionForm() {
  const [formData, setFormData] = useState({
    price: 0,
    taxInPercent: 0,
  });
  return (
    <Form method="post" className={styles.form}>
      <input
        className={styles.input}
        autoFocus
        type="text"
        name="name"
        id="name"
        required
        placeholder="Nazwa opcji"
      />
      <input
        className={styles.input}
        value={formData.price !== 0 ? formData.price : undefined}
        onChange={(event) =>
          setFormData((prevData) => ({
            ...prevData,
            price: parseInt(event.target.value),
          }))
        }
        type="number"
        name="price"
        id="price"
        required
        placeholder="Cena"
      />
      <input
        className={styles.input}
        value={formData.taxInPercent !== 0 ? formData.taxInPercent : undefined}
        onChange={(event) =>
          setFormData((prevData) => ({
            ...prevData,
            taxInPercent: parseInt(event.target.value),
          }))
        }
        type="number"
        name="taxInPercent"
        id="taxInPercent"
        required
        placeholder="Podatek w procentach"
      />
      <input
        className={styles.input}
        type="number"
        name="monthCount"
        id="monthCount"
        required
        placeholder="Czas trwania (w miesiącach)"
      />
      <button className={styles.btn} type="submit">
        Dodaj opcję
      </button>
    </Form>
  );
}
