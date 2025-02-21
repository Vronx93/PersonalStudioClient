import { redirect } from "react-router-dom";
import { addImage, addShopItem } from "../../../api/api";
import AddShopItemForm from "../../../components/AddShopItemForm/AddShopItemForm";
import {
  availableSizesDictionary,
  createItemInterface,
} from "../../../interfaces";
import { createDictionary } from "./AddShopItem.utils";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import { QueryClient } from "@tanstack/react-query";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({
  request,
  queryClient,
}: {
  request: Request;
  queryClient: QueryClient;
}) {
  const formData = await request.formData();
  const name = formData.get("name");
  const price: unknown = formData.get("price");
  const count: unknown = formData.get("count");
  const description = formData.get("description");
  const shortDescription: unknown =
    (formData.get("shortDescription") as string) || "";
  const sizes: unknown = formData.getAll("size");
  const sizesAmount: unknown = formData.getAll("amount");
  const primaryImg: unknown = formData.get("primaryImg");
  const itemData: createItemInterface = {
    name: name as string,
    shortDescription: shortDescription as string,
    description: description as string,
    price: price as number,
    count: count as number,
    availableSizes: createDictionary(
      sizes as string[],
      sizesAmount as number[]
    ) as availableSizesDictionary,
  };
  const itemId: string = await addShopItem({ itemData });
  const images = formData.getAll("image") as unknown as string[];
  if (images.length > 0) {
    for (const image of images) {
      await addImage({
        productId: itemId,
        imageContent: image,
        isPrimary: false,
      });
    }
  }
  if (primaryImg) {
    await addImage({
      productId: itemId,
      imageContent: primaryImg as string,
      isPrimary: true,
    });
  }
  await queryClient.invalidateQueries({
    queryKey: ["products"],
  });
  return redirect("/admin/products?message=success");
}

export default function AddShopItem() {
  return (
    <>
      <AdminHeader title={"Dodawanie produktu"} />
      <AddShopItemForm />
    </>
  );
}
