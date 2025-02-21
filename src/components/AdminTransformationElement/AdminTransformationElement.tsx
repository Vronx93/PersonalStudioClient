import { GetTransformationData } from "../../interfaces";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import Img from "../Img/Img";
import styles from "./AdminTransformationElement.module.css";

export default function AdminTransformationElement({
  element,
  deleteFn,
}: {
  element: GetTransformationData;
  deleteFn: (id: string) => void;
}) {
  return (
    <li className={styles.container}>
      <div className={styles.imagesWrapper}>
        <Img
          imgId={element.imageBefore}
          alt={"Wygląd przed transformacją."}
          className={styles.img}
        />
        <Img
          imgId={element.imageAfter}
          alt={"Wygląd po transformacji."}
          className={styles.img}
        />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{element.name}</h2>
        <div className={styles.weightAndAgeWrapper}>
          <p className={styles.text}>
            Waga: -<b className={styles.title}>{element.lostWeight}</b> kg
          </p>
          <p className={styles.text}>
            Wiek: <b className={styles.title}>{element.yearsOld}</b>
          </p>
        </div>
      </div>
      <DeleteIcon
        customStyles={styles.delete}
        dialog
        dialogItemName={element.name}
        dialogText="Czy na pewno chcesz usunąć transformację użytkownika"
        removeFunction={() => deleteFn(element.id)}
      />
    </li>
  );
}
