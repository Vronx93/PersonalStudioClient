import { redirect } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { logIn } from "../../api/api";

const logInAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await logIn({ email, password });
  localStorage.setItem("isLoggedIn", "true");
};

async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  await logInAction({ email, password });
  return redirect("/admin");
}

export default function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}

Login.action = action;
