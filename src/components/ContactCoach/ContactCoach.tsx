import { useMemo } from "react";
import { CoachInterface } from "../../interfaces";
import styles from "./ContactCoach.module.css";
import { Form, useNavigation, useParams } from "react-router-dom";
import UserDataInput from "../UserDataFormInput/UserDataInput";
import whiteEnvelope from "../../assets/images/white-envelope.png";
import useWindowWidth from "../../hooks/useWindowWidth";
// import exerciseBackground from "../../assets/images/exerciseBackground.png";

export default function ContactCoach({
  coachList,
}: {
  coachList: CoachInterface[];
}) {
  const params = useParams();
  const navigation = useNavigation();
  const width = useWindowWidth();
  const coachOptions = useMemo(() => {
    return coachList.map((coach) => (
      <option key={crypto.randomUUID()} value={coach.id}>
        {coach.name}
      </option>
    ));
  }, [coachList]);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Formularz kontaktowy</h1>
        <p className={styles.text}>
          Formularz kontaktowy pozwala na wybranie konkretnego trenera, z którym
          będziesz współpracować, zapewniając dopasowanie Twoich potrzeb i celów
          do odpowiedniego profesjonalisty.
        </p>
      </header>
      <Form method="post">
        <div className={styles.selectCoachWrapper}>
          <label htmlFor="coachId" className={styles.text}>
            Wybrany trener:
          </label>
          <select
            id="coachId"
            name="coachId"
            defaultValue={params.id ?? params.id}
            className={styles.select}
          >
            {coachList.length > 1 && coachOptions}
          </select>
        </div>
        <p className={styles.greyText}>
          Pola z (<span className={styles.star}>*</span>) wymagają uzupełnienia.
        </p>
        <div className={styles.inputsWrapper}>
          <UserDataInput
            nameAndId={"firstName"}
            type={"text"}
            labelText={"Imię"}
            required
          />
          <UserDataInput
            nameAndId={"lastName"}
            type={"text"}
            labelText={"Nazwisko"}
            required
          />
          <UserDataInput
            nameAndId={"phone"}
            type={"text"}
            labelText={"Numer telefonu"}
            required
          />
          <UserDataInput
            nameAndId={"email"}
            textUnderInput="Na ten e-mail wyślemy wiadomość."
            type={"email"}
            labelText={"Adres email"}
            required
          />
          <div className={styles.messageWrapper}>
            <label htmlFor="message" className={styles.label}>
              Wiadomość<span className={styles.star}>*</span>
            </label>
            <textarea
              className={styles.textarea}
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
            />
          </div>
        </div>
        <button className={styles.btn} type="submit">
          {width > 359 && <img src={whiteEnvelope} alt="Koperta." />}
          {navigation.state === "submitting"
            ? "Wysyłanie wiadomości.."
            : "Wyślij wiadomość"}
        </button>
      </Form>
    </section>
  );
}
