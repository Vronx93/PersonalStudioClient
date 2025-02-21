import {
  Await,
  defer,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";
import ShopItem from "../../../components/ShopItem/ShopItem";
import {
  addImage,
  getShopItem,
  removeImage,
  updateShopItem,
} from "../../../api/api";
import {
  availableSizesDictionary,
  shopItemInterface,
} from "../../../interfaces";
import { createDictionary } from "./ProductPage.utils";
import { Suspense, useLayoutEffect } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";

function shopItemDataQuery(id: string) {
  return {
    queryKey: ["products", id],
    queryFn: async () => await getShopItem(id),
    staleTime: 60 * 1000 * 5,
  };
}

export async function loader({
  queryClient,
  params,
}: {
  queryClient: QueryClient;
  params: { id: string };
}) {
  const query = shopItemDataQuery(params.id);
  const data =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(shopItemDataQuery(params.id)));

  return defer({ data });
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const newDescription = formData.get("description") as unknown as string;
  const newName = formData.get("name") as unknown as string;
  const newPrice = formData.get("price") as unknown as number;
  const newCount = formData.get("count") as unknown as number;
  const newImages = formData.getAll("image") as string[];
  const newPrimaryImg = formData.get("primaryImg") as unknown as string;
  const id = formData.get("id") as string;
  const newShortDescription: unknown =
    (formData.get("shortDescription") as string) || "";
  const newSizes: unknown = formData.getAll("size");
  const newSizesAmount: unknown = formData.getAll("amount");
  const newItemData = {
    name: newName,
    price: newPrice,
    count: newCount,
    shortDescription: newShortDescription as string,
    description: newDescription,
    availableSizes: createDictionary(
      newSizes as string[],
      newSizesAmount as number[]
    ) as availableSizesDictionary,
  };
  const deletedImgIds = formData.getAll("deleted") as string[];
  if (deletedImgIds.length > 0) {
    for (let i = 0; i < deletedImgIds.length; i++) {
      await removeImage(deletedImgIds[i]);
    }
  }
  if (newImages.length > 0) {
    for (let i = 0; i < newImages.length; i++) {
      await addImage({
        productId: id,
        imageContent: newImages[i],
        isPrimary: false,
      });
    }
  }
  if (newPrimaryImg) {
    await addImage({
      productId: id,
      imageContent: newPrimaryImg,
      isPrimary: true,
    });
  }
  await updateShopItem({ id: id, itemData: newItemData });
  return redirect(`/shop/products/${id}`);
}

export default function ProductPage() {
  const loaderDataPromise = useLoaderData() as Awaited<{
    data: shopItemInterface;
  }>;
  const params = useParams();

  const { data: itemData } = useQuery({
    ...shopItemDataQuery(params.id as string),
    initialData: loaderDataPromise,
  });
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <Suspense fallback={<p>Pobieranie danych o przedmiocie..</p>}>
        <Await resolve={itemData}>
          {(itemData: shopItemInterface) => <ShopItem item={itemData} />}
        </Await>
      </Suspense>
    </>
  );
}
