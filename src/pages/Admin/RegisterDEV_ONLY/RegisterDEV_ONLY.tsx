import { Form, redirect } from "react-router-dom";
import { registerAdmin } from "../../../api/api";
import styles from "./Register.module.css";

async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password1 = formData.get("password1") as string;
  const password2 = formData.get("password2") as string;
  await registerAdmin({ email, password: password1, password2 });
  return redirect("/login");
}

export default function RegisterAdminDevOnly() {
  return (
    <Form method="post" className={styles.container}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        required
      />
      <input
        type="password"
        name="password1"
        id="password1"
        placeholder="hasło"
        required
      />
      <input
        type="password"
        name="password2"
        id="password2"
        placeholder="potwierdź hasło"
        required
      />
      <button type="submit">Zarejestruj</button>
    </Form>
  );
}

RegisterAdminDevOnly.action = action;
