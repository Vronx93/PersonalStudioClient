import { deleteShopItem } from "../../api/api";
import { shopItemInterface } from "../../interfaces";
import { formatIntToPrice } from "../../utils";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import EditIcon from "../EditIcon/EditIcon";
import Img from "../Img/Img";
import styles from "./AdminProductListElement.module.css";
import redTrash from "../../assets/images/red-delete.png";
import { useRef } from "react";

export default function AdminProductListElement({
  element,
  deleteFunction,
}: {
  element: shopItemInterface;
  deleteFunction: (id: string) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const primaryImg = element.imageDetails.find(
    (image) => image.isPrimary === true
  );
  async function handleDelete() {
    await deleteShopItem(element.id);
    deleteFunction(element.id);
    dialogRef.current?.close();
  }

  const sizesArr: JSX.Element[] = [];
  if (element.availableSizes) {
    for (const [key, value] of Object.entries(element.availableSizes)) {
      sizesArr.push(
        <div className={styles.productInfoWrapper} key={crypto.randomUUID()}>
          <p className={styles.productInfoElementWrapper}>
            Rozmiar: <span className={styles.bold}>{key}</span>
          </p>
          <p className={styles.productInfoElementWrapper}>
            Ilość: <span className={styles.bold}>{value}</span>
          </p>
          <p className={styles.productInfoElementWrapper}>
            Cena:{" "}
            <span className={styles.bold}>
              {formatIntToPrice(element.price)}
            </span>
            zł
          </p>
        </div>
      );
    }
  }

  return (
    <li className={styles.container}>
      <div className={styles.primaryImgWrapper}>
        {primaryImg && (
          <Img
            className={styles.image}
            imgId={primaryImg.imageId}
            alt={element.name}
          />
        )}
      </div>
      <article className={styles.article}>
        <header className={styles.header}>
          <h3>{element.name}</h3>
          <div className={styles.headerIconsWrapper}>
            <EditIcon
              item={element}
              path={`/admin/edit-product/${element.id}`}
            />
            <DeleteIcon
              icon={redTrash}
              removeFunction={handleDelete}
              dialog
              dialogText="Czy na pewno chcesz usunąć"
              dialogItemName={element.name}
            />
          </div>
        </header>
        <div>
          {sizesArr.length > 0 ? (
            sizesArr
          ) : (
            <div className={styles.productInfoWrapper}>
              <p className={styles.productInfoElementWrapper}>
                Ilość: <span className={styles.bold}>{element.count}</span>
              </p>
              <p className={styles.productInfoElementWrapper}>
                Cena:{" "}
                <span className={styles.bold}>
                  {formatIntToPrice(element.price)}
                </span>
              </p>
            </div>
          )}
        </div>
      </article>
    </li>
  );
}
