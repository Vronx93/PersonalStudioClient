import { QueryClient, useQuery } from "@tanstack/react-query";
import { getTransformations } from "../../../api/api";
import { Await, defer, useLoaderData } from "react-router-dom";
import { GetTransformationData } from "../../../interfaces";
import { Suspense } from "react";
import AdminTransformationList from "../../../components/AdminTransformationList/AdminTransformationList";
import AdminActionBar from "../../../components/AdminActionBar/AdminActionBar";
import Button from "../../../components/Button/Button";
import styles from "./AdminTransformations.module.css";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";

function transformationsQuery() {
  return {
    queryKey: ["transformationList"],
    queryFn: async () => await getTransformations(),
    staleTime: 1000 * 60 * 5,
  };
}

async function loader({ queryClient }: { queryClient: QueryClient }) {
  const query = transformationsQuery();
  const data =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(transformationsQuery()));
  return defer({ data });
}

export function AdminTransformations() {
  const loaderDataPromise = useLoaderData() as Awaited<{
    data: GetTransformationData[];
  }>;
  const { data: transformations } = useQuery({
    ...transformationsQuery(),
    initialData: loaderDataPromise,
  });

  return (
    <>
      <AdminHeader title={"Transformacje"} />
      <AdminActionBar>
        <Button
          link={"/admin/add-transformation"}
          text={"Dodaj +"}
          className={styles.btn}
        />
      </AdminActionBar>
      <Suspense fallback={<p>Ładowanie transformacji..</p>}>
        <Await resolve={transformations}>
          {(transformationList: GetTransformationData[]) => (
            <AdminTransformationList transformationList={transformationList} />
          )}
        </Await>
      </Suspense>
    </>
  );
}

AdminTransformations.loader = loader;
