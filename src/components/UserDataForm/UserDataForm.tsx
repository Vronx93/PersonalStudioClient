import UserDataInput from "../UserDataFormInput/UserDataInput";
import styles from "./UserDataForm.module.css";

export default function UserDataForm() {
  return (
    <section className={styles.container}>
      <header>
        <h3 className={styles.title}>Dane kupującego:</h3>
        <p className={styles.greyText}>
          Pola z (<span className={styles.orangeStar}>*</span>) wymagają
          uzupełnienia.
        </p>
      </header>
      <div className={styles.inputsWrapper}>
        <UserDataInput
          nameAndId="firstName"
          type="text"
          labelText="Imię"
          required
        />
        <UserDataInput
          nameAndId="lastName"
          type="text"
          labelText="Nazwisko"
          required
        />
        <UserDataInput
          nameAndId="email"
          type="email"
          labelText="Email"
          textUnderInput="Na ten e-mail wyślemy informacje o zamówieniu."
          required
        />
        <UserDataInput
          nameAndId="phone"
          type="tel"
          labelText="Numer telefonu"
          required
        />
        <UserDataInput
          nameAndId="location"
          type="text"
          labelText="Miejscowość"
          required
        />
        <UserDataInput
          nameAndId="zipCode"
          type="string"
          labelText="Kod pocztowy"
          required
        />
        <UserDataInput
          nameAndId="street"
          type="text"
          labelText="Ulica"
          required
        />
        <div className={styles.addressNumbersWrapper}>
          <UserDataInput
            containerStyle={styles.inputAddressNumber}
            nameAndId="streetNumber"
            type="text"
            labelText="Numer budynku"
            required
          />
          <UserDataInput
            containerStyle={styles.inputAddressNumber}
            nameAndId="apartmentNumber"
            type="text"
            labelText="Numer mieszkania"
          />
        </div>
      </div>
    </section>
  );
}
