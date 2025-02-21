import { Form, useNavigation } from "react-router-dom";
import styles from "./AddShopItemForm.module.css";
import ThumbnailUploadList from "../ThumbnailUploadList/ThumbnailUploadList";
import { useCurrentUploadImagesContext } from "../../contexts/CurrentUploadImagesContext";
import { useEffect, useState } from "react";
import { convertAll } from "../../utils";
import CreateSizeInput from "../CreateSizeInput/CreateSizeInput";
import AddImgInput from "../AddImgInput/AddImgInput";
import plusImg from "../../assets/images/plus.png";

export default function AddShopItemForm() {
  const { addImages, resetImages, currentUploadImages } =
    useCurrentUploadImagesContext();
  const [convertedImages, setConvertedImages] = useState<string[]>([]);
  const [sizeInputs, setSizeInputs] = useState<
    { item: JSX.Element; id: string }[] | []
  >([]);
  const navigation = useNavigation();
  // const [primaryImgString, setPrimaryImgString] = useState<string>("");

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
      key={crypto.randomUUID()}
      value={image}
      type="text"
      name="image"
      readOnly
      hidden
      className={styles.hidden}
    />
  ));

  function deleteSizeField(id: string) {
    setSizeInputs((prevInputs) => prevInputs.filter((input) => id != input.id));
  }

  return (
    <section className={styles.container}>
      <Form className={styles.form} method="post" onSubmit={handleSubmit}>
        <AddImgInput nameAndId={"primaryImg"} buttonText={"Zdjęcie główne"} />
        <label tabIndex={0} htmlFor="img" className={styles.label}>
          Zdjęcia dodatkowe
        </label>
        <label tabIndex={0} htmlFor="img" className={styles.addMultipleImgBtn}>
          <img
            className={styles.plusImg}
            src={plusImg}
            alt="Dodaj zdjęcia dodatkowe."
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
        {currentUploadImages.length > 0 && (
          <ThumbnailUploadList imagesArr={currentUploadImages} />
        )}
        <input
          autoFocus
          required
          type="text"
          id="name"
          name="name"
          placeholder="Tytuł/Nazwa przedmiotu"
        />
        <input
          type="text"
          required
          id="shortDescription"
          name="shortDescription"
          placeholder="Krótki opis przedmiotu"
        />
        <input
          required
          type="number"
          id="price"
          name="price"
          placeholder="Cena za sztukę"
        />
        <input
          type="number"
          id="count"
          name="count"
          placeholder="Ilość dostępnych przedmiotów"
        />
        <textarea
          required
          name="description"
          id="description"
          cols={30}
          rows={10}
          placeholder="Opis przedmiotu"
        />
        <ul className={styles.sizes}>
          {/* render input fields for sizes */}
          {sizeInputs.map((sizeInput) => sizeInput.item)}
        </ul>
        <button
          // onClick: add field for size and amout of items with this size
          className={styles.btn}
          onClick={() =>
            setSizeInputs((prev) => [
              ...prev,
              {
                item: (
                  <CreateSizeInput
                    deleteFunction={deleteSizeField}
                    id={(sizeInputs.length + 1).toString()}
                    key={crypto.randomUUID()}
                  />
                ),
                id: (sizeInputs.length + 1).toString(),
              },
            ])
          }
          type="button"
        >
          Dodaj rozmiar
        </button>
        <button
          className={styles.btn}
          type="submit"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting"
            ? "Wystawianie przedmiotu"
            : "Wystaw na sprzedaż"}
        </button>
      </Form>
    </section>
  );
}
