import { Await, defer, useLoaderData } from "react-router-dom";
import { getOnlinePlanOptions } from "../../../api/api";
import AdminActionBar from "../../../components/AdminActionBar/AdminActionBar";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import Button from "../../../components/Button/Button";
import { OnlinePlanGetOptionInterface } from "../../../interfaces";
import { Suspense } from "react";
import AdminOnlineOptionsList from "../../../components/AdminOnlineOptionsList/AdminOnlineOptionsList";
import { QueryClient, useQuery } from "@tanstack/react-query";

function onlineOptionsQuery() {
  return {
    queryKey: ["onlineOptions"],
    queryFn: async () => await getOnlinePlanOptions(),
    staleTime: 1000 * 60 * 5,
  };
}

async function loader(queryClient: QueryClient) {
  const query = onlineOptionsQuery();
  const data =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(onlineOptionsQuery()));
  return defer({ onlineOptionsPromise: data });
}

export default function AdminOnlineOptions() {
  const optionsPromise = useLoaderData() as unknown as Awaited<{
    onlineOptionsPromise: OnlinePlanGetOptionInterface[];
  }>;

  const { data: onlineOptions } = useQuery({
    ...onlineOptionsQuery(),
    initialData: optionsPromise.onlineOptionsPromise,
  });

  return (
    <>
      <AdminHeader title={"Opcje planu ONLINE"} />
      <AdminActionBar>
        <Button link={"/admin/add-online-option"} text={"Dodaj +"} />
      </AdminActionBar>
      <Suspense fallback={<p>Ładowanie opcji planu ONLINE..</p>}>
        <Await resolve={onlineOptions}>
          {(onlineOptions: OnlinePlanGetOptionInterface[]) => (
            <AdminOnlineOptionsList options={onlineOptions} />
          )}
        </Await>
      </Suspense>
    </>
  );
}

AdminOnlineOptions.loader = loader;
