import styles from "./PhotoCollage.module.css";

export default function PhotoCollage({
  photoList,
  containerStyle,
}: {
  photoList: string[];
  containerStyle?: string;
}) {
  const renderPhotos = photoList.map((photo) => (
    <img
      key={crypto.randomUUID()}
      src={photo}
      className={styles.image}
      alt="Studio."
    />
  ));

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      {renderPhotos}
    </div>
  );
}
