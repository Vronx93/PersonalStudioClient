import { useRef } from "react";
import styles from "./SizesTable.module.css";
import whiteCloseImg from "../../assets/images/white-close.png";
import tshirt from "../../assets/images/t-shirt.png";
import arrowSizes from "../../assets/images/arrow-sizes.png";
import curvedArrow from "../../assets/images/curved-arrow-sizes.png";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function SizesTable() {
  const width = useWindowWidth();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const sizes = [
    { size: "S", height: 69, width: 50 },
    { size: "M", height: 72, width: 53 },
    { size: "L", height: 75, width: 55 },
    { size: "XL", height: 77, width: 58 },
    { size: "XXL", height: 79, width: 62 },
  ];

  return (
    <div>
      <p
        className={styles.greyText}
        onClick={() => dialogRef.current?.showModal()}
      >
        Przedownik po rozmiarach
      </p>
      <dialog ref={dialogRef} className={styles.dialog}>
        <img
          src={whiteCloseImg}
          onClick={() => dialogRef.current?.close()}
          className={styles.closeImg}
          alt="Zamknij tabelę rozmiarów."
        />

        <table className={styles.table}>
          <caption className={styles.caption}>Tabela rozmiarów</caption>
          <thead className={styles.thead}>
            <tr>
              <td scope="col">Rozmiar</td>
              <td scope="col">Wysokość [cm]</td>
              <td scope="col">Klatka piersiowa [cm]</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {sizes.length > 0 &&
              sizes.map((size) => (
                <tr key={crypto.randomUUID()}>
                  <td scope="row">{size.size}</td>
                  <td>{size.height}</td>
                  <td>{size.width}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className={styles.contentWrapper}>
          <div className={styles.tshirtWrapper}>
            <p className={`${styles.sizeLetter} ${styles.letterA}`}>A</p>
            <p className={`${styles.sizeLetter} ${styles.letterB}`}>B</p>
            <img className={styles.tshirt} src={tshirt} alt="Koszulka." />
            <img
              className={styles.sizesArrow}
              src={arrowSizes}
              alt="Strzałka pionowa wskazująca prawidłowy sposób pomiaru koszulki."
            />
            <img
              className={styles.curvedArrow}
              src={curvedArrow}
              alt="Strzałka pozioma wskazująca prawidłowy sposób pomiaru koszulki."
            />
          </div>
          {width > 699 && (
            <div className={styles.articlesWrapper}>
              <article className={styles.article}>
                <header className={styles.articleHeader}>
                  <p
                    className={`${styles.sizeLetter} ${styles.lettersArticle}`}
                  >
                    A
                  </p>{" "}
                  <h3 className={styles.articleTitle}>
                    Jak zmierzyć wysokość?
                  </h3>
                </header>
                <p className={styles.articleText}>
                  Koszulkę mierzymy od przodu. Podczas pomiaru koszulka powinna
                  leżeć równo na płaskiej powierzchni.
                </p>
              </article>
              <article className={styles.article}>
                <header className={styles.articleHeader}>
                  <p
                    className={`${styles.sizeLetter} ${styles.lettersArticle}`}
                  >
                    B
                  </p>
                  <h3 className={styles.articleTitle}>
                    Jak zmierzyć szerokość?
                  </h3>
                </header>
                <p className={styles.articleText}>
                  Koszulkę mierzymy od przodu. Podczas pomiaru koszulka powinna
                  leżeć równo na płaskiej powierzchni.
                </p>
              </article>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
