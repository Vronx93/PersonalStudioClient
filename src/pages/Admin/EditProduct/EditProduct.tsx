import {
  addImage,
  getShopItem,
  removeImage,
  updateShopItem,
} from "../../../api/api";
import EditShopItemForm from "../../../components/EditShopItemForm/EditShopItemForm";
import {
  Await,
  defer,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";
import {
  availableSizesDictionary,
  shopItemInterface,
} from "../../../interfaces";
import { Suspense, useEffect } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { createDictionary } from "./EditProduct.utils";

function shopItemDataQuery(id: string) {
  return {
    queryKey: ["products", id],
    queryFn: async () => await getShopItem(id),
    staleTime: 60 * 1000 * 5,
  };
}

async function loader({
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

async function action({
  request,
  queryClient,
  params,
}: {
  request: Request;
  queryClient: QueryClient;
  params: { id: string };
}) {
  const formData = await request.formData();
  const primaryImg = formData.get("primaryImg");
  const imageList = formData.getAll("image");
  const deletedImgList = formData.getAll("deletedImg");
  const name = formData.get("name");
  const description = formData.get("description");
  const shortDescription = formData.get("shortDescription");
  const price = formData.get("price");
  const count = formData.get("count");
  const sizes = formData.getAll("size");
  const sizesAmount = formData.getAll("amount");

  await updateShopItem({
    id: params.id,
    itemData: {
      name: name as string,
      shortDescription: shortDescription as string,
      description: description as string,
      price: price as unknown as number,
      count: count as unknown as number,
      availableSizes: createDictionary(
        sizes as string[],
        sizesAmount as unknown as number[]
      ) as availableSizesDictionary,
    },
  });
  if (imageList.length > 0) {
    for (const image of imageList) {
      await addImage({
        productId: params.id,
        imageContent: image as string,
        isPrimary: false,
      });
    }
  }
  if (primaryImg) {
    await addImage({
      productId: params.id,
      imageContent: primaryImg as string,
      isPrimary: true,
    });
  }
  if (deletedImgList) {
    for (const deletedImg of deletedImgList) {
      await removeImage(deletedImg as string);
    }
  }
  await queryClient.invalidateQueries({
    queryKey: ["products"],
  });
  return redirect(`/admin/products`);
}

export default function EditProduct() {
  const initialData = useLoaderData() as Awaited<{
    data: shopItemInterface;
  }>;
  const params = useParams() as { id: string };
  const { data: itemData } = useQuery({
    ...shopItemDataQuery(params.id),
    initialData,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <Suspense fallback={<p>Pobieranie danych o przedmiocie..</p>}>
        <Await resolve={itemData}>
          {(itemData: shopItemInterface) => (
            <EditShopItemForm item={itemData} />
          )}
        </Await>
      </Suspense>
    </>
  );
}

EditProduct.loader = loader;
EditProduct.action = action;
