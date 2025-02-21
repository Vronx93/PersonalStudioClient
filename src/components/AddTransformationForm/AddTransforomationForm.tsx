import { Form, useNavigation } from "react-router-dom";
import styles from "./AddTransformation.module.css";
import AddImgInput from "../AddImgInput/AddImgInput";

export default function AddTransformationForm() {
  const navigation = useNavigation();
  return (
    <Form method="post" className={styles.container}>
      <div className={styles.imagesWrapper}>
        <AddImgInput
          nameAndId={"imgBefore"}
          buttonText={"Zdjęcie przed transformacją"}
        />
        <AddImgInput
          nameAndId={"imgAfter"}
          buttonText={"Zdjęcie po transformacji"}
        />
      </div>
      <div className={styles.textInputsWrapper}>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-label="Imię"
          placeholder="Imię"
        />
        <input
          type="number"
          id="lostWeight"
          name="lostWeight"
          aria-label="Stracone kilogramy"
          required
          placeholder="Stracone kilogramy"
        />
        <input
          type="number"
          id="yearsOld"
          name="yearsOld"
          aria-label="Wiek"
          required
          placeholder="Wiek"
        />
      </div>
      <button type="submit" disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting"
          ? "Dodawanie transformacji"
          : "Dodaj transformację"}
      </button>
    </Form>
  );
}
