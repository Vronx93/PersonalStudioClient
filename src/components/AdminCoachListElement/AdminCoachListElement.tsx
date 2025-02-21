import { CoachInterface } from "../../interfaces";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import Img from "../Img/Img";
import styles from "./AdminCoachListElement.module.css";
import removeIcon from "../../assets/images/red-delete.png";
import EditIcon from "../EditIcon/EditIcon";

export default function AdminCoachListElement({
  coach,
  deleteFn,
}: {
  coach: CoachInterface;
  deleteFn: (id: string) => Promise<void>;
}) {
  return (
    <li className={styles.container}>
      {coach.imageDetails.length > 0 && (
        <Img
          imgId={coach.imageDetails[0].imageId}
          alt={coach.name}
          className={styles.img}
        />
      )}
      <h2 className={styles.title}>{coach.name}</h2>
      <div className={styles.actionIcons}>
        <EditIcon item={coach} path={`/admin/edit-coach/${coach.id}`} />
        <DeleteIcon
          dialog
          dialogItemName={coach.name}
          dialogText="Czy na pewno chcesz usunąć trenera"
          icon={removeIcon}
          removeFunction={() => deleteFn(coach.id)}
          // remember about query invalidate
        />
      </div>
    </li>
  );
}
