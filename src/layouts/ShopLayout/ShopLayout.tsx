import { Outlet } from "react-router-dom";
import styles from "./ShopLayout.module.css";
import ShopNav from "../../components/ShopNav/ShopNav";
import NavArticle from "../../components/NavArticle/NavArticle";

export default function ShopLayout() {
  const articleData = {
    title: "Tak pracujemy!",
    fancyTitleLeft: "WhatsApp",
    text: (
      <p>
        Treningi online, dopasowane do Ciebie i Twojego harmonogramu, są teraz
        na wyciągnięcie ręki. Skorzystaj z bezpośredniego kontaktu przez{" "}
        <b>WhatsApp,</b> aby zaplanować swoje sesje i zacząć pracę nad swoimi
        celami już dziś!
      </p>
    ),
  };

  return (
    <div className={styles.shopWrapper}>
      <NavArticle
        title={articleData.title}
        fancyTitleLeft={articleData.fancyTitleLeft}
        text={articleData.text}
      />
      <ShopNav />
      <section>
        <Outlet />
      </section>
    </div>
  );
}
