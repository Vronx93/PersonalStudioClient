import { useState, useEffect, useLayoutEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
import { useCurrentUploadImagesContext } from "../../contexts/CurrentUploadImagesContext";
import { convertAll } from "../../utils";
import styles from "./EditShopItemForm.module.css";
import { shopItemInterface } from "../../interfaces";
import CreateSizeInput from "../CreateSizeInput/CreateSizeInput";
import AddImgInput from "../AddImgInput/AddImgInput";
import plusImg from "../../assets/images/plus.png";
import Img from "../Img/Img";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import ThumbnailUploadListEl from "../ThumbnailUploadListEl/ThumbnailUploadListEl";

export default function EditShopItemForm({
  item,
}: {
  item: shopItemInterface;
}) {
  const navigation = useNavigation();
  const { addImages, resetImages, currentUploadImages } =
    useCurrentUploadImagesContext();
  const [convertedImages, setConvertedImages] = useState<string[]>([]);
  const oldPrimaryImg = item.imageDetails.find(
    (image) => image.isPrimary === true
  );
  const [oldNonPrimaryImgs, setOldNonPrimayImgs] = useState(
    item.imageDetails.filter((image) => image.isPrimary === false)
  );

  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [sizeInputs, setSizeInputs] = useState<
    { item: JSX.Element; id: string }[] | []
  >(oldSizeInputs() ?? []);

  useLayoutEffect(() => {
    setOldNonPrimayImgs(
      item.imageDetails.filter((image) => image.isPrimary === false)
    );
  }, [item]);

  function oldSizeInputs() {
    const arr = [];
    for (const [key, value] of Object.entries(item.availableSizes)) {
      arr.push({
        item: (
          <CreateSizeInput
            deleteFunction={deleteSizeField}
            id={(arr.length + 1).toString()}
            defaultAmount={value}
            defaultSize={key}
            key={crypto.randomUUID()}
          />
        ),
        id: (arr.length + 1).toString(),
      });
    }
    return arr;
  }

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

  function deleteSizeField(id: string) {
    setSizeInputs((prevInputs) => prevInputs.filter((input) => id != input.id));
  }

  function deleteOldImage(id: string) {
    setOldNonPrimayImgs((prevImgs) =>
      prevImgs.filter(
        (img: { imageId: string; isPrimary: boolean }) => img.imageId !== id
      )
    );
    setDeletedImages((prevImages) => [...prevImages, id]);
  }

  return (
    <section className={styles.container}>
      <Form className={styles.form} method="put" onSubmit={handleSubmit}>
        {/* primary IMG start */}
        <AddImgInput
          nameAndId={"primaryImg"}
          buttonText={"Zdjęcie główne"}
          imgId={oldPrimaryImg?.imageId}
          deleteOldImgFn={deleteOldImage}
          className={styles.primaryImgInput}
        />
        {/* primary IMG end */}
        {/* IMG list start */}
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
        {/* old Images */}
        <ul className={styles.imagesList}>
          {oldNonPrimaryImgs.map((image) => {
            return (
              <li className={styles.imagesListItem} key={crypto.randomUUID()}>
                <Img
                  imgId={image.imageId}
                  alt={"Zdjęcie przedmiotu."}
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
          placeholder="Tytuł/Nazwa przedmiotu"
          defaultValue={item.name}
        />
        <input
          type="text"
          required
          id="shortDescription"
          name="shortDescription"
          placeholder="Krótki opis przedmiotu"
          defaultValue={item.shortDescription}
        />
        <input
          required
          type="number"
          id="price"
          name="price"
          placeholder="Cena za sztukę"
          defaultValue={item.price}
        />
        <input
          type="number"
          id="count"
          name="count"
          placeholder="Ilość dostępnych przedmiotów (dot. przedmiotów bez rozmiarów)"
          defaultValue={item.count}
        />
        <textarea
          required
          name="description"
          id="description"
          cols={30}
          rows={10}
          placeholder="Opis przedmiotu"
          defaultValue={item.description}
        />
        <ul className={styles.sizes}>
          {/* render input fields for sizes */}
          {sizeInputs.map((sizeInput) => sizeInput.item)}
        </ul>
        <button
          // onClick: add field for size and amout of items with this size
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
        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Wprowadzanie zmian.."
            : "Zaakceptuj zmiany"}
        </button>
      </Form>
    </section>
  );
}
