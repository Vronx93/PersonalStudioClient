import { Await, defer, useLoaderData } from "react-router-dom";
import { getShopItems } from "../../../api/api";
import ShopItemList from "../../../components/ShopItemList/ShopItemList";
import { shopItemInterface } from "../../../interfaces";
import { Suspense, useLayoutEffect } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";

function shopItemListQuery() {
  return {
    queryKey: ["products"],
    queryFn: async () => await getShopItems(),
    staleTime: 1000 * 60 * 5,
  };
}

export async function loader(queryClient: QueryClient) {
  const query = shopItemListQuery();
  const data =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(shopItemListQuery()));
  return defer({ data });
}

export default function ProductsList() {
  const loaderPromise = useLoaderData() as unknown as {
    loaderShopItems: shopItemInterface[] | [];
  };

  const { data: products } = useQuery({
    ...shopItemListQuery(),
    initialData: loaderPromise,
  });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <Suspense fallback={<p>Pobieranie listy produktów</p>}>
        <Await resolve={products}>
          {(productList) => <ShopItemList shopItems={productList} />}
        </Await>
      </Suspense>
    </>
  );
}
