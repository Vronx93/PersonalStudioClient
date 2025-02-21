import { Link } from "react-router-dom";
import { SocialsListElementInterface } from "../../interfaces";
import styles from "./SocialsListElement.module.css";

export default function SocialsListElement({
  name,
  imgUrl,
  text,
  profileUrl,
}: SocialsListElementInterface) {
  return (
    <li className={styles.container}>
      <Link className={styles.link} to={profileUrl}>
        <img
          className={styles.icon}
          src={imgUrl}
          alt={`Ikona portalu ${name}`}
          loading="lazy"
        />
        <p>{text}</p>
      </Link>
    </li>
  );
}
