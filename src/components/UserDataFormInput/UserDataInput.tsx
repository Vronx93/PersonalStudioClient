import styles from "./UserDataInput.module.css";

interface UserDataInputInterface {
  nameAndId: string;
  type: string;
  containerStyle?: string;
  required?: boolean;
  labelText: string;
  textUnderInput?: string;
}

export default function UserDataInput({
  nameAndId,
  type,
  containerStyle,
  required,
  labelText,
  textUnderInput,
}: UserDataInputInterface) {
  return (
    <div className={containerStyle || styles.container}>
      <label htmlFor={nameAndId} className={styles.label}>
        {labelText}
        {required && <span className={styles.orangeStar}>*</span>}
      </label>
      <div>
        <input
          name={nameAndId}
          id={nameAndId}
          type={type}
          required={required}
          className={styles.input}
        />
        {textUnderInput && (
          <p className={styles.smallGreyText}>{textUnderInput}</p>
        )}
      </div>
    </div>
  );
}
