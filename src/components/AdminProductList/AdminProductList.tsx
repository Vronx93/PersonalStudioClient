import { useState } from "react";
import { shopItemInterface } from "../../interfaces";
import AdminProductListElement from "../AdminProductListElement/AdminProductListElement";
import styles from "./AdminProdutList.module.css";
import { useQueryClient } from "@tanstack/react-query";

export default function AdminProductList({
  productList,
}: {
  productList: shopItemInterface[];
}) {
  const [products, setProducts] = useState(productList);
  const queryClient = useQueryClient();

  if (products.length < 1) {
    return (
      <p className={styles.noItemsText}>
        Obecnie nie sprzedajesz żadnych przedmiotów.
      </p>
    );
  }

  function removeItemFromList(id: string) {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id != id)
    );
    queryClient.invalidateQueries({ queryKey: ["products"] });
  }
  const renderProducts = products.map((product) => (
    <AdminProductListElement
      element={product}
      deleteFunction={removeItemFromList}
      key={crypto.randomUUID()}
    />
  ));
  return <ul className={styles.container}>{renderProducts}</ul>;
}
