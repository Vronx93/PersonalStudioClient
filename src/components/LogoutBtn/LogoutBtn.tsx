import { logOut } from "../../api/api";
import { useIsLoggedInContext } from "../../contexts/IsLoggedInContext";
import styles from "./LogoutBtn.module.css";
import powerImg from "../../assets/images/power-img.png";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const { isLoggedIn, logOutAction } = useIsLoggedInContext();
  const navigate = useNavigate();

  async function handleClick() {
    await logOut();
    logOutAction();
    return navigate("/login");
  }

  return (
    isLoggedIn && (
      <button className={styles.btn} onClick={handleClick}>
        Wyloguj się <img src={powerImg} alt="Wyloguj się." />
      </button>
    )
  );
}
