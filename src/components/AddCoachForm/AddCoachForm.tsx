import { Form } from "react-router-dom";
import styles from "./AddCoachForm.module.css";
import { useEffect, useState } from "react";
import { useCurrentUploadImagesContext } from "../../contexts/CurrentUploadImagesContext";
import { convertAll } from "../../utils";
import ThumbnailUploadList from "../ThumbnailUploadList/ThumbnailUploadList";
import plusImg from "../../assets/images/plus.png";

export default function AddCoachForm() {
  const { addImages, resetImages, currentUploadImages } =
    useCurrentUploadImagesContext();
  const [convertedImages, setConvertedImages] = useState<string[]>([]);

  useEffect(() => {
    convertAll(currentUploadImages).then((resolvedData) =>
      setConvertedImages(resolvedData as unknown as string[])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUploadImages]);

  function handleSubmit() {
    resetImages();
  }

  const renderUploadImages = convertedImages.map((image) => (
    <input
      className={styles.hidden}
      key={crypto.randomUUID()}
      value={image}
      type="text"
      name="image"
      readOnly
      hidden
    />
  ));

  return (
    <Form method="post" onSubmit={handleSubmit} className={styles.container}>
      <label className={styles.label} htmlFor="selectImage">
        Zdjęcia
      </label>
      <label
        tabIndex={0}
        htmlFor="selectImage"
        className={styles.addMultipleImgBtn}
      >
        <img
          className={styles.plusImg}
          src={plusImg}
          alt="Dodaj zdjęcia dodatkowe."
        />
      </label>
      <input
        className={styles.hidden}
        name="selectImage"
        id="selectImage"
        type="file"
        accept="image/*"
        readOnly
        hidden
        multiple
        onChange={(event: unknown) => addImages(event)}
      />
      {currentUploadImages.length > 0 && (
        <ThumbnailUploadList imagesArr={currentUploadImages} />
      )}
      {renderUploadImages}
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Imię i Nazwisko"
        autoFocus
        required
      />
      <textarea
        name="description"
        id="description"
        placeholder="Opis"
        required
        cols={30}
        rows={10}
      ></textarea>
      <button className={styles.btn} type="submit">
        Dodaj trenera
      </button>
    </Form>
  );
}
