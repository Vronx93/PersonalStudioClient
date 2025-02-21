import { useCurrentUploadImagesContext } from "../../contexts/CurrentUploadImagesContext";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import Img from "../Img/Img";
import styles from "./ThumbnailUploadListEl.module.css";

export default function ThumbnailUploadListEl({
  image,
  id,
  removeFunction,
}: {
  image: File;
  id: string;
  removeFunction?: (id: string) => void;
}) {
  const { removeImage } = useCurrentUploadImagesContext();

  return (
    <li className={styles.container}>
      <Img
        imgId={id}
        tabIndex={0}
        imgUrl={URL.createObjectURL(image)}
        alt="Zdjęcie przedmiotu"
        className={styles.productImg}
      />
      <DeleteIcon
        removeFunction={() =>
          removeFunction ? removeFunction(id) : removeImage(id)
        }
      />
    </li>
  );
}
