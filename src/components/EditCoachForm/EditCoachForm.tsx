import { Form, useNavigation } from "react-router-dom";
import { CoachInterface } from "../../interfaces";
import styles from "./EditCoachForm.module.css";
import { useState, useLayoutEffect, useEffect } from "react";
import { useCurrentUploadImagesContext } from "../../contexts/CurrentUploadImagesContext";
import { convertAll } from "../../utils";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import Img from "../Img/Img";
import ThumbnailUploadListEl from "../ThumbnailUploadListEl/ThumbnailUploadListEl";
import plusImg from "../../assets/images/plus.png";

export default function EditCaochForm({ coach }: { coach: CoachInterface }) {
  const navigation = useNavigation();
  const { addImages, resetImages, currentUploadImages } =
    useCurrentUploadImagesContext();
  const [convertedImages, setConvertedImages] = useState<string[]>([]);
  const [oldImages, setOldImages] = useState(coach.imageDetails);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);

  useLayoutEffect(() => {
    setOldImages(coach.imageDetails);
  }, [coach]);

  useEffect(() => {
    convertAll(currentUploadImages).then((resolvedData) =>
      setConvertedImages(resolvedData as unknown as string[])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUploadImages]);

  function handleSubmit() {
    resetImages();
    setDeletedImages([]);
  }

  const renderUploadImages = convertedImages.map((image) => (
    <input
      key={crypto.randomUUID()}
      value={image}
      type="text"
      name="image"
      readOnly
      hidden
      className={styles.hidden}
    />
  ));

  function deleteOldImage(id: string) {
    setOldImages((prevImgs) =>
      prevImgs.filter(
        (img: { imageId: string; isPrimary: boolean }) => img.imageId !== id
      )
    );
    setDeletedImages((prevImages) => [...prevImages, id]);
  }

  return (
    <section className={styles.container}>
      <Form className={styles.form} method="put" onSubmit={handleSubmit}>
        {/* IMG list start */}
        <label tabIndex={0} htmlFor="img" className={styles.label}>
          Zdjęcia trenera
        </label>
        <label tabIndex={0} htmlFor="img" className={styles.addMultipleImgBtn}>
          <img
            className={styles.plusImg}
            src={plusImg}
            alt="Dodaj zdjęcia trenera."
          />
        </label>
        <input
          id="img"
          name="img"
          type="file"
          accept="image/*"
          multiple
          hidden
          className={styles.hidden}
          onChange={(event) => addImages(event)}
        />
        {renderUploadImages}
        {/* old Images */}
        <ul className={styles.imagesList}>
          {oldImages.map((image) => {
            return (
              <li className={styles.imagesListItem} key={crypto.randomUUID()}>
                <Img
                  imgId={image.imageId}
                  alt={"Zdjęcie trenera."}
                  className={styles.listImg}
                />
                <DeleteIcon
                  removeFunction={() => deleteOldImage(image.imageId)}
                />
              </li>
            );
            // old images end
          })}
          {/* new images */}
          {currentUploadImages.length > 0 &&
            currentUploadImages.map((img) => {
              return (
                <ThumbnailUploadListEl
                  key={crypto.randomUUID()}
                  image={img.image}
                  id={img.randomId}
                />
              );
            })}
        </ul>
        {/* new Images end */}
        {/* IMG list end */}
        {/* deleted old images start- to use delete api endpoint */}
        {deletedImages &&
          deletedImages.map((image) => {
            return (
              <input
                type="text"
                name="deletedImg"
                id="deletedImg"
                readOnly
                hidden
                className={styles.hidden}
                value={image}
                key={crypto.randomUUID()}
              />
            );
          })}
        {/* deleted old images end */}
        <input
          autoFocus
          required
          type="text"
          id="name"
          name="name"
          placeholder="Imię i Nazwisko trenera"
          defaultValue={coach.name}
        />
        <textarea
          required
          name="description"
          id="description"
          cols={30}
          rows={10}
          placeholder="Opis trenera."
          defaultValue={coach.description}
        />
        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Wprowadzanie zmian.."
            : "Zaakceptuj zmiany"}
        </button>
      </Form>
    </section>
  );
}
