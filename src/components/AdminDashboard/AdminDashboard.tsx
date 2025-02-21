import AdminNav from "../AdminNav/AdminNav";
import Logo from "../Logo/Logo";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import styles from "./AdminDashboard.module.css";

export default function AdminDashboard() {
  return (
    <aside className={styles.container}>
      <div className={styles.menuWrapper}>
        <Logo logoStyles={styles.logo} />
        <AdminNav />
        <LogoutBtn />
      </div>
    </aside>
  );
}
