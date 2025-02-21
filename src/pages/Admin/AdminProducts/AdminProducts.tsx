import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { shopItemInterface } from "../../../interfaces";
import { defer } from "react-router-dom";
import { getShopItems } from "../../../api/api";
import AdminProductList from "../../../components/AdminProductList/AdminProductList";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import AdminActionBar from "../../../components/AdminActionBar/AdminActionBar";
import Button from "../../../components/Button/Button";
import styles from "./AdminProducts.module.css";
import { QueryClient, useQuery } from "@tanstack/react-query";

const productsQuery = () => {
  return {
    queryKey: ["products"],
    queryFn: async () => await getShopItems(),
    staleTime: 1000 * 5 * 60,
  };
};

async function loader({ queryClient }: { queryClient: QueryClient }) {
  const query = productsQuery();
  const productsData =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(productsQuery()));
  return defer({ productsPromise: productsData });
}

export default function AdminProducts() {
  const loaderData = useLoaderData() as Awaited<{
    productsPromise: shopItemInterface[];
  }>;

  const { data: products } = useQuery({
    ...productsQuery(),
    initialData: loaderData,
  });

  return (
    <>
      <AdminHeader title={"Produkty"} />
      <AdminActionBar>
        <Button
          link={"/admin/add-product"}
          text={"Dodaj +"}
          className={styles.btn}
        />
      </AdminActionBar>
      <Suspense fallback={<p>Trwa ładowanie produktów...</p>}>
        <Await resolve={products}>
          {(products) => <AdminProductList productList={products} />}
        </Await>
      </Suspense>
    </>
  );
}

AdminProducts.loader = loader;
