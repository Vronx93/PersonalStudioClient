import styles from "./LoginForm.module.css";
import { Form, useNavigation } from "react-router-dom";

export default function LoginForm() {
  const navigation = useNavigation();
  const buttonText =
    navigation.state === "submitting" ? "Logowanie.." : "Zaloguj";

  return (
    <Form method="post" className={styles.container}>
      <input
        type="email"
        autoFocus
        required
        placeholder="Email"
        id="email"
        name="email"
        aria-label="Wpisz adres email"
      />
      <input
        type="password"
        required
        placeholder="Hasło"
        id="password"
        name="password"
        aria-label="Wpisz hasło"
      />
      <button
        type="submit"
        disabled={
          navigation.state === "submitting" || navigation.state === "loading"
        }
      >
        {buttonText}
      </button>
    </Form>
  );
}
