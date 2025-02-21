import styles from "./AdminHeader.module.css";

export default function AdminHeader({
  title,
  span,
}: {
  title: string;
  span?: string;
}) {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.span}>{span}</span>
    </header>
  );
}
