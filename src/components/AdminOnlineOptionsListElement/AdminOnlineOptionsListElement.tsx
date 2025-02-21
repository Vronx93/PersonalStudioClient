import { OnlinePlanGetOptionInterface } from "../../interfaces";
import styles from "./AdminOnlineOptionsListElement.module.css";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { useRef } from "react";
import { deleteOnlineOption } from "../../api/api";
import removeIcon from "../../assets/images/red-delete.png";
import { formatIntToPrice } from "../../utils";
import { useQueryClient } from "@tanstack/react-query";

export default function AdminOnlineOptionsListElement({
  option,
  deleteFn,
}: {
  option: OnlinePlanGetOptionInterface;
  deleteFn: (optionName: string) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const queryClient = useQueryClient();

  async function handleDelete() {
    await deleteOnlineOption(option.name);
    queryClient.clear();
    deleteFn(option.name);
    dialogRef.current?.close();
  }
  return (
    <li className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{option.name}</h2>
        <DeleteIcon
          icon={removeIcon}
          removeFunction={handleDelete}
          dialog
          dialogItemName={option.name}
          dialogText="Czy na pewno chcesz usunąć opcję:"
        />
      </div>
      <div className={styles.contentWrapper}>
        <p>
          Ilość miesięcy:{" "}
          <span className={styles.bold}>{option.monthCount}</span>
        </p>
        <p>
          Cena:{" "}
          <span className={styles.bold}>{formatIntToPrice(option.price)}</span>
          zł
        </p>
        <p>
          Podatek w %:{" "}
          <span className={styles.bold}>{option.taxInPercent}</span>
        </p>
        <p>
          Cena końcowa:{" "}
          <span className={styles.bold}>
            {formatIntToPrice(option.totalPrice)}
          </span>
          zł
        </p>
      </div>
    </li>
  );
}
