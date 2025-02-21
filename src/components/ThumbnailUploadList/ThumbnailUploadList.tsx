import { UUID } from "crypto";
import ThumbnailUploadListEl from "../ThumbnailUploadListEl/ThumbnailUploadListEl";
import styles from "./ThumbnailUploadList.module.css";

interface ThumbnailUploadListProps {
  imagesArr: { image: File; randomId: UUID }[];
}

export default function ThumbnailUploadList({
  imagesArr,
}: ThumbnailUploadListProps) {
  const thumbnailImages =
    imagesArr.length > 0 &&
    imagesArr.map((imageData) => (
      <ThumbnailUploadListEl
        key={crypto.randomUUID()}
        image={imageData.image}
        id={imageData.randomId}
      />
    ));
  return <ul className={styles.list}>{thumbnailImages}</ul>;
}
