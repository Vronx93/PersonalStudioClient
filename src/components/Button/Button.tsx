import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import arrowRight from "../../assets/images/arrow-right-white.png";

export default function Button({
  link,
  text,
  state,
  onClick,
  arrow,
  className,
}: {
  link: string;
  text: string;
  arrow?: boolean;
  state?: object;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      onClick={onClick ?? onClick}
      className={`${styles.btn} ${className}`}
      to={link}
      state={state}
    >
      {text}
      {arrow && (
        <img
          className={styles.arrow}
          src={arrowRight}
          alt="Strzałka w prawo."
        />
      )}
    </Link>
  );
}
