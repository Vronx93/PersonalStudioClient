import { trainingPackageInterface } from "../../interfaces";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
// import styles from "./TrainingPackage.module.css"
import ProductImagesList from "../ProductImagesList/ProductImagesList";
// import { useLocation } from "react-router-dom"
import { useState, useLayoutEffect } from "react";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";

export default function TrainingPackage({
  trainingItemData,
}: {
  trainingItemData: trainingPackageInterface;
}) {
  // const path = useLocation().pathname
  const [isInShoppingCart, setIsInShoppingCart] = useState<boolean>(false);
  const { shoppingCart } = useShoppingCartContext();

  useLayoutEffect(() => {
    const existingItem = shoppingCart.find(
      (item) => item.id === trainingItemData.id
    );
    if (existingItem) {
      setIsInShoppingCart(true);
    } else {
      setIsInShoppingCart(false);
    }
  }, [shoppingCart, trainingItemData.id]);

  return (
    <>
      {trainingItemData.imageDetails?.map((image) => image.imageId).length >
        0 && <ProductImagesList images={trainingItemData.imageDetails} />}
      <h2>{trainingItemData.name}</h2>
      <p>{trainingItemData.price}</p>
      <p>{trainingItemData.description}</p>
      {isInShoppingCart ? (
        <p>Ten przedmiot znajduje się już w Twoim koszyku.</p>
      ) : (
        <AddToCartBtn
          item={trainingItemData}
          quantity={1}
          path={`/shop/trainings/${trainingItemData.id}`}
        />
      )}
    </>
  );
}
