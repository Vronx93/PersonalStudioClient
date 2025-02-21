import { useState } from "react";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import styles from "./CreateSizeInput.module.css";

export default function CreateSizeInput({
  deleteFunction,
  id,
  defaultSize,
  defaultAmount,
}: {
  deleteFunction: Function;
  id: string;
  defaultSize?: string;
  defaultAmount?: number;
}) {
  const [sizeValue, setSizeValue] = useState(defaultSize ?? "");
  const [amountValue, setAmountValue] = useState(defaultAmount ?? 0);

  function handleChange(event: any, stateSetter: Function) {
    stateSetter(event.target.value);
  }

  return (
    <li id={id} className={styles.container}>
      <label htmlFor="size">Rozmiar</label>
      <input
        type="text"
        id="size"
        name="size"
        value={sizeValue}
        onChange={(event: any) => handleChange(event, setSizeValue)}
      />
      <label htmlFor="amount">Ilość</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={amountValue}
        onChange={(event: any) => handleChange(event, setAmountValue)}
      />
      <DeleteIcon removeFunction={() => deleteFunction(id)} />
    </li>
  );
}
