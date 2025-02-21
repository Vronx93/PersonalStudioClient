import { Link } from "react-router-dom";
import styles from "./EditIcon.module.css";
import { CoachInterface, shopItemInterface } from "../../interfaces";
import editImg from "../../assets/images/edit-icon.png";

//should render with attribute href to edit correct item

export default function EditIcon({
  item,
  path,
}: {
  item: shopItemInterface | CoachInterface;
  path: string;
}) {
  return (
    <Link to={path} state={item} className={styles.link}>
      <img src={editImg} alt="Edytuj przedmiot." />
    </Link>
  );
}
