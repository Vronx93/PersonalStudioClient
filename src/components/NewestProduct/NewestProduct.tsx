import Button from "../Button/Button";
import styles from "./NewestProduct.module.css";
import waves2Img from "../../assets/images/waves2.png";
import pushupsImg from "../../assets/images/pushups.png";
import waves3Img from "../../assets/images/waves3.png";
// import newestProductImg from "../../assets/images/newest-product.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import { shopItemInterface } from "../../interfaces";
import Img from "../Img/Img";
import { useQueryClient } from "@tanstack/react-query";
import usePrefetchImagesFromSingleItem from "../../hooks/usePrefetchImagesFromSingleItem";
import { getShopItem } from "../../api/api";

export default function NewestProduct({
  product,
}: {
  product: shopItemInterface;
}) {
  const queryClient = useQueryClient();
  const width = useWindowWidth();
  const primaryImg = product.imageDetails.find(
    (image) => image.isPrimary === true
  );

  if (!primaryImg) {
    throw new Error("Produkt powinien mieć zdjęcie główne.");
  }

  if (width < 720) {
    return (
      <article
        className={styles.container}
        onTouchStart={() =>
          usePrefetchImagesFromSingleItem({
            queryClient,
            queryKey: ["products", product.id],
            queryFn: () => getShopItem(product.id),
            staleTimeInMinutes: 10,
          })
        }
      >
        <img className={styles.pushups} src={pushupsImg} alt="" />
        <header className={styles.header}>
          <h2 className={styles.title}>
            Najnowszy <span className={styles.fancyText}>produkt</span>!
          </h2>
          <div className={styles.imageWrapper}>
            <img className={styles.topWaves} src={waves2Img} alt="" />
            <Img
              className={styles.newestProductImg}
              imgId={primaryImg.imageId}
              alt="Zdjęcie prezentujące najnowszy produkt dostępny w sklepie."
            />
          </div>
        </header>
        <div className={styles.contentWrapper}>
          <div className={styles.textContentWrapper}>
            <h3 className={styles.secondaryTitle}>{product.name}</h3>
            <p className={styles.text}>{product.shortDescription}</p>
            <br />
            <p className={`${styles.pepekWrapper} ${styles.text}`}>
              Sprawdź nasz najnowszy produkt <br />i dołącz do ekipy{" "}
              <span className={styles.bold}>#TwojaNazwa.</span>
            </p>
            <Button
              link={`/shop/products/${product.id}`}
              text={"Dołącz do ekipy"}
              className={styles.btn}
            />
          </div>
        </div>
        <img className={styles.bottomWaves} src={waves3Img} alt="" />
      </article>
    );
  }

  return (
    <section
      className={styles.container}
      onMouseEnter={() =>
        usePrefetchImagesFromSingleItem({
          queryClient,
          queryKey: ["products", product.id],
          queryFn: () => getShopItem(product.id),
          staleTimeInMinutes: 10,
        })
      }
    >
      <img className={styles.topWaves} src={waves2Img} alt="" />
      <img className={styles.pushups} src={pushupsImg} alt="" />
      <div className={styles.contentWrapper}>
        <Img
          className={styles.newestProductImg}
          imgId={primaryImg.imageId}
          alt="Zdjęcie prezentujące najnowszy produkt dostępny w sklepie."
        />
        <div className={styles.textContentWrapper}>
          <h2 className={styles.title}>
            Najnowszy <span className={styles.fancyText}>produkt</span>!
          </h2>
          <h3 className={styles.secondaryTitle}>{product.name}</h3>
          <p className={styles.text}>{product.shortDescription}</p>
          <br />
          <p className={`${styles.pepekWrapper} ${styles.text}`}>
            Sprawdź nasz najnowszy produkt <br />i dołącz do ekipy{" "}
            <span className={styles.bold}>#TwojaNazwa.</span>
          </p>
          <Button
            link={`/shop/products/${product.id}`}
            text={"Dołącz do ekipy"}
            className={styles.btn}
          />
        </div>
      </div>
      <img className={styles.bottomWaves} src={waves3Img} alt="" />
    </section>
  );
}
