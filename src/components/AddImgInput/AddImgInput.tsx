import styles from "./AddImgInput.module.css";
import plus from "../../assets/images/plus.png";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { convertImgToString } from "../../utils";
import { useState } from "react";
import Img from "../Img/Img";

interface AddImgInputInterface {
  nameAndId: string;
  buttonText: string;
  imgId?: string;
  deleteOldImgFn?: (id: string) => void;
  className?: string;
}

// imgId is used for editing purpose, you can put there id of image which is already uploaded to the server

export default function AddImgInput({
  nameAndId,
  buttonText,
  imgId,
  deleteOldImgFn,
  className,
}: AddImgInputInterface) {
  const [defaultImgId, setDefaultImgId] = useState(imgId ?? undefined);
  const [imgString, setImgString] = useState<string>("");
  const idAndNameForFileInput = crypto.randomUUID();
  function deleteOld(id: string) {
    deleteOldImgFn && deleteOldImgFn(id);
    setDefaultImgId(undefined);
  }
  return (
    <div className={`${styles.imageInputWrapper} ${className}`}>
      {/* labels to file/img input */}
      <label htmlFor={idAndNameForFileInput}>{buttonText}</label>
      {imgString.length < 2 && !defaultImgId && (
        <label className={styles.plusContainer} htmlFor={idAndNameForFileInput}>
          <img src={plus} alt="Dodaj zdjęcie." />
        </label>
      )}
      <div className={styles.imgContainer}>
        {defaultImgId ? (
          <>
            {imgId && (
              <Img
                imgId={defaultImgId}
                alt="Zdjęcie przedmiotu."
                className={styles.img}
              />
            )}
            <DeleteIcon
              customStyles={styles.deleteImg}
              removeFunction={() => deleteOld(defaultImgId)}
            />
          </>
        ) : (
          imgString.length > 2 && (
            <>
              <img
                src={`data:image/png;base64,${imgString}`}
                alt="Zdjęcie dodane przez użytkownika."
                className={styles.img}
              />
              <DeleteIcon
                customStyles={styles.deleteImg}
                removeFunction={() => setImgString("")}
              />
            </>
          )
        )}
      </div>

      {/* input to accept img as file */}
      <input
        type="File"
        accept="image/*"
        id={idAndNameForFileInput}
        name={idAndNameForFileInput}
        hidden
        aria-hidden
        className={styles.hidden}
        onChange={(event) => convertImgToString(event, setImgString)}
      />
      {/* input to send string value of uploaded img */}
      <input
        type="text"
        hidden
        className={styles.hidden}
        value={imgString}
        readOnly
        name={nameAndId}
        id={nameAndId}
      />
    </div>
  );
}
