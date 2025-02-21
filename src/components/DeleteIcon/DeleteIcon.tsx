import styles from "./DeleteIcon.module.css";
import trashImg from "../../assets/images/trashImg.png";
import { useRef } from "react";

export default function DeleteIcon({
  removeFunction,
  customStyles,
  icon,
  dialog,
  dialogText,
  dialogItemName,
}: {
  removeFunction: Function;
  customStyles?: string;
  icon?: string;
  dialog?: boolean;
  dialogText?: string;
  dialogItemName?: string;
}) {
  const img = icon ? icon : trashImg;
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      {dialog && (
        <dialog ref={dialogRef} className={styles.dialog}>
          <p>
            {dialogText && dialogText}{" "}
            {dialogItemName && <span>{dialogItemName}</span>}?
          </p>
          <div className={styles.dialogButtonsWrapper}>
            <button
              onClick={(event) => removeFunction(event)}
              className={styles.dialogBtn}
            >
              Tak
            </button>
            <button
              onClick={() => dialogRef.current?.close()}
              className={styles.dialogBtn}
            >
              Nie
            </button>
          </div>
        </dialog>
      )}
      <img
        tabIndex={0}
        src={img}
        alt="Usuń element"
        onClick={
          dialog
            ? () => dialogRef.current?.showModal()
            : (event) => removeFunction(event)
        }
        className={`${styles.trashIcon} ${customStyles}`}
      />
    </>
  );
}
